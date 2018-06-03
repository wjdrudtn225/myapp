import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


class Movie extends Component{

  static propTypes = {
    title:  PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
  }

  render(){
    return(
      <div className="Movie">
        <div className="Movie_Columns">
          <MoviePoster poster = {this.props.poster}/>
      </div>
        <div className="Movie_Columns">
      <h1>{this.props.title}</h1>
      <div className="Movie_Genres">
        {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
      </div>
      <p className="Movie_Synopsis">
          {synopsis}
        </p>
    </div>
    )
  }
}

function MovieGenre({genre}){
  return(
    <span className="Movie_Genre"> {genre} </span>
  )
}

MovieGenre.propTypes={
  genre: PropTypes.string.isRequired
}

  function MoviePoster({poster}){
    return (
      <img src={poster} alt="Movie Poster"/>
    )
  }

export default Movie
