import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
       <h4>Welcome to Goalify. Please 
           <Link to="/signup">Sign Up</Link> 
            or  
           <Link to="/login">Log In</Link>
        </h4>
    </div>
);


export default Home;
