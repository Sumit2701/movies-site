import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import "./style.css";
import Moviesdata from './moviesdata'
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=dba7764d";


const App = () => {
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const searchData = await response.json();
    setmovies(searchData.Search);
    console.log(movies)
  };
 
  
  const[movies,setmovies]=useState([]);
  const[searchTerm,setSearchTerm]=useState([]);
  useEffect(() => {
    searchMovie("Batman");
  }, []);
  
  return (
    <div className="app">
      <h1>Sumit's Movie world</h1>
      <div className="search">
        <input
          value={searchTerm}
          placeholder="Search your favourite movie"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
         <img
          src={'./logo192.png'}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />

      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Moviesdata movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
