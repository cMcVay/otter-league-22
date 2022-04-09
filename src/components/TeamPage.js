import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import Teams from "./stats/FindTeamStats";
import ScoringPeriod from "./stats/ScoringPeriod";

function TeamPage() {
    let { teamID } = useParams();
    let team = Teams.find(team => team.id === teamID)
    return (
        <div>
            <h1>{team.name}</h1>
            <h2>Scoring Period {ScoringPeriod+1}</h2>
            <h3>OP = {team.OP[ScoringPeriod]}</h3>
            <h3>PF = {team.PF[ScoringPeriod]}</h3>
            <nav>
                <Link to={`/Roster/${teamID}`}>Roster</Link>
            </nav>
        </div>
    )
}

export default TeamPage;