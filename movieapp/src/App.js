import React, { Component } from 'react';
import './App.css';
import Movie from './Movie/Movie.js';


const movies =[
  {
    title: "Matrix",
    poster: "http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "http://4.bp.blogspot.com/-a484caD2oLA/VZKEpZlVhAI/AAAAAAAAGSc/rjzdiYGE00Q/s400/full_metal_jacket_ver2_xlg.jpg"
  },
  {
    title: "Old Boy",
    poster: "https://cdn.namuwikiusercontent.com/s/3db7e38e3c04d83881e30900c0cfa80e97bcbce8bad4d71201d88af0c85712910fbf16e411d05ca81d3092591cdc157c550d977ba8c05c3a7fe39f13bea3a9a34d183970176541574c2a3201d17e7ee7?e=1531600620&k=alvZecUvqPLYDtqeMTCUAQ"
  },
  {
    title: "Star Wars",
    poster: "http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web-300x374.jpg"
  }

]

class App extends Component {

  componentWillMount(){
    console.log('will mount')
  }

  componentDidMount(){
    console.log('did mount')
  }

  render() {
    console.log('did render')
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
