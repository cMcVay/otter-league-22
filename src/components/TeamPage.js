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

    return (
        <div>
            <nav>
                <Link to={`/`}>home</Link>
            </nav>
            <h1>{team.name}</h1>
            <h2>Scoring Period {ScoringPeriod+1}</h2>
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
                    <td>{away.TOT[ScoringPeriod]}</td>
                    <td>{away.OP[ScoringPeriod]}</td>
                    <td>{away.PF[ScoringPeriod]}</td>
                </tr>
                <tr>
                    <td>{home.name}</td>
                    <td>{home.TOT[ScoringPeriod]}</td>
                    <td>{home.OP[ScoringPeriod]}</td>
                    <td>{home.PF[ScoringPeriod]}</td>
                </tr>
            </table>
            <br/>
            <h3>Lunar Doodles</h3>
            <h4>Hitting</h4>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Game</th>
                    <th>OP</th>
                    <th>T</th>
                </tr>
                {Players.filter(player => player.otter === away.name && player.op[ScoringPeriod] && !player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.log[ScoringPeriod]}</td>
                        <td>{player.op[ScoringPeriod]}</td>
                        <td>{player.tot[ScoringPeriod]}</td>
                    </tr>
                )
                    )}
            </table>
            <h4>Pitching</h4>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Game</th>
                    <th>OP</th>
                </tr>
                {Players.filter(player => player.otter === away.name && player.op[ScoringPeriod] && player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.log[ScoringPeriod]}</td>
                        <td>{player.op[ScoringPeriod]}</td>
                    </tr>
                )
                    )}
            </table>
            <h3>Mindful Freaks</h3>
            <h4>Hitting</h4>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Game</th>
                    <th>OP</th>
                    <th>T</th>
                </tr>
                {Players.filter(player => player.otter === home.name && player.op[ScoringPeriod] && !player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.log[ScoringPeriod]}</td>
                        <td>{player.op[ScoringPeriod]}</td>
                        <td>{player.tot[ScoringPeriod]}</td>
                    </tr>
                )
                    )}
            </table>
            <h4>Pitching</h4>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Game</th>
                    <th>OP</th>
                </tr>
                {Players.filter(player => player.otter === home.name && player.op[ScoringPeriod] && player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
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