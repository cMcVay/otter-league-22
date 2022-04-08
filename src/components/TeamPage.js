import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import Teams from "./Teams";

function TeamPage() {
    let { teamID } = useParams();
    let team = Teams.find(team => team.id === teamID)
    return (
        <div>
            <h1>{team.name}</h1>
            <nav>
                <Link to={`/Roster/${teamID}`}>Roster</Link>
            </nav>
        </div>
    )
}

export default TeamPage;