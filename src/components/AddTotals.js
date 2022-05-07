import Players from "./AddStats";
import adjTeams from "./stats/FindTeamStats";
import ScoringPeriod from "./stats/ScoringPeriod";

Players.map(player => {
    for (let i=0; i<20; i++){
    let playersTeam = adjTeams.find(team => team.name === player.otter)
    let delta = parseInt(player.op[i]) - playersTeam.OppoPF[i]
    Players[parseInt(player.id)].tot.splice(i, 1, (isNaN(delta) ? null : delta < 0 ? 0 : delta))}
});


adjTeams.map(team => {
        for (let i=0; i<20; i++){
            let thesePlayers = [...Players].filter(player => player.otter === team.name && !player.pos.includes("P"));
            let TotSum = 0;
            thesePlayers.map(player => {
                if (player.tot[i]) {TotSum = parseInt(player.tot[i]) + TotSum}
        })
        team.TOT.push(TotSum);
        }
    })


//sum each category
Players.map(player => {
    for (let i=0; i<20; i++) {
        player.tot[i] ? player.totSum = player.totSum + player.tot[i] : player.totSum = player.totSum + 0
        player.pts[i] ? player.ptsSum = player.ptsSum + parseFloat(player.pts[i]) : player.ptsSum = player.ptsSum + 0
        player.op[i] ? player.opSum = player.opSum + parseInt(player.op[i]) : player.opSum = player.opSum + 0
        player.pts[i] ? player.gmStart = player.gmStart + 1 : player.gmStart = player.gmStart + 0
    }
}
)

    
let finalTeams = adjTeams;

export {Players , finalTeams};
