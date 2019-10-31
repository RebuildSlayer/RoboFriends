import React from 'react';
import './Card.css';

const Card = ({id,name,email}) => { 
	return(
		<div className="bg-light-green dib br3 ma2 
		pa3 grow tc bw2 shadow-5 custom">
			<img src={`https://robohash.org/${id}`}
			width="200px" height="200px" 
			alt={`Robot(${name})`}/>
			<div>
				<h3 className="name">{name}</h3>
				<p className="email">{email}</p>
			</div>
		</div>
		);
}

export default Card;