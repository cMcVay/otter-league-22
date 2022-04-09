import React from "react";
import {useParams} from "react-router-dom";

import {Players, finalTeams} from './AddTotals';

function Roster() {
    let {teamID} = useParams()
    let team = finalTeams.find(team => team.id === teamID)
    return (
        <div>
            <h1>{team.name} Roster</h1>
            <ol>
               {[...Players].filter(player => player.otter === team.name).map(player => (
                    <li>{player.name} | {player.mlb}</li>
                ))} 
            </ol>
            
        </div>
    )
};

export default Roster;