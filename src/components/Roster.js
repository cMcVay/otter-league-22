import React from "react";
import {useParams, Link} from "react-router-dom";
import OtterFantasyLogo from './images/OtterFantasyLogo.png';
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
            <div className='headingContainer'>
                <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1><img src={OtterFantasyLogo} alt="Otter Baseball Logo" style ={{width: "25px"}}/>OTTER LEAGUE<img src={OtterFantasyLogo} alt="Otter Baseball Logo" style ={{width: "25px"}}/></h1></Link>
            </div>
            <nav>
                <Link to={`/Team/${teamID}`}>team page</Link>
            </nav>
            <h1>{team.name} Roster</h1>
            <h3>Infield</h3>
            <table className="rosterStats">
                <thead>
                    <th colSpan={2}></th>
                    <th><abbr title="Games Started">G</abbr></th>
                    <th><abbr title="Average Otter Points Per Start">AVG</abbr></th>
                    <th><abbr title="Total Otter Points">OP</abbr></th>
                    <th><abbr title="Otter Points After Pitching Factor">TOT</abbr></th>
                </thead>
                <tbody>
                {[...Players].filter(player => player.otter === team.name && player.pos === "IF" && !player.inj).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.mlb}</td>
                        <td>{player.gmStart}</td>
                        <td>{(player.opSum/player.gmStart).toFixed(2)}</td>
                        <td>{player.opSum}</td>
                        <td>{player.totSum}</td>
                    </tr>
                ))}</tbody>
            </table>
            <h3>Outfield</h3>
            <table className="rosterStats">
                <thead>
                    <th colSpan={2}></th>
                    <th><abbr title="Games Started">G</abbr></th>
                    <th><abbr title="Average Otter Points Per Start">AVG</abbr></th>
                    <th><abbr title="Total Otter Points">OP</abbr></th>
                    <th><abbr title="Otter Points After Pitching Factor">TOT</abbr></th>
                </thead>
                <tbody>
                {[...Players].filter(player => player.otter === team.name && player.pos === "OF" && !player.inj).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.mlb}</td>
                        <td>{player.gmStart}</td>
                        <td>{(player.opSum/player.gmStart).toFixed(2)}</td>
                        <td>{player.opSum}</td>
                        <td>{player.totSum}</td>
                    </tr>
                ))}</tbody>
            </table>
            <h3>Pitchers</h3>
            <table className="rosterStats">
                <thead>
                    <th colSpan={2}></th>
                    <th><abbr title="Games Started">G</abbr></th>
                    <th><abbr title="Average Otter Points Per Start">AVG</abbr></th>
                    <th><abbr title="Total Otter Points">OP</abbr></th>
                </thead>
                <tbody>
                {[...Players].filter(player => player.otter === team.name && player.pos.includes("P") && !player.inj).map(player =>(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.mlb}</td>
                        <td>{player.gmStart}</td>
                        <td>{(player.opSum/player.gmStart).toFixed(2)}</td>
                        <td>{player.opSum}</td>
                    </tr>
                ))}</tbody>
            </table>
            <h3>Reserve Roster</h3>
            <table className="rosterStats">
                <thead>
                    <th colSpan={2}></th>
                    <th><abbr title="Games Started">G</abbr></th>
                    <th><abbr title="Average Otter Points Per Start">AVG</abbr></th>
                    <th><abbr title="Total Otter Points">OP</abbr></th>
                    <th><abbr title="Otter Points After Pitching Factor">TOT</abbr></th>
                </thead>
                <tbody>
                    {[...Players].filter(player => player.otter === team.name && player.inj).map(player =>(
                        <tr>
                            <td>{player.name}</td>
                            <td>{player.mlb}</td>
                            <td>{player.gmStart}</td>
                            <td>{(player.opSum/player.gmStart).toFixed(2)}</td>
                            <td>{player.opSum}</td>
                            <td>{!player.pos.includes("P") ? player.totSum: "-"}</td>
                            <td>{player.pos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
};

export default Roster;