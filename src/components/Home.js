import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
       <h5>
           <Link to="/signup">Sign Up</Link> 
            or  
           <Link to="/login">Log In</Link>
        </h5>
        <img src={require('../goalify-hero.png')} width="100%" />
    </div>
);

export default Home;
