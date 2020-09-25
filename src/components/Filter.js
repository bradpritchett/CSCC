import React, {useState} from "react";
import {state,genres} from "../utils/Data";

const Filter = ({filterDataItems}) => {

	const [filter, setFilter] = useState({
		state: "All States",
		genres: "All Genres"
	});

	const generateStates = () => {
		let options = [];
		for (let i = 0; i <= state.length; i++) {             
			options.push(<option key={i} value={state[i]}>{state[i]}</option>);   
	   }
	   return options;
	};

	const generateGenres = () => {
		let options = [];
		for (let i = 0; i <= genres.length; i++) {             
			options.push(<option key={i} value={genres[i]}>{genres[i]}</option>);   
	   }
	   return options;
	};
	

	function selected(e) 	 {
		let name = e.target.name;
		let value = e.target.value;
		filterReducer(name, value);
	};

	const filterReducer = (a,b) => {
		let obj = {}
		obj = { ...filter, [a]: b}
		setFilter(obj);
		filterDataItems(obj)
	}

	return (
		<div className="select">
			<select name="state" onChange={selected} value={filter.states}>
				{(generateStates())}
			</select>
			<select name="genres" onChange={selected} value={filter.genres}>
				{(generateGenres())}
			</select>
		</div>
	)
}

export default Filter;