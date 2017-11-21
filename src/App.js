import React, { Component } from 'react';
import './App.css';
//import Movies from './movies.js';
import Events from './events.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [{title:'' },{startTime:'' }],
      event_value: ''
    };

    this.change_textbox = this.change_textbox.bind(this);
    this.click_search = this.click_search.bind(this);
  }

  change_textbox(event) {
    this.setState({event_value: event.target.value});
  }

  click_search(event) {
    axios.get("http://replayfxcalendar.azurewebsites.net/public/").then(
      (response) => {
        this.setState({events: response.data})
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Event Finder</h1>
        </header>
        <p className="App-intro">
          Please search for event information
        </p>
        <input type="text" value={this.state.events_value} onChange={this.change_textbox}/>
        <button onClick={this.click_search}>Search</button>
        <Events list_of_events = {this.state.events}/>
      </div>
    );
  }
}

export default App;
