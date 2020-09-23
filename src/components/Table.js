import React, {useState, useEffect} from "react";
import API from "../utils/API";

const Table = () => {
const [data, setData] = useState([]);

	useEffect(() => {
		API.tables()
			.then(res => setData(res))
	}, [])

	return ( 
		<table>
			<thead>
				<tr>
				<td>Restaurant</td>
				<td>Address</td>
				<td>City</td>
				<td>State</td>
				<td>Telephone</td>
				<td>Genre</td>
				</tr>
			</thead>
			<tbody>
				{data.map(table => {
					return <tr key={table.id}>
						<td>{table.name}</td>
						<td>{table.address}</td>
						<td>{table.city}</td>
						<td>{table.state}</td>
						<td>{table.telephone}</td>
						<td>{table.genre}</td>
						
					</tr>
				})}
			</tbody>
		</table>
	)
}

export default Table;