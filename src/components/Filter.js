import React, {useState} from "react";
import {state,genres} from "../utils/Data";

const Filter = ({filterDataItems}) => {

	const [filter, setFilter] = useState({
		state: "All States",
		genre: "All Genre"
	});

	const generateStates = () => {
		let options = [];
		for (let i = 0; i <= state.length; i++) {             
			options.push(<option key={i} value={state[i]}>{state[i]}</option>);   
	   }
	   return options;
	};

	const generateGenre = () => {
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
			<span>
				<select name="state" onChange={selected} value={filter.states}>
					{(generateStates())}				
				</select>
			</span>
			<span>
				<select name="genre" onChange={selected} value={filter.genre}>
					{(generateGenre())}
				</select>
			</span>	
		</div>
	)
}

export default Filter;