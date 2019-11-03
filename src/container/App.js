import React,{Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField , reqRobots } from '../actions';

const mapStateToProps = state => {
	return{
		searchField : state.searchRobots.searchField,
		robots : state.reqRobots.robots,
		isPending : state.reqRobots.isPending,
		error : state.reqRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onReqRobots : () => dispatch(reqRobots())
	}
}

class App extends Component{

componentDidMount(){
	this.props.onReqRobots();
}


	render(){
		const { searchField , onSearchChange, robots, isPending } = this.props;
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
				{(isPending) ? 
			 	<h1 className="tc">Loading........!</h1> : 
				<CardList robots={filterRobots}/>}
				</Scroll>

			</div>
			</ErrorBoundary>
		);

	}
}
export default connect( mapStateToProps , mapDispatchToProps )(App);