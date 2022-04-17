import React from 'react';
import { Link } from 'react-router-dom';
import SampleCalculator from './stats/SampleCalculator';
import TransactionList from './TransactionList';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link to='/Team/0'>Frozen Acorns</Link><br/>
                <Link to='/Team/1'>Lunar Doodles</Link><br/>
                <Link to='/Team/2'>Magic Manatees</Link><br/>
                <Link to='/Team/3'>Mighty Megabytes</Link><br/>
                <Link to='/Team/4'>Mindful Freaks</Link><br/>
                <Link to='/Team/5'>Slim Aliens</Link><br/><br/>
                <Link to='/Standings'>Standings</Link>
            </nav>
            <SampleCalculator />
            <TransactionList />
        </div>
        
    )
};

export default Home;