import React, {useState, useEffect} from "react";
import API from "./API";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Filter from "../components/Filter";

const TableData = () => {
const [data, setData] = useState([]);
const [initialData, setInitialData] = useState([{}]);
const [page, setPage] = useState(1);
const [pagesPer] = useState(10);
const [searchText, setSearchText] = useState("default");
const [filters, setFilters] = useState({
	state: "All States",
	genre: "All Genre"
})

	// Fetching data on mount
	useEffect(() => {
		API.tables()
			.then(res => {
				setInitialData(res);
				sortData(res)				
			})
	}, []);

	// Alphabetical sort of returned data
	const sortData = (arg) => {
		let sortedData = [...arg];

		sortedData.sort((a,b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});

		//Sent to the reducer to set state with sorted date
		dataReducer(sortedData);
	};
	
	// Data state set here only
	const dataReducer = arg => { setData(arg)};

	// Processes filter changes sent from Filter.js
	function filterItems() {
		//resets pagination to first page
		
		const state = filters.state;
		const genre = filters.genre;
		let filteredData = initialData;

		if (state.includes("All") && genre.includes("All")) {
			sortData(initialData);
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
					name: 'No results for ' + state
				}])
			}
			else {
				return sortData(filteredData);	
			}
	};

	// Search function
	function searchItems() {
		const excludeKeys = ["id", "address1", "state", "zip", "lat", "long","telephone","tags", "website","hours","attire"];

		const lowerCaseValue = searchText.toLowerCase();
		  if (lowerCaseValue === "") {
			filterDataItems(filters);
		}
		  else {
			  const filteredData = data.filter(item => {
			return Object.keys(item).some(key =>
				excludeKeys.includes(key) ? false : item[key].toString().toLowerCase().includes(lowerCaseValue)
			);
		  });
		  sortData(filteredData);
		}
	}

	// Runs Search filter function when state.searchText is updated
	useEffect(() => {		
		setPage(1);
		searchItems();
	}, [searchText]);
	
	useEffect(() => {
		setPage(1);
		filterItems();
	}, [filters])

	useEffect(() => {
		sortData(initialData)
	},[])
	// Function passed to Search.js
	const searchData = (arg) => {
		setSearchText(arg);
	}

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