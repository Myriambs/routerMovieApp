import React, { useState } from "react";
import { data } from "./data.js";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Form from "./components/Form";
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Trailer from "./components/Trailer.js";
function App() {
  const [movieData, setMovieData] = useState(data);
  const [nameSearch, setNameSearch] = useState("");  //( ici a ne pas oublier il faut initier avec une chaine vide pour ne pas donner d'undefined value)
  const addMovie = (newMovie) => {
    setMovieData([...movieData, newMovie]);
  };

  return (
    <>
      <Header setNameSearch={setNameSearch} />
      <Routes>
        <Route path='/movie' element={<MovieList movieData={movieData} nameSearch={nameSearch} />} />
 <Route path='/add' element={ <Form addMovie={addMovie} />} />
 <Route path='/trailer/:id' element={  <Trailer/> } />
      </Routes>
    </>
  );
}

export default App;
























// // modif challenge API 
// import React, { useState, useEffect } from "react";
// import Header from "./components/Header";
// import MovieList from "./components/MovieList";
// import Form from "./components/Form";
// import "./App.css";
// import {data} from './data'
// // const KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
// // const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
// // const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;

// function App() {
//   const [movieData, setMovieData] = useState(data);
//   const [nameSearch, setNameSearch] = useState("");

//   // Fetch initial movies from TMDb API
//   // useEffect(() => {
//   //   fetchMovies(API_URL);
//   // }, []);

//   // Function to fetch movies
//   // const fetchMovies = async (url) => {
//   //   try {
//   //     const res = await fetch(url);
//   //     const data = await res.json();
//   //     setMovieData(data.results);
//   //   } catch (error) {
//   //     console.error("Error fetching movies:", error);
//   //   }
//   // };

//   // Handle search when nameSearch changes
//   // useEffect(() => {
//   //   if (nameSearch.trim()) {
//   //     fetchMovies(`${SEARCH_API}${nameSearch}`);
//   //   } else {
//   //     fetchMovies(API_URL); // fetch default movies if search is empty
//   //   }
//   // }, [nameSearch]);

//   // Function to add a new movie manually
//   const addMovie = (newMovie) => {
//     setMovieData([...movieData, newMovie]);
//   };

//   return (
//     <>
//       <Header setNameSearch={setNameSearch} />
//       <MovieList movieData={movieData} nameSearch={nameSearch} />
//       <Form addMovie={addMovie} />
//     </>
//   );
// }

//  export default App;
