import React, {useState, useEffect} from "react";
import API from "../utils/API";
import Table from "./Table";
import Pagination from "./Pagination";

const TableData = () => {
const [data, setData] = useState([]);
const [page, setPage] = useState(1);
const [pagesPer] = useState(10);
const [sortedField, setSortedField] = useState(null);

	// Fetching data on mount
	useEffect(() => {
		API.tables()
			.then(res => {
				setData(res);
			})
	}, []);
	
	let sortedData = [...data];
	sortedData.sort((a,b) => {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	})

	const indexOfLast = page * pagesPer;
	const indexOfFirst = indexOfLast - pagesPer;
	const currentPage = sortedData.slice(indexOfFirst, indexOfLast)
	
	const paginate = (pageNumber) => {
		setPage(pageNumber)
	}

	return ( 
		<>
		<Table data={currentPage} />
		<Pagination pagesPer={pagesPer} total={data.length} paginate={paginate} />
		</>
	)
}

export default TableData;