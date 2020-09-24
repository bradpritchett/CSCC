import React from "react";

const Pagination = ({pagesPer, total, paginate}) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(total / pagesPer); i++) {
		pageNumbers.push(i);
	}
	return (
		<ul className="pagination">
			{pageNumbers.map(number => (
				<li key={number}>
					<a onClick={() => paginate(number)} href="!#" >
						{number}
					</a>

				</li>
			))}
		</ul>
	)
}

export default Pagination;