import React, { Component } from 'react';

class Movies extends Component {
    render() {
        return <ul>{this.props.list_of_movies.map((values, i) =>
        {
            return <img src={values.Poster} />
        }
      )}
      </ul>;
    }
}

export default Movies;
