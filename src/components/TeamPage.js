import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import OtterFantasyLogo from './images/OtterFantasyLogo.png';
import ScoringPeriod from "./stats/ScoringPeriod";
import rawSchedule from "./RawSchedule";
import {Players, finalTeams} from "./AddTotals";
import './teamPage.css';
import {ScoringDay, periodNumber} from "./ScoringDay";
import { sortedStandings } from "./StandingsPage";


function TeamPage() {
    let { teamID } = useParams();
    let team = finalTeams.find(team => team.id === teamID)
    let matchup = [...rawSchedule][periodNumber-1].filter(match => match.home === team.id || match.away === team.id);
    let away = finalTeams.find(team => team.id === matchup[0].away);
    let home = finalTeams.find(team => team.id === matchup[0].home);

    let lastMatchup = [...rawSchedule][periodNumber-2].filter(match => match.home === team.id || match.away === team.id);
    let lastAway = finalTeams.find(team => team.id === lastMatchup[0].away);
    let lastHome = finalTeams.find(team => team.id === lastMatchup[0].home);

    const splitName = (name = '') => {
        const [firstName, ...lastName] = name.split(' ').filter(Boolean);
        return {
          firstName: firstName,
          lastName: lastName.join(' ')
        }
      }
    let place
    let findPlace = () => {
        let x = sortedStandings.findIndex(group => group.id === team.id);
        switch (x) {
            case 0:
                return "1st Place"
            case 1:
                return "2nd Place";
            case 2:
                return "3rd Place";
            case 3:
                return "4th Place";
            case 4:
                return "5th Place";
            case 5:
                return "6th Place";
        }
    }
    let record
    
    let findRecord = () => {
        let y = [...sortedStandings].filter(group => group.id === team.id);
        return (y[0].W + '-' + y[0].L)
    }
    record= findRecord();
    place = findPlace();

    return (
        <div>
            <div className='headingContainer'>
                <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1><img src={OtterFantasyLogo} alt="Otter Baseball Logo" style ={{width: "25px"}}/>OTTER LEAGUE<img src={OtterFantasyLogo} alt="Otter Baseball Logo" style ={{width: "25px"}}/></h1></Link>
            </div>
            <h1 style={{display: "inline"}}>{team.name}</h1>
            <img src={team.img} alt="Logo" style={{width: '75px', height: '75px', display: "inline"}}/>
            <h2>{place};  {record}</h2>
            <nav>
                <Link to={`/Roster/${teamID}`}>Roster</Link>
            </nav>
            <h2>Scoring Period {periodNumber}, Day {ScoringDay}</h2>
            <h4>Last week's matchup: {lastAway.name} {lastAway.TOT[periodNumber-2]} , {lastHome.name} {lastHome.TOT[periodNumber-2]} | <Link to={`/BoxScore/${periodNumber-2}/${lastHome.id}`} >Boxscore</Link> </h4>
            <h4>This week's matchup: {away.name} @ {home.name}</h4>
            <table className="leadscore">
                <thead>
                <tr>
                    <th></th>
                    <th>TOTAL</th>
                    <th>OP</th>
                    <th>PF</th>
                </tr></thead>
                <tbody><tr>
                    <td>{away.name}</td>
                    <td><b>{away.TOT[periodNumber-1]}</b></td>
                    <td>{away.OP[periodNumber-1]}</td>
                    <td>{away.PF[periodNumber-1]}</td>
                </tr>
                <tr>
                    <td>{home.name}</td>
                    <td><b>{home.TOT[periodNumber-1]}</b></td>
                    <td>{home.OP[periodNumber-1]}</td>
                    <td>{home.PF[periodNumber-1]}</td>
                </tr></tbody>
            </table>
            <br/>
            <h3>{away.name}</h3>
            <h4>Hitting</h4>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Day</th>
                    <th>Game</th>
                    <th>OP</th>
                    <th>T</th>
                </thead>
                <tbody>
                {Players.filter(player => player.otter === away.name && player.op[periodNumber-1] && !player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.day[periodNumber-1]}</td>
                        <td>{player.log[periodNumber-1]}</td>
                        <td>{player.op[periodNumber-1]}</td>
                        <td><b>{player.tot[periodNumber-1]}</b></td>
                    </tr>
                )
                    )}
                    </tbody>
            </table>
            <h4>Pitching</h4>
            <table>
                <thead>
                
                    <th>Name</th>
                    <th>Day</th>
                    <th>Game</th>
                    <th>OP</th>
                </thead>
                <tbody>
                {Players.filter(player => player.otter === away.name && player.op[periodNumber-1] && player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.day[periodNumber-1]}</td>
                        <td>{player.log[periodNumber-1]}</td>
                        <td>{player.op[periodNumber-1]}</td>
                    </tr>
                )
                    )}
                    </tbody>
            </table>
            <h3>{home.name}</h3>
            <h4>Hitting</h4>
            <table>
                <thead>
                
                    <th>Name</th>
                    <th>Day</th>
                    <th>Game</th>
                    <th>OP</th>
                    <th>T</th>
            </thead>
                <tbody>
                {Players.filter(player => player.otter === home.name && player.op[periodNumber-1] && !player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.day[periodNumber-1]}</td>
                        <td>{player.log[periodNumber-1]}</td>
                        <td>{player.op[periodNumber-1]}</td>
                        <td><b>{player.tot[periodNumber-1]}</b></td>
                    </tr>
                )
                    )}
                    </tbody>
            </table>
            <h4>Pitching</h4>
            <table>
                <thead>
                
                    <th>Name</th>
                    <th>Day</th>
                    <th>Game</th>
                    <th>OP</th>
                </thead>
                <tbody>
                {Players.filter(player => player.otter === home.name && player.op[periodNumber-1] && player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.day[periodNumber-1]}</td>
                        <td>{player.log[periodNumber-1]}</td>
                        <td>{player.op[periodNumber-1]}</td>
                    </tr>
                )
                    )}
                    </tbody>
            </table>
        </div>
    )
}

export default TeamPage;