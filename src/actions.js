import { CHANGE_SEARCH_FIELD,
 		 REQ_ROBOTS_PENDING,
 		 REQ_ROBOTS_SUCCESS,
 		 REQ_ROBOTS_FAILED 
 		} 
 from './constants.js';

export const setSearchField = (text) => ({
		type :CHANGE_SEARCH_FIELD,
		payload : text
})


export const reqRobots = () => (dispatch) => {
	dispatch({ type : REQ_ROBOTS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => dispatch({ type : REQ_ROBOTS_SUCCESS , payload : users }))
	.catch(error => dispatch({ type : REQ_ROBOTS_FAILED , payload : error }))
}
