import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state={
            reviews:[],
            searchTerm:''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL)
        .then(resp => resp.json())
        .then(json => this.setState({reviews: json.results}))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Movie:</label>
                    <input></input>
                    <button value='submit'>Submit</button>
                    <MovieReviews />

                </form>

            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
