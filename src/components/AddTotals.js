import Players from "./AddStats";
import adjTeams from "./stats/FindTeamStats";
import ScoringPeriod from "./stats/ScoringPeriod";

Players.map(player => {
    for (let i=0; i<20; i++){
        let playersTeam = adjTeams.find(team => team.name === player.otter)
        console.log(i)
        console.log(player.name + " "+ i + " " + playersTeam.OppoPF[i])
        let delta = parseInt(player.op[i]) - (playersTeam.OppoPF[i] ? playersTeam.OppoPF[i] : 0)
        Players[parseInt(player.id)].tot.splice(i, 1, (isNaN(delta) ? null : delta < 0 ? 0 : delta))
    }
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
        player.pts[i] !== null ? player.gmStart = player.gmStart + 1 : player.gmStart = player.gmStart + 0
    }
}
)

adjTeams.map(team => {
    let thePlayers = [...Players].filter(player => player.otter === team.name && !player.pos.includes("P"));
    for (let i=0; i<20; i++) {
        let theseDays = [];
        for (let x=0; x<10; x++){
            let thisDay = 0;
            thePlayers.map(player => {
                if (player.tot[i] && parseInt(player.day[i]) === (x+1)){
                    thisDay = thisDay + player.tot[i];
                }
            })
            theseDays.push(thisDay)
        }
        team.DaysBreakdown.push(theseDays);
    } 
        
}
);
console.log(adjTeams);

    
let finalTeams = adjTeams;

export {Players , finalTeams};
