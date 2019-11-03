import React,{Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return{
		searchField : state.searchField
	}
}

const mapDispatchToProps = dispatch => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component{
	constructor(){
		super();
		this.state={
			robots : []
		}
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users =>this.setState({robots : users}))
}


	render(){
		const { robots } = this.state;
		const { searchField , onSearchChange } = this.props;
		const filterRobots = robots.filter((robot) =>{
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})

		return(
			<ErrorBoundary>
			<div className="tc">
				<img 
				src="robofriends.png" 
				alt="Robofriends" 
				style={{ width : '500px' , marginTop : '10px'}}
				/><br/><br/>
				<Searchbox searchChange={onSearchChange}/><br/>
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
export default connect( mapStateToProps , mapDispatchToProps )(App);