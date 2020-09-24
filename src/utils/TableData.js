import React, {useState, useEffect} from "react";
import API from "./API";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

const TableData = () => {
const [data, setData] = useState([]);
const [page, setPage] = useState(1);
const [pagesPer] = useState(10);
const [sortKey, setSortKey] = useState('name');
const [search, setSearch] = useState(null);

	// Fetching data on mount
	useEffect(() => {
		API.tables()
			.then(res => {
				sortData(res);
			})
	}, []);

	// Alphabetical sort of returned data
	const sortData = (data) => {
		let sortedData = [...data];
		sortedData.sort((a,b) => {
			if (a[sortKey] < b[sortKey]) {
				return -1;
			}
			if (a[sortKey] > b[sortKey]) {
				return 1;
			}
			return 0;
		});
		setData(sortedData);
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
		  console.log(result)
		
		// data.filter(item => {
		// 	console.log(asdf.includes(search))
		// 	return item.name.toLowerCase().includes(search.toLowerCase());			
		// })
	}, [search]);

	
	useEffect(() => {
		console.log(data)
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