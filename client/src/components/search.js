import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Search.css';

const SearchBox = (props) => {
  const [search, setSearch] = useState("");
  return (
    <div className="col col-sm-4">
      <input className="form-control" placeholder="Search a Title..." value={props.value} onChange={(event) => props.setSearchInput(event.target.value)} />
      </div>
  );
};

const Search = () => {
  const [films, setFilms] = useState([]);
  const [searchInput, setSearchInput] = useState("");

const getFilmRequest = async (searchInput) => {
  const url = `http://www.omdbapi.com/?s=${searchInput}&apikey=f52d7e1e`;

  const response = await fetch(url);
  const responseJson = await response.json();

  if(responseJson.Search) {
  setFilms(responseJson.Search);
  }
};

useEffect(() => {
  getFilmRequest(searchInput);
}, [searchInput]);

const FilmList = (props) => {
  return (
      <>
      {props.films.map((film, index) => (
      <div className="d-flex justify-content-start m-3">
          <img src={film.Poster} alt="film" />
      </div>
      ))}
      </>
  );
  };

return (
  <div className=' film-search'>
    <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
    <div className='row'>
      </div>
    <div className="row">
    <FilmList films={films} />
    </div>
  </div>
);
};

export default Search;