import Players from "./AddStats";
import adjTeams from "./stats/FindTeamStats";

Players.map(player => {
    let playersTeam = adjTeams.find(team => team.name === player.otter)
    let delta = parseInt(player.op[0]) - playersTeam.OppoPF[0]
    Players[parseInt(player.id)].tot.splice(0, 1, delta)
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

let finalTeams = adjTeams;

export {Players , finalTeams};
