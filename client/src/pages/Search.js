import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieComponent from "../components/MovieComponent";
import MovieInfoComponent from "../components/MovieInfoComponent";


const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const Searchbox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-left: 250px;
    border-radius: 5px;
    width: 50%;
    background-color: white;
    border: solid white;
`;
const SearchInput = styled.input`
    color: black;
    font-size: 16px;
    border: none;
    outline: none;
    font-weight: bold;
    margin-left: 180px;
`;
const MovieListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px;
    gap: 20px;
`;

 

function Search(){
    const [searchTitles, setSearchTitles] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, onMovieSelect] = useState();
    
    const [timeoutId, setTimeoutId] = useState();

    const fetchData = async (searchString) => {
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchString}&apikey=f52d7e1e`,
        );
        setMovieList(response.data.Search);
    };

    const onTextChange = (e) => {
        onMovieSelect("")
        clearTimeout(timeoutId);
        setSearchTitles(e.target.value);
        const timeout = setTimeout(() => fetchData(e.target.value), 500);
        setTimeoutId(timeout);
    };
    return (
        <Container>
            <Searchbox>
                <SearchInput placeholder="Search for a Title" value={searchTitles} onChange={onTextChange} />
            </Searchbox>
            {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
            <MovieListContainer>
                {movieList?.length ? (
                    movieList.map((movie, index) => (
                        <MovieComponent movie={movie} key={index} onMovieSelect={onMovieSelect}/>
                ))) : (
                   <h2>You know your opinion is right. Search a movie to review</h2>
                )}    
            </MovieListContainer>
        </Container>
    )
}

export default Search;