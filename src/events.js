import React, { Component } from 'react';

class Events extends Component {
    render() {
      return <div> {this.props.list_of_events.map((values, i) =>
        {
            return (<div className="Events-Style" key={i}>{values.title} - {values.startTime}</div>)
        }
      )} </div>;
    }
}

export default Events;
