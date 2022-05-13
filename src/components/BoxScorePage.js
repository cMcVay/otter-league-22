import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import OtterFantasyLogo from './images/OtterFantasyLogo.png';
import ScoringPeriod from "./stats/ScoringPeriod";
import rawSchedule from "./RawSchedule";
import {Players, finalTeams} from "./AddTotals";
import './teamPage.css';
import {ScoringDay, periodNumber} from "./ScoringDay";
import { sortedStandings } from "./StandingsPage";


function BoxScorePage() {
    let { week, homeId } = useParams();
    let period = parseInt(week);
    let team = finalTeams.find(team => team.id === homeId)
    let matchup = [...rawSchedule][period].filter(match => match.home === team.id || match.away === team.id);
    let away = finalTeams.find(team => team.id === matchup[0].away);
    let home = finalTeams.find(team => team.id === matchup[0].home);
    

    return (
        <>
            <div className='headingContainer'>
                <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1><img src={OtterFantasyLogo} alt="Otter Baseball Logo" style ={{width: "25px"}}/>OTTER LEAGUE<img src={OtterFantasyLogo} alt="Otter Baseball Logo" style ={{width: "25px"}}/></h1></Link>
            </div>
            <h1>Box Score</h1>
            <h2>Scoring Period {period+1}</h2>
            <h4>This week's matchup: {away.name} @ {home.name}</h4>
            <table className="leadscore">
                <thead>
                    <td></td>
                    <td style={{width:"14px"}}>1</td>
                    <td style={{width:"14px"}}>2</td>
                    <td style={{width:"14px"}}>3</td>
                    <td style={{width:"14px"}}>4</td>
                    <td style={{width:"14px"}}>5</td>
                    <td style={{width:"14px"}}>6</td>
                    <td style={{width:"14px"}}>7</td>
                    <td style={{width:"14px"}}>8</td>
                    <td style={{width:"14px"}}>9</td>
                    <td>TOTAL</td>
                    <td>OP</td>
                    <td>PF</td>
                </thead>
                <tbody><tr>
                    <td>{away.name}</td>
                    <td style={{width:"14px"}}>{away.DaysBreakdown[period][0]}</td>
                    <td style={{width:"14px"}}>{away.DaysBreakdown[period][1]}</td>
                    <td style={{width:"14px"}}>{away.DaysBreakdown[period][2]}</td>
                    <td style={{width:"14px"}}>{away.DaysBreakdown[period][3]}</td>
                    <td style={{width:"14px"}}>{away.DaysBreakdown[period][4]}</td>
                    <td style={{width:"14px"}}>{away.DaysBreakdown[period][5]}</td>
                    <td style={{width:"14px"}}>{away.DaysBreakdown[period][6]}</td>
                    <td style={{width:"14px"}}>{away.DaysBreakdown[period][7]}</td>
                    <td style={{width:"14px"}}>{away.DaysBreakdown[period][8]}</td>
                    <td><b>{away.TOT[period]}</b></td>
                    <td>{away.OP[period]}</td>
                    <td>{away.PF[period]}</td>
                </tr>
                <tr>
                    <td>{home.name}</td>
                    <td style={{width:"14px"}}>{home.DaysBreakdown[period][1]}</td>
                    <td style={{width:"14px"}}>{home.DaysBreakdown[period][2]}</td>
                    <td style={{width:"14px"}}>{home.DaysBreakdown[period][0]}</td>
                    <td style={{width:"14px"}}>{home.DaysBreakdown[period][3]}</td>
                    <td style={{width:"14px"}}>{home.DaysBreakdown[period][4]}</td>
                    <td style={{width:"14px"}}>{home.DaysBreakdown[period][5]}</td>
                    <td style={{width:"14px"}}>{home.DaysBreakdown[period][6]}</td>
                    <td style={{width:"14px"}}>{home.DaysBreakdown[period][7]}</td>
                    <td style={{width:"14px"}}>{home.DaysBreakdown[period][8]}</td>
                    <td><b>{home.TOT[period]}</b></td>
                    <td>{home.OP[period]}</td>
                    <td>{home.PF[period]}</td>
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
                {Players.filter(player => player.otter === away.name && player.op[period] && !player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.day[period]}</td>
                        <td>{player.log[period]}</td>
                        <td>{player.op[period]}</td>
                        <td><b>{player.tot[period]}</b></td>
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
                {Players.filter(player => player.otter === away.name && player.op[period] && player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.day[period]}</td>
                        <td>{player.log[period]}</td>
                        <td>{player.op[period]}</td>
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
                {Players.filter(player => player.otter === home.name && player.op[period] && !player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.day[period]}</td>
                        <td>{player.log[period]}</td>
                        <td>{player.op[period]}</td>
                        <td><b>{player.tot[period]}</b></td>
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
                {Players.filter(player => player.otter === home.name && player.op[period] && player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.day[period]}</td>
                        <td>{player.log[period]}</td>
                        <td>{player.op[period]}</td>
                    </tr>
                )
                    )}
                    </tbody>
            </table>
        </>
        
    )
};

export default BoxScorePage;