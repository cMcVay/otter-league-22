import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link to='/Team/0'>Frozen Acorns</Link>
                <Link to='/Team/Mittens'>Mittens</Link>
                <Link to='/Team/Mittens'>Mittens</Link>
                <Link to='/Team/Mittens'>Mittens</Link>
                <Link to='/Team/Mittens'>Mittens</Link>
                <Link to='/Team/Mittens'>Mittens</Link>
            </nav>
        </div>
        
    )
};

export default Home;