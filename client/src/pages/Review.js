import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import ThoughtForm from '../components/ThoughtForm/index'
import { QUERY_THOUGHTS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom'



import { QUERY_USER, QUERY_ME } from '../utils/queries';
import StarRating from '../components/Rating/Rating';
import Auth from '../utils/auth';
import ThoughtList from "../components/ThoughtList";

const Review = (props) => {
    const location = useLocation()
    console.log(location.state.movie)
    const movieData = location.state.movie
    const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=tt1457767&apikey=f52d7e1e`,
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
   
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

    return (
        <main>
            <body>
                <ul class="mininav">
                   <ul><h1 clas="Title">{movieData.Title}</h1></ul>
                   {/* <ul>See More like this <i class="fas fa-arrow-right"></i></ul> */}
                </ul>     
               
               <div class="row">
                    <div class="container">
                        <div class="container-sm">
                        <div class="pb-3"><img src={movieData.Poster} alt={movieInfo?.Title}></img></div>
                        </div>
                        <div class="row">
                            <div class="reviewbox">
                                <div class="col-sm"><h1 class="redbg">Details</h1>Plot:<span> {movieInfo?.Plot} </span>  
                                <br></br>Genre: <span>{movieData.Type}</span> 
                                <br></br> Rated: <span>{movieData.Rated}</span>
                                <br></br>Languages: <span>{movieInfo?.Language}</span></div>
                            </div>
                            <div class="reviewbox2">
                                
                                <div class="col-md"><h1><span id="rateMe2"  class="empty-stars"></span>Rate and Review !</h1>
                               <div><StarRating /></div>
                               <div><ThoughtForm /></div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col"><h4>What Others Say</h4>
                    <div class="seedreviews">
                        <div class="otherrstyle">
                        <section class="first">
                            <div class="container-xl">
                                <h6 class="reviewname">ImDb</h6>
                                <p4>{movieInfo?.imdbRating}</p4>
                            </div>
                        </section>
                        
                        <section class="second">
                        <div class="container-xl">
                                <h6 class="reviewname">Metascore</h6>
                                <p4>{movieInfo?.Metascore}</p4>
                            </div>
                          
                        </section>
                        <section class="third">
                        <div class="container-xl">
                            <div><ThoughtList 
                             thoughts={thoughts}
                             /></div>
                                {/* <h6 class="reviewname">Kino</h6>
                                <p4>Julian has bad taste!</p4> */}
                            </div>
                          
                        </section>

                    </div>
                    </div>
                    
                    </div>
                </div>
                <div class="reviewlike">
                <h1><i class="fas fa-heart"></i></h1>
                </div>
              
            </body>
           
        </main>
    );
}
export default Review;