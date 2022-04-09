import Teams from "../Teams";
import Players from "../AddStats";
import rawSchedule from "../RawSchedule";

Teams.map(team => {
    team.OP = [];
    team.PF = [];
    team.TOT = [];
    team.OppoPF = [];
})
Teams.map(team => {
    for (let i=0; i<20; i++){
        let thesePlayers = [...Players].filter(player => player.otter === team.name && !player.pos.includes("P"));
        let opSum = 0;
        thesePlayers.map(player => {
            if (player.op[i]) {opSum = parseInt(player.op[i]) + opSum}
        })
        team.OP.push(opSum);
    }
})


Teams.map(team => {
    for (let i=0; i<20; i++){
        let thesePlayers = [...Players].filter(player => player.otter === team.name && player.pos.includes("P"));
        let opSum = 0;
        thesePlayers.map(player => {
            if (player.op[i]) {opSum = parseInt(player.op[i]) + opSum}
        })
        team.PF.push(Math.floor(opSum/5));
    }
        })

Teams.map(team => {
    for (let i=0; i<20; i++){
    let matchup = [...rawSchedule][0].filter(match => match.home === team.id || match.away === team.id);
    let away = Teams.find(group => group.id === matchup[0].away);
    let home = Teams.find(group => group.id === matchup[0].home);
    if (away.id === team.id) {
        team.OppoPF.push(home.PF[0])
    } else {team.OppoPF.push(away.PF[0])}
}});



let adjTeams = Teams
console.log(Teams);


export default adjTeams;