import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";

import ScoringPeriod from "./stats/ScoringPeriod";
import rawSchedule from "./RawSchedule";
import {finalTeams} from "./AddTotals";

function TeamPage() {
    let { teamID } = useParams();
    let team = finalTeams.find(team => team.id === teamID)
    let matchup = [...rawSchedule][ScoringPeriod].filter(match => match.home === team.id || match.away === team.id);
    let away = finalTeams.find(team => team.id === matchup[0].away);
    let home = finalTeams.find(team => team.id === matchup[0].home);

    return (
        <div>
            <h1>{team.name}</h1>
            <h2>Scoring Period {ScoringPeriod+1}</h2>
            <h3>OP = {team.OP[ScoringPeriod]}</h3>
            <h3>PF = {team.PF[ScoringPeriod]}</h3>
            <h4>This week's matchup: {away.name} @ {home.name}</h4>
            <nav>
                <Link to={`/Roster/${teamID}`}>Roster</Link>
            </nav>
        </div>
    )
}

export default TeamPage;