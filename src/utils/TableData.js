import React, {useState, useEffect} from "react";
import API from "./API";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Filter from "../components/Filter";

const TableData = () => {
const [data, setData] = useState([]);
const [initialData, setInitialData] = useState({});
const [page, setPage] = useState(1);
const [pagesPer] = useState(10);
const [search, setSearch] = useState(null);
const [genre, setGenre] =useState([]);

	// Fetching data on mount
	useEffect(() => {
		API.tables()
			.then(res => {
				setInitialData(res);
				sortData(res);
			})
	}, []);

	const dataReducer = data => { setData(data)};

	// Alphabetical sort of returned data
	const sortData = (data) => {
		let sortedData = [...data];
		sortedData.sort((a,b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		
		dataReducer(sortedData);
	};

	// Processes filter changes sent from Filter.js
	function filterDataItems(a,b) {
		if (b === "All States") {
			sortData(initialData)
		} else {
			const filteredData = initialData.filter(item => item[a] === b);
			if (filteredData.length === 0) {
				sortData([{
					id: Math.floor(Math.random() * 20),
					name: 'No results for ' + b
				}])
			}
			else {
				return sortData(filteredData);	
			}
		}
	};

	// Applies Search filter 
	useEffect(() => {		
		const keys = ["city", "name", "genre"]
		const values = ["Albany"]
		var result = data.filter(e => {
			return keys.every(a => {
				console.log(a)
			  return values.includes(e[a])
			})
		  })
		 
		
		// data.filter(item => { 	 
		// 	console.log(asdf.includes(search))
		// 	return item.name.toLowerCase().includes(search.toLowerCase());			
		// })
	}, [search]);

	
	useEffect(() => {
		data.forEach(element => {
			genre.push(element.genre)
		})

	},[data])

	// Determine first and last index of data for pagination
	const indexOfLast = page * pagesPer;
	const indexOfFirst = indexOfLast - pagesPer;
	const processedData = data.slice(indexOfFirst, indexOfLast)

	const paginate = (pageNumber) => {
		setPage(pageNumber)
	};
	
	const searchData = (a) => {		
		setSearch(a);
	}

	return ( 
		<>
		<Search searchData={searchData} />
		<Filter 
			data={data} 
			sortData={sortData}
			filterDataItems={filterDataItems}
		/>
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