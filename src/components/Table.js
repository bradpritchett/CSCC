import React from "react";

const Table = ({data}) => {
	
	return (
		<table>
			<thead>
				<tr>
					<th>Restaurant</th>
					<th>Address</th>
					<th>City</th>
					<th>State</th>
					<th>Telephone</th>
					<th>Genre</th>
				</tr>
			</thead>
			<tbody>
				{data.map(restaurant => {
				return <tr key={restaurant.id}>
						<td>{restaurant.name}</td>
						<td>{restaurant.address1}</td>
						<td>{restaurant.city}</td>
						<td>{restaurant.state}</td>
						<td>{restaurant.telephone}</td>
						<td>{restaurant.genre}</td>
					</tr>
				})}
			</tbody>
		</table>
	)
}

export default Table;