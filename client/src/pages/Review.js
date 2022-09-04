import React from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Review = () => {
    const {review} = useParams();

    
    return (
        <main>
            <body>
                <ul class="mininav">
                   <ul>Link to name</ul>
                   <ul>See More like this <i class="fas fa-arrow-right"></i></ul>
                </ul>
                <div class="row">
                <div class="col-md-8 container-lg" >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

                <div class="container-sm">
                    <div>
                        <h5>Movie title</h5>
                    </div>
                onic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </div>
                

                </div>
                <div class="container-md">
                onic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

                <i class="fas fa-hand-holding-heart"> Like this Movie</i>
              
            </body>
        </main>
    );
}
export default Review;