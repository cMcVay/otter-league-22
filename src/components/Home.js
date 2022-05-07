import React from 'react';
import { Link } from 'react-router-dom';
import ScoresThisPeriod from './ScoresThisPeriod';
import SampleCalculator from './stats/SampleCalculator';
import TransactionList from './TransactionList';
import OtterFantasyLogo from './images/OtterFantasyLogo.png';
import FrozenAcornsLogo from "./images/Frozen Acorns Logo.png";
import MindfulFreaksLogo from "./images/Mindful Freaks Logo.png";
import LunarDoodlesLogo from "./images/Lunar Doodles Logo.png";
import MightyMegabytesLogo from "./images/Mighty Megabytes Logo.png";
import SlimAliensLogo from "./images/Slim Aliens Logo.png";
import MagicManateesLogo from "./images/Magic Manatees Logo.png";
import './Home.css';

function Home() {
    return (
        <div>
            <div className='headingContainer'>
                <h1><img src={OtterFantasyLogo} alt="Otter Baseball Logo" style ={{width: "25px"}}/>OTTER LEAGUE<img src={OtterFantasyLogo} alt="Otter Baseball Logo" style ={{width: "25px"}}/></h1>   
            </div>
            
            <nav className='navLinks'>
                <Link to='/Team/0' className="navLink"><img src={FrozenAcornsLogo}/></Link>
                <Link to='/Team/1' className="navLink"><img src={LunarDoodlesLogo}/></Link>
                <Link to='/Team/2' className="navLink"><img src={MagicManateesLogo}/></Link>
                <Link to='/Team/3' className="navLink"><img src={MightyMegabytesLogo}/></Link>
                <Link to='/Team/4' className="navLink"><img src={MindfulFreaksLogo}/></Link>
                <Link to='/Team/5' className="navLink"><img src={SlimAliensLogo}/></Link>  
            </nav>
            <Link to='/Standings'>Standings</Link>
            <ScoresThisPeriod />
            <SampleCalculator />
            <TransactionList />
            <p>Potential Rules Update: Considering switching from 2 to 3 pitchers in each lineup. Also, the pitching factor would be smaller ranges. So a team may have two 8s and a 7, and if they can get to three 8s, they's move up a pitching factor. At the moment it seems too much of a guarantee that everyone gets a 3 PF.</p>
        </div>
        
    )
};

export default Home;