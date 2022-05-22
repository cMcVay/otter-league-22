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
import PlayerSearch from './PlayerSearch';

function Home() {
    return (
        <div>
            <div className='headingContainer'>
                <h1><img src={OtterFantasyLogo} alt="Otter Baseball Logo" style ={{width: "25px"}}/>OTTER LEAGUE<img src={OtterFantasyLogo} alt="Otter Baseball Logo" style ={{width: "25px"}}/></h1>   
            </div>
            
            <nav className='navLinks'>
                <Link to='/Team/0' className="navLink"><img src={FrozenAcornsLogo} alt="logo"/></Link>
                <Link to='/Team/1' className="navLink"><img src={LunarDoodlesLogo} alt="logo"/></Link>
                <Link to='/Team/2' className="navLink"><img src={MagicManateesLogo} alt="logo"/></Link>
                <Link to='/Team/3' className="navLink"><img src={MightyMegabytesLogo} alt="logo"/></Link>
                <Link to='/Team/4' className="navLink"><img src={MindfulFreaksLogo} alt="logo"/></Link>
                <Link to='/Team/5' className="navLink"><img src={SlimAliensLogo} alt="logo"/></Link>  
            </nav>
            <Link to='/Standings'>Standings</Link>
            <ScoresThisPeriod />
            <h4>Rule Change Being Considered</h4>
            <p>A change is being considered for Hitter Otter Points. The current ranges would be adjusted to make it more difficult for a player to reach the three, four, and five Otter Points thresholds. This change would not affect the current records, but it would lead to lower matchup scores that more closely mimic MLB scores. It would also create more interesting matchups with greater potential for higher scores as the week goes on. Additionally, the league leaders listing would be more accurate to players' performances.</p>
            <SampleCalculator />
            <PlayerSearch />
            <TransactionList />
        </div>
        
    )
};

export default Home;