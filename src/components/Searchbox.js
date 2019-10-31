import React from 'react';


const Searchbox = ({searchChange}) => {
		return(
			<div className="pa2">
				<input type="search" 
				placeholder="Search Robots Here"
				className="pa3 ba b--green 
				bg-lightest-blue"
				onChange={searchChange}
				/>
			</div>
		);
}

export default Searchbox;