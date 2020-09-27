import React, {useState, useEffect} from "react";
import API from "./API";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Filter from "../components/Filter";

const TableData = () => {
const [data, setData] = useState([{
	id: Math.floor(Math.random() * 20)
}]);
const [initialData, setInitialData] = useState([{}]);
const [page, setPage] = useState(1);
const [pagesPer] = useState(10);
const [searchText, setSearchText] = useState("");
const [filters, setFilters] = useState({
	state: "All States",
	genre: "All Genre"
})
	// Sorted data state set here only
	const dataReducer = sortedData => setData(sortedData);

	// Alphabetical sort of returned data
	const sortData = (sortedData) => {

		sortedData.sort((a,b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		//Sent to the reducer to set state with sorted data
		dataReducer(sortedData);
	};
	

	const finalFilter = (filteredData) => {
		if (filteredData.length === 0) {
			sortData([{
					id: Math.floor(Math.random() * 20),
					name: 'No results'
				}])
			}
			else {
				return sortData(filteredData);	
			}
	};

	// Search function
	function searchItems(sortedData) {
		const excludeKeys = ["id", "address1", "state", "zip", "lat", "long","telephone","tags", "website","hours","attire"];
		const lowerCaseValue = searchText.toLowerCase();
		  if (lowerCaseValue === "") {
			  sortData(sortedData);
		}
		  else {
			const filteredData = sortedData.filter(item => {
			return Object.keys(item).some(key =>
				excludeKeys.includes(key) ? false : item[key].toString().toLowerCase().includes(lowerCaseValue)
			);
		  });

		  finalFilter(filteredData)
		}
	};

	// Processes filter changes sent from Filter.js
	function filterItems() {
		const state = filters.state;
		const genre = filters.genre;
		let filteredData = initialData;

		if (state.includes("All") && genre.includes("All")) {
			finalFilter(filteredData);
		}
		else if (!state.includes("All") && genre.includes("All")) {
			filteredData = initialData.filter(item => item.state === state)				
				
		} else if (state.includes("All") && !genre.includes("All")) {
			filteredData = initialData.filter(item => item.genre.includes(genre))				
		 }
		  else {		 
			 filteredData = initialData.filter(item => item.state === state);
			 filteredData = filteredData.filter(item =>  item.genre.includes(genre));	 
		 }
		 if (filteredData.length === 0) {
			sortData([{
					id: Math.floor(Math.random() * 20),
					name: 'No results'
				}])
			}
			else {
				searchItems(filteredData)
			}
	};
	
	// Resets pagination and runs Search filter function when searchText is updated
	useEffect(() => {		
		setPage(1);
		filterItems();
	}, [searchText]);
	
	// Runs filters when filters are changed
	useEffect(() => {
		setPage(1);
		filterItems();
	}, [filters]);

	// Runs filters on first processed data
	useEffect(() => {
		filterItems()
	},[initialData]);

	// Fetching data on mount
	useEffect(() => {
		API.tables()
			.then(res => {
				setInitialData(res);
			})
	}, []);

	// Function passed to Search.js
	const searchData = (arg) => {
		setSearchText(arg);
	}

	// On return from filter component, builds returned args into new filter
	const filterDataItems = (arg) => {
		let newKey = Object.keys(arg);
		newKey = newKey[0];
		setFilters({...filters, [newKey]: arg[newKey] });
	};
	
	// Determine first and last index of data for pagination
	const indexOfLast = page * pagesPer;
	const indexOfFirst = indexOfLast - pagesPer;
	const processedData = data.slice(indexOfFirst, indexOfLast)

	const paginate = (pageNumber) => {
		setPage(pageNumber)
	};
	
	
	return ( 
		<>
		<Search searchData={searchData} />
		<div className="select">
			<span>
				<Filter
					name={'state'}
					filterDataItems={filterDataItems}
				/>
			</span>
			<span>
				<Filter 
					name={'genre'} 
					filterDataItems={filterDataItems}
				/>
			</span>
		</div>
		<Table data={processedData} />
		<Pagination 
			pagesPer={pagesPer} 
			page={page} 
			total={data.length} 
			paginate={paginate}
		 />
		</>
	)
}

export default TableData;