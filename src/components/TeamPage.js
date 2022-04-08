import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

function TeamPage() {
    let params = useParams();
    return (
        <h1>{params.name}</h1>
    )
}

export default TeamPage;