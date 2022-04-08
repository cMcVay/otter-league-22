import React from "react";
import {useParams} from "react-router-dom";
import Teams from './Teams';
import Players from './Players';

function Roster() {
    let {teamID} = useParams()
    let team = Teams.find(team => team.id === teamID)
    return (
        <div>
            <h1>{team.name}'s Roster</h1>
            <ol>
               {[...Players].filter(player => player.otter === team.name).map(player => (
                    <li>{player.name} | {player.mlb}</li>
                ))} 
            </ol>
            
        </div>
    )
};

export default Roster;