import Teams from "../Teams";
import Players from "../AddStats";

Teams.map(team => {
    team.OP = [];
    team.PF = [];
    team.TOT = [];
})
Teams.map(team => {
    let thesePlayers = [...Players].filter(player => player.otter === team.name && !player.pos.includes("P"));
    let opSum = 0;
    thesePlayers.map(player => {
        if (player.op[0]) {opSum = parseInt(player.op[0]) + opSum}
    })
    team.OP.push(opSum);

    })

Teams.map(team => {
        let thesePlayers = [...Players].filter(player => player.otter === team.name && player.pos.includes("P"));
        let opSum = 0;
        thesePlayers.map(player => {
            if (player.op[0]) {opSum = parseInt(player.op[0]) + opSum}
        })
        team.PF.push(Math.floor(opSum/5));
    
        })

console.log(Teams);

export default Teams;