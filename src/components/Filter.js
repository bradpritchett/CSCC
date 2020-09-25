import React from "react";
import {state} from "../utils/Data";

const Filter = ({filterDataItems}) => {
	const generateStates = () => {
		let options = [];
		for (let i = 0; i <= state.length; i++) {             
			options.push(<option key={i} value={state[i]}>{state[i]}</option>);   
	   }
	   return options;
	}

	const generateGenres = () => {
		let options = [];
		for (let i = 0; i <= state.length; i++) {             
			options.push(<option key={i} value={state[i]}>{state[i]}</option>);   
	   }
	   return options;
	}

	function selected(e) 	 {
		filterDataItems(e.target.name, e.target.value)
	}

	return (
		<div className="select">
			<select name="state" onChange={selected}>
				{(generateStates())}
			</select>
			<select>
				{(generateGenres())}
			</select>
		</div>
	)
}

export default Filter;