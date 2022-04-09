import React from "react";
import {useParams} from "react-router-dom";

import {Players, finalTeams} from './AddTotals';

function Roster() {
    let {teamID} = useParams()
    let team = finalTeams.find(team => team.id === teamID)
    const getSum = (OpArray) => {
        let sum = 0;
        OpArray.map(op => {
            op ? sum = parseInt(op) + sum : sum = sum
        })
        return sum;
    };
    return (
        <div>
            <h1>{team.name} Roster</h1>
            <ol>
               {[...Players].filter(player => player.otter === team.name).map(player => (
                    <li>{player.name} | {player.mlb}</li>
                ))} 
            </ol>
            <h3>Infield</h3>
            <table>
                {[...Players].filter(player => player.otter === team.name && player.pos === "IF").map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.mlb}</td>
                        <td>{getSum(player.op)}</td>
                    </tr>
                ))}
            </table>
            <h3>Outfield</h3>
            <table>
                {[...Players].filter(player => player.otter === team.name && player.pos === "OF").map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.mlb}</td>
                        <td>{getSum(player.op)}</td>
                    </tr>
                ))}
            </table>
            <h3>Pitchers</h3>
            <table>
                {[...Players].filter(player => player.otter === team.name && player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.mlb}</td>
                        <td>{getSum(player.op)}</td>
                    </tr>
                ))}
            </table>
            
        </div>
    )
};

export default Roster;