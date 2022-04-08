import React from "react";
import {useParams} from "react-router-dom";
import Teams from './Teams';

function Roster() {
    let {teamID} = useParams()
    let team = Teams.find(team => team.id === teamID)
    return (
        <div>
            <h1>{team.name}'s Roster</h1>
        </div>
    )
};

export default Roster;