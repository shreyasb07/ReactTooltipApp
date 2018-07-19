import React from 'react';
import axios from 'axios';
export default class GiphyList extends React.Component{
	state = {
		gifs: []
	}


	componentDidMount(){
// Make a request for a user with a given ID
	axios.get('http://api.giphy.com/v1/gifs/search')
  .then(function (response) {
    // handle success
    this.setState({gifs: response.data});
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
	}


	render() {
		return(
			<div>
			<ul>
				{this.state.gifs.map(gif => <li>{gif.url}</li>) }
			</ul>
			</div>
		);
	}
}