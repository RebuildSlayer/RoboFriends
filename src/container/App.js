import React,{Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state={
			robots : [],
			searchfield : ''
		}
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users =>this.setState({robots : users}))
}

searchChange=(event) => {
	this.setState({searchfield:event.target.value});
}

	render(){
		const { robots , searchfield } = this.state;
		const filterRobots = robots.filter((robot) =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})

		return(
			<ErrorBoundary>
			<div className="tc">
				<img 
				src="robofriends.png" 
				alt="Robofriends" 
				style={{ width : '500px' , marginTop : '10px'}}
				/><br/><br/>
				<Searchbox searchChange={this.searchChange}/><br/>
				<Scroll>
				{(!robots.length) ? 
			 	<h1 className="tc">Loading........!</h1> : 
				<CardList robots={filterRobots}/>}
				</Scroll>

			</div>
			</ErrorBoundary>
		);

	}
}
export default App;