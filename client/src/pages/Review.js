import React from 'react';
import { Navigate, useParams, Link,} from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import StarRating from '../components/Rating/Rating';
import Auth from '../utils/auth';

const Review = () => {
    const {review} = useParams();
   


    return (
        <main>
            <body>
                <ul class="mininav">
                   <ul><h1 clas="Title">Title</h1></ul>
                   {/* <ul>See More like this <i class="fas fa-arrow-right"></i></ul> */}
                </ul>     
               
               <div class="row">
                    <div class="container">
                        <div class="container-sm">
                        <div class="pb-3"><img src="Scarfacee.png"></img></div>
                        </div>
                        <div class="row">
                            <div class="reviewbox">
                                <div class="col-sm"><h1 class="redbg">What to Know</h1><p>Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print.</p></div>
                            </div>
                            <div class="reviewbox2">
                                
                                <div class="col-md"><h1><span id="rateMe2"  class="empty-stars"></span>Rate and Review !</h1>
                               <div><StarRating /></div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col"><h4>What Others Say</h4>
                    <div class="seedreviews">
                        <div class="otherrstyle">
                        <section class="first">
                            <div class="container-xl">
                                <h6 class="reviewname">Name</h6>
                                <p4>This movie was Amazing!!</p4>
                            </div>
                        </section>
                        
                        <section class="second">
                        <div class="container-xl">
                                <h6 class="reviewname">Name</h6>
                                <p4>Attack on Titan is Horribe</p4>
                            </div>
                          
                        </section>
                        <section class="third">
                        <div class="container-xl">
                                <h6 class="reviewname">Name</h6>
                                <p4>This movie was Amazing!!</p4>
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