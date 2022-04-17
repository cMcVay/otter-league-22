import React from 'react';
import Players from './AddTotals';
import {Link} from 'react-router-dom';

let standings = [
    {
        name: "Frozen Acorns",
        id: "0",
        abbreviation: "FA",
        W: 1,
        L: 0,
        Total: 7,
        OP: 24,
        PF: 3
    },
    {
        name: "Lunar Doodles",
        id: "1",
        abbreviation: "FA",
        W: 0,
        L: 1,
        Total: 7,
        OP: 24,
        PF: 2
    },
    {
        name: "Magic Manatees",
        id: "2",
        abbreviation: "MT",
        W: 1,
        L: 0,
        Total: 7,
        OP: 25,
        PF: 3
    },
    {
        name: "Mighty Megabytes",
        id: "3",
        abbreviation: "MB",
        W: 0,
        L: 1,
        Total: 4,
        OP: 21,
        PF: 3
    },
    {
        name: "Mindful Freaks",
        id: "4",
        abbreviation: "MF",
        W: 1,
        L: 0,
        Total: 16,
        OP: 28,
        PF: 3
    },
    {
        name: "Slim Aliens",
        id: "5",
        abbreviation: "SA",
        W: 0,
        L: 1,
        Total: 2,
        OP: 19,
        PF: 3
    },
]




function StandingsPage() {
    return (
        <>
        <nav>
                <Link to={`/`}>home</Link>
        </nav>
        <h1>Standings</h1>
        <table>
            <thead>
                <th>Team</th>
                <th>W</th>
                <th>L</th>
            </thead>
            <tbody>
              {[...standings].sort((a, b) => {return b.W - a.W}).sort((a,b) => {return b.Total - a.Total}).map(team => (
                  <tr>
                      <td>{team.name}</td>
                      <td>{team.W}</td>
                      <td>{team.L}</td>
                  </tr>
              ))}  
            </tbody>
        </table>

        
        </>
    )
};

export default StandingsPage;