
import TopSpot from './topspot';
import axios from 'axios';
import React, { Component } from 'react';



class App extends Component {

  constructor(props) {
    super(props);
//set up a mechanism for storing our data 
    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    //invoking the axios object
    axios
    // .. the .get function. Here we pass the URL of our external service.
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    // Here the first fulfill callback is setup.
	// This callback simply takes an HTTP response and returns the data property..
        .then(response => response.data)
    // .. to the second fulfill callback, which uses React's this.setState
	// function to merge the provided object (which uses ES6 shorthand)
	// with the current object assigned to this.state (which you assigned 
	// in your constructor!)
        .then(topspots => this.setState({topspots}));
  }

  render() {
    return (
      <div className='App'>
        <div className='top'>
        <h1>San Diego Top Spots</h1>
        <h3>A list of the top 30 places to see in San Diego, California.</h3>
        </div>
          {
            this.state.topspots.map(topspot => (
              <TopSpot
                  key={topspot.id}
                  name={topspot.name}
                  description={topspot.description}
                  location={topspot.location}
                  />
                
            ))
          }
          
      </div>
    );
  }
}

export default App;
