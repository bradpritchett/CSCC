import React,{useEffect} from "react";

const Pagination = ({pagesPer, page, total, paginate}) => {
	// Creates pageNumbers array with total pages required by dividing total by pages per
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(total / pagesPer); i++) {
		pageNumbers.push(i);
	};
	
	useEffect(() => {
		const paginationUl = document.querySelector('.pagination');
		const paginationLi = document.querySelectorAll(".pagination li");
		const activeLi = document.getElementsByClassName(`${page}`)

		for (let i = 0; i < paginationLi.length;i++) {
			paginationUl.classList.remove('load')
			paginationLi[i].classList.remove('active')
		}
			
		if (activeLi[0] !== undefined) {
			activeLi[0].classList.add('active')
		} 
	}, [page])
	
if (total < 10) {
	return (
		<></>
	)
} else {
	return (
		<ul className="pagination load">
			{pageNumbers.map(number => (
				<li key={number} className={number}>
					<a onClick={() => paginate(number)} href="#!"  >
						{number}
					</a>
				</li>
			))}
		</ul>
	)
}
	 
	

};

export default Pagination;