import React from "react";
import {useParams, Link} from "react-router-dom";

import {Players, finalTeams} from './AddTotals';
import TransactionList from "./TransactionList";

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
            <nav>
                <Link to={`/`}>home</Link><br/>
                <Link to={`/Team/${teamID}`}>team page</Link>
            </nav>
            <h1>{team.name} Roster</h1>
            <ol>
               {[...Players].filter(player => player.otter === team.name).map(player => (
                    <li>{player.name} | {player.mlb}</li>
                ))} 
            </ol>
            <TransactionList teamkey={teamID} />
            <h3>Infield</h3>
            <table>
                <tbody>
                {[...Players].filter(player => player.otter === team.name && player.pos === "IF").map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.mlb}</td>
                        <td>{getSum(player.op)}</td>
                    </tr>
                ))}</tbody>
            </table>
            <h3>Outfield</h3>
            <table>
                <tbody>
                {[...Players].filter(player => player.otter === team.name && player.pos === "OF").map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.mlb}</td>
                        <td>{getSum(player.op)}</td>
                    </tr>
                ))}</tbody>
            </table>
            <h3>Pitchers</h3>
            <table>
                <tbody>
                {[...Players].filter(player => player.otter === team.name && player.pos.includes("P")).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.mlb}</td>
                        <td>{getSum(player.op)}</td>
                    </tr>
                ))}</tbody>
            </table>
            
        </div>
    )
};

export default Roster;