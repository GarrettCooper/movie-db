import React, { Component } from 'react';

class Events extends Component {
    render() {
        return <ul> {this.props.list_of_events.map((values, i) =>
        {
            return <p>{values.title}</p>
        }
      )} </ul>;
    }
}

export default Events;
