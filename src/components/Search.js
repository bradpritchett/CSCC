import React from "react";

const Search = ({searchData}) => {
	const handleInputChange = (e) => {
		const { value } = e.target;
		searchData(value);
	} 
return (
	<input type="text" name="search" onChange={handleInputChange}  />
	)
};

export default Search;