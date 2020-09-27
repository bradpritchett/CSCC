import React from "react";
import {state,genres} from "../utils/Data";

const Filter = ({filterDataItems, name}) => {
	// Pulls option lists from utils/Data
	const generateOptions = () => {
		let options = [];
		if (name === "state") {
			name = state
		} else {
			name = genres
		}
		for (let i = 0; i <= name.length; i++) {             
			options.push(<option key={i} value={name[i]}>{name[i]}</option>);   
	   }
	   return options;
	};
	// Processes filter selection
	function selected(e) 	 {
		let key = e.target.name;
		let value = e.target.value;
		let obj = {};
		obj = { [key]: value};
		filterDataItems(obj)
	};

	return (
		
		<select name={name} onChange={selected} >
			{(generateOptions())}
		</select>
	)
}

export default Filter;