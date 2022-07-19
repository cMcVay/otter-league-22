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
            <h4>All Star Game Tonight</h4>
            <p>AL</p>
            <p>SP: Shane McClanahan (MB)</p>
            <ol>
                <li>Shohei Ohtani (MF)</li>
                <li>Aaron Judge (MB)</li>
                <li>Rafael Devers (FA)</li>
                <li>Vladimir Guerrero Jr (LD)</li>
                <li>Giancarlo Stanton (MB)</li>
                <li>Byron Buxton (MT)</li>
                <li>Tim Anderson (MT)</li>
                <li>Andres Gimenez</li>
                <li>Alejandro Kirk</li>
            </ol>
            <p>NL</p>
            <p>SP: Clayton Kershaw (MT)</p>
            <ol>
                <li>Ronald Acuna Jr (MT)</li>
                <li>Mookie Betts (FA)</li>
                <li>Manny Machado (MF)</li>
                <li>Paul Goldschmidt (SA)</li>
                <li>Trea Turner (MT)</li>
                <li>Wilson Contreras</li>
                <li>William Contreras</li>
                <li>Joc Pederson (MB)</li>
                <li>Jeff McNeil</li>
            </ol>
            <h4>All Star Rosters Announced</h4>
            <p>Here are how the points are rewarded for the All Star Game selections (1pt per player):</p>
            <ul>
                <li><b>Frozen Acorns (11):</b> Arenado, Devers, Alonso, Alvarez, Springer, Cole, Burnes, Diaz, Chisholm Jr, Betts, Perez</li>
                <li><b>Mighty Megabytes (10):</b> Bogaerts, Judge, Stanton, Hader, Cortes, McClanahan, Cron, Pederson, Martinez, Freeman</li>
                <li><b>Magic Manatees (9):</b> Turner, Trout, Acuna Jr, Buxton, Alcantara, Kershaw, Anderson, Rodon, Seager</li>
                <li><b>Mindful Freaks (8):</b> Ramirez, Machado, Ohtani, Marte, Schwarber, Rodriguez, Musgrove, Verlander</li>
                <li><b>Lunar Doodles (5):</b> Guerrero Jr, Altuve, Harper, Tucker, Happ</li>
                <li><b>Slim Aliens (4):</b> Goldschmidt, Soto, Fried, Hendriks</li>
            </ul>
            <h4>Julio Rodriguez is Home Run Derby Winner (Mindful Freaks earn 2 pts)</h4>
            <p>Otter fantasy baseball encompasses the full season and post season. Teams can attain points towards the overall year's competition by not just finishing better in the regular season and postseason, but also by having more all stars. For each all star selection, a team in Otter Baseball is rewarded with 1 point towards the overall year. The breakdown of rewards otherwise are:</p>
            <ul>
                <li>Regular Season (1st: 15pts, 2nd: 12pts, 3rd: 9pts, 4th: 6pts, 5th: 3pts, 6th: 0pts)</li>
                <li>Postseason (1st: 10pts, 2nd: 8pts, 3rd: 6pts, 4th: 4pts, 5th: 2pts, 6th: 0pts)</li>
                <li>Home Run Derby Winner (2pts) </li> 
                <li>All Star Game MVP (2pts)</li>
                <li>Best Otter League Hitter (2pts)</li>
                <li>Best Otter League Pitcher (2pts)</li>
            </ul>             
            <h4>Rule Change Will Be Applied</h4>
            <p>A change to Otter Point hitter scoring will take effect later this season and will apply retroactively. The change is very unlikely to affect outcomes except in close matchups, but the new results will be more accurate to player performance. This change should be expected around Scoring Period 15.</p>
            <SampleCalculator />
            <PlayerSearch />
            <TransactionList />
        </div>
        
    )
};

export default Home;