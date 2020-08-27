import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
       <h5>
           <br /> <br />
           <Link className="home-link" to="/signup">Sign Up</Link> 
            
           <Link className="home-link" to="/login">Log In</Link>
        </h5>
        <img src={require('../goalify-hero.png')} alt="Goalify target" width="100%" />
    </div>
);

export default Home;
