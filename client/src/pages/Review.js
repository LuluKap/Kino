import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Review = () => {
    const {review} = useParams();

    
    return (
        <main>
            <div>
            <h1>Hellow World</h1>
            </div>
        </main>
    );
}
export default Review;