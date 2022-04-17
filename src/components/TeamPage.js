import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";

import ScoringPeriod from "./stats/ScoringPeriod";
import rawSchedule from "./RawSchedule";
import {Players, finalTeams} from "./AddTotals";

function TeamPage() {
    let { teamID } = useParams();
    let team = finalTeams.find(team => team.id === teamID)
    let matchup = [...rawSchedule][ScoringPeriod].filter(match => match.home === team.id || match.away === team.id);
    let away = finalTeams.find(team => team.id === matchup[0].away);
    let home = finalTeams.find(team => team.id === matchup[0].home);
    const splitName = (name = '') => {
        const [firstName, ...lastName] = name.split(' ').filter(Boolean);
        return {
          firstName: firstName,
          lastName: lastName.join(' ')
        }
      }
    let ScoringDay = "Final Score";

    return (
        <div>
            <nav>
                <Link to={`/`}>home</Link>
            </nav>
            <h1>{team.name}</h1>
            <h2>Scoring Period {ScoringPeriod+1}, Day {ScoringDay}</h2>
            <h4>This week's matchup: {away.name} @ {home.name}</h4>
            <table>
                <tr>
                    <th></th>
                    <th>TOTAL</th>
                    <th>OP</th>
                    <th>PF</th>
                </tr>
                <tr>
                    <td>{away.name}</td>
                    <td><b>{away.TOT[ScoringPeriod]}</b></td>
                    <td>{away.OP[ScoringPeriod]}</td>
                    <td>{away.PF[ScoringPeriod]}</td>
                </tr>
                <tr>
                    <td>{home.name}</td>
                    <td><b>{home.TOT[ScoringPeriod]}</b></td>
                    <td>{home.OP[ScoringPeriod]}</td>
                    <td>{home.PF[ScoringPeriod]}</td>
                </tr>
            </table>
            <br/>
            <h3>{away.name}</h3>
            <h4>Hitting</h4>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Day</th>
                    <th>Game</th>
                    <th>OP</th>
                    <th>T</th>
                </tr>
                {Players.filter(player => player.otter === away.name && player.op[ScoringPeriod] && !player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.day[ScoringPeriod]}</td>
                        <td>{player.log[ScoringPeriod]}</td>
                        <td>{player.op[ScoringPeriod]}</td>
                        <td><b>{player.tot[ScoringPeriod]}</b></td>
                    </tr>
                )
                    )}
            </table>
            <h4>Pitching</h4>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Day</th>
                    <th>Game</th>
                    <th>OP</th>
                </tr>
                {Players.filter(player => player.otter === away.name && player.op[ScoringPeriod] && player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.day[ScoringPeriod]}</td>
                        <td>{player.log[ScoringPeriod]}</td>
                        <td>{player.op[ScoringPeriod]}</td>
                    </tr>
                )
                    )}
            </table>
            <h3>{home.name}</h3>
            <h4>Hitting</h4>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Day</th>
                    <th>Game</th>
                    <th>OP</th>
                    <th>T</th>
                </tr>
                {Players.filter(player => player.otter === home.name && player.op[ScoringPeriod] && !player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.day[ScoringPeriod]}</td>
                        <td>{player.log[ScoringPeriod]}</td>
                        <td>{player.op[ScoringPeriod]}</td>
                        <td><b>{player.tot[ScoringPeriod]}</b></td>
                    </tr>
                )
                    )}
            </table>
            <h4>Pitching</h4>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Day</th>
                    <th>Game</th>
                    <th>OP</th>
                </tr>
                {Players.filter(player => player.otter === home.name && player.op[ScoringPeriod] && player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.day[ScoringPeriod]}</td>
                        <td>{player.log[ScoringPeriod]}</td>
                        <td>{player.op[ScoringPeriod]}</td>
                    </tr>
                )
                    )}
            </table>
            <nav>
                <Link to={`/Roster/${teamID}`}>Roster</Link>
            </nav>
        </div>
    )
}

export default TeamPage;