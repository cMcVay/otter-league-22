import React from 'react';

import {Link} from 'react-router-dom';
import OtterFantasyLogo from './images/OtterFantasyLogo.png';
import {Players, finalTeams} from './AddTotals';
import ScoringPeriod from './stats/ScoringPeriod';
import rawSchedule from './RawSchedule';


let standings = [
    {
        name: "Frozen Acorns",
        id: "0",
        abbreviation: "FA",
        W: 0,
        L: 0,
        Total: 0,
        OP: 0,
        PF: 0,
        Adv: [0, 0, 0, 0, 0, 0]
    },
    {
        name: "Lunar Doodles",
        id: "1",
        abbreviation: "FA",
        W: 0,
        L: 0,
        Total: 0,
        OP: 0,
        PF: 0,
        Adv: [0, 0, 0, 0, 0, 0]
    },
    {
        name: "Magic Manatees",
        id: "2",
        abbreviation: "MT",
        W: 0,
        L: 0,
        Total: 0,
        OP: 0,
        PF: 0,
        Adv: [0, 0, 0, 0, 0, 0]
    },
    {
        name: "Mighty Megabytes",
        id: "3",
        abbreviation: "MB",
        W: 0,
        L: 0,
        Total: 0,
        OP: 0,
        PF: 0,
        Adv: [0, 0, 0, 0, 0, 0]
    },
    {
        name: "Mindful Freaks",
        id: "4",
        abbreviation: "MF",
        W: 0,
        L: 0,
        Total: 0,
        OP: 0,
        PF: 0,
        Adv: [0, 0, 0, 0, 0, 0]
    },
    {
        name: "Slim Aliens",
        id: "5",
        abbreviation: "SA",
        W: 0,
        L: 0,
        Total: 0,
        OP: 0,
        PF: 0,
        Adv: [0, 0, 0, 0, 0, 0]
    },
]


standings.forEach(team => {
    for (let i=0; i<ScoringPeriod; i++) {
        team.Total = team.Total + finalTeams[parseInt(team.id)].TOT[i];
        team.OP = team.OP + finalTeams[parseInt(team.id)].OP[i];
        team.PF = team.PF + finalTeams[parseInt(team.id)].PF[i];
    }
})
console.log(finalTeams)
console.log(standings)
standings.forEach(team => {
    for (let i=0; i<ScoringPeriod; i++) {
        let matchupIsh = [...rawSchedule][i].filter(match => match.home === team.id || match.away === team.id)
        let matchup = matchupIsh[0];
        if (matchup.home === team.id) {
            if (finalTeams[parseInt(matchup.home)].TOT[i] > finalTeams[parseInt(matchup.away)].TOT[i]) {
                team.W = team.W + 1;
                team.Adv[parseInt(matchup.away)] = team.Adv[parseInt(matchup.away)] + 1;
            }
            else if (finalTeams[parseInt(matchup.home)].TOT[i] < finalTeams[parseInt(matchup.away)].TOT[i]) {
                team.L = team.L + 1;
                team.Adv[parseInt(matchup.away)] = team.Adv[parseInt(matchup.away)] - 1;
            }
            else {
                if (finalTeams[parseInt(matchup.home)].OP[i] > finalTeams[parseInt(matchup.away)].OP[i]) {
                    team.W = team.W + 1;
                    team.Adv[parseInt(matchup.away)] = team.Adv[parseInt(matchup.away)] + 1;
                }
                else if (finalTeams[parseInt(matchup.home)].OP[i] < finalTeams[parseInt(matchup.away)].OP[i]) {
                    team.L = team.L + 1;
                    team.Adv[parseInt(matchup.away)] = team.Adv[parseInt(matchup.away)] - 1;
                }
                else {
                    if (finalTeams[parseInt(matchup.home)].PF[i] > finalTeams[parseInt(matchup.away)].PF[i]) {
                        team.W = team.W + 1;
                        team.Adv[parseInt(matchup.away)] = team.Adv[parseInt(matchup.away)] + 1;
                    }
                    else if (finalTeams[parseInt(matchup.home)].PF[i] < finalTeams[parseInt(matchup.away)].PF[i]) {
                        team.L = team.L + 1;
                        team.Adv[parseInt(matchup.away)] = team.Adv[parseInt(matchup.away)] - 1;
                    }
                    else {
                        team.W = team.W + 1;
                        team.Adv[parseInt(matchup.away)] = team.Adv[parseInt(matchup.away)] + 1;
                    }
                }
            }
        }
        else {
            if (finalTeams[parseInt(matchup.home)].TOT[i] > finalTeams[parseInt(matchup.away)].TOT[i]) {
                team.L = team.L + 1;
                team.Adv[parseInt(matchup.home)] = team.Adv[parseInt(matchup.home)] - 1;
            }
            else if (finalTeams[parseInt(matchup.home)].TOT[i] < finalTeams[parseInt(matchup.away)].TOT[i]) {
                team.W = team.W + 1;
                team.Adv[parseInt(matchup.home)] = team.Adv[parseInt(matchup.home)] + 1;
            }
            else {
                if (finalTeams[parseInt(matchup.home)].OP[i] > finalTeams[parseInt(matchup.away)].OP[i]) {
                    team.L = team.L + 1;
                    team.Adv[parseInt(matchup.home)] = team.Adv[parseInt(matchup.home)] - 1;
                }
                else if (finalTeams[parseInt(matchup.home)].OP[i] < finalTeams[parseInt(matchup.away)].OP[i]) {
                    team.W = team.W + 1;
                    team.Adv[parseInt(matchup.home)] = team.Adv[parseInt(matchup.home)] + 1;
                }
                else {
                    if (finalTeams[parseInt(matchup.home)].PF[i] > finalTeams[parseInt(matchup.away)].PF[i]) {
                        team.L = team.L + 1;
                        team.Adv[parseInt(matchup.home)] = team.Adv[parseInt(matchup.home)] - 1;
                    }
                    else if (finalTeams[parseInt(matchup.home)].PF[i] < finalTeams[parseInt(matchup.away)].PF[i]) {
                        team.W = team.W + 1;
                        team.Adv[parseInt(matchup.home)] = team.Adv[parseInt(matchup.home)] + 1;
                    }
                    else {
                        team.L = team.L + 1;
                        team.Adv[parseInt(matchup.home)] = team.Adv[parseInt(matchup.home)] - 1;
                    }
                }
        }
        
       
        }
    }
})

let sortedStandings = [...standings].sort((a, b) => {
    if (a.W > b.W){
        return -1;
    }
    else if (a.W < b.W){
        return 1;
    }
    else {
        if (a.Adv[parseInt(b.id)] > b.Adv[parseInt(a.id)]){
            return -1;
        }
        else if (a.Adv[parseInt(b.id)] < b.Adv[parseInt(a.id)]){
            return 1;
        }
        else {return 0;}
    }
});

let sortedPlayerHitStats = [...Players].filter(player => !player.pos.includes("P")).sort((a, b) => {
    if (a.opSum > b.opSum) {
        return -1;
    }
    else if (a.opSum < b.opSum) {
        return 1;
    }
    else {
        if (a.totSum > b.totSum) {
            return -1;
        }
        else if (a.totSum < b.totSum) {
            return 1;
        }
        else {
            return 0;
        }
    }
});

let sortedPlayerPitchStats = [...Players].filter(player => player.pos.includes("P") && player.gmStart > (ScoringPeriod*3/4)).sort((a, b) => {
    if ((a.opSum/a.gmStart) > (b.opSum/b.gmStart)) {
        return -1;
    }
    else if ((a.opSum/a.gmStart) < (b.opSum/b.gmStart)) {
        return 1;
    }
    else {
        if (a.ptsSum > b.ptsSum) {
            return -1;
        }
        else if (a.ptsSum < b.ptsSum) {
            return 1;
        }
        else {
            return 0;
        }
    }
})

let hitStatLeaders = []
for (let i=0; i<10; i++) {
    hitStatLeaders.push(sortedPlayerHitStats[i])
};
let pitchStatLeaders = []
for (let i=0; i<10; i++) {
    if (sortedPlayerPitchStats[i]) {
       pitchStatLeaders.push(sortedPlayerPitchStats[i]) 
    } else { break }
    
};

console.log(hitStatLeaders)
console.log(pitchStatLeaders)

function StandingsPage() {
    return (
        <>
        <div className='headingContainer'>
                <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1><img src={OtterFantasyLogo} alt="Otter Baseball Logo" style ={{width: "25px"}}/>OTTER LEAGUE<img src={OtterFantasyLogo} alt="Otter Baseball Logo" style ={{width: "25px"}}/></h1></Link>
        </div>
        <h1>Standings</h1>
        <table className='standings'>
            <thead>
                <th>Team</th>
                <th>W</th>
                <th>L</th>
                <th><abbr title="Average Otter Points">OP AVG</abbr></th>
                <th><abbr title="Average Pitching Factor">PF AVG</abbr></th>
            </thead>
            <tbody>
              {sortedStandings.map(team => (
                  <tr>
                      <td>{team.name}</td>
                      <td>{team.W}</td>
                      <td>{team.L}</td>
                      <td>{(team.OP/(team.W+team.L)).toFixed(2)}</td>
                      <td>{(team.PF/(team.W+team.L)).toFixed(2)}</td>
                  </tr>
              ))}  
            </tbody>
        </table>
        <h2>Stat Leaders</h2>
        <table className='stats'>
            <thead>
                <th>Rank</th>
                <th>Player</th>
                <th>Team</th>
                <th><abbr title="Total Otter Points">TOP</abbr></th>
                <th><abbr title="Otter Points Average">OPAVG</abbr></th>
                <th><abbr title="Otter Points Total - Pitching Factor">TOT</abbr></th>
            </thead>
            <tbody>
                {hitStatLeaders.map(player => (
                    <tr>
                        <td style={{textAlign: 'center'}}>{hitStatLeaders.indexOf(player) + 1}</td>
                        <td>{player.name}</td>
                        <td><img src={player.logo} alt="team logo" style={{width: '35px', height: '35px'}}/></td>
                        <td>{player.opSum}</td>
                        <td>{(player.opSum/player.gmStart).toFixed(2)}</td>
                        <td>{player.totSum}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <br></br>
        <table className='stats'>
            <thead>
                <th>Rank</th>
                <th>Player</th>
                <th>Team</th>
                <th><abbr title="Otter Points Average">OPAVG</abbr></th>
                <th><abbr title="Total Otter Points">TOP</abbr></th>
            </thead>
            <tbody>
                {pitchStatLeaders.map(player => (
                    <tr>
                        <td style={{textAlign: 'center'}}>{pitchStatLeaders.indexOf(player) + 1}</td>
                        <td>{player.name}</td>
                        <td><img src={player.logo} alt="team logo" style={{width: '35px', height: '35px'}}/></td>
                        <td>{(player.opSum/player.gmStart).toFixed(2)}</td>
                        <td>{player.opSum}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
};

export {sortedStandings, StandingsPage};