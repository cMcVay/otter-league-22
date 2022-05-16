import rawPlayers from "./Players";
import rawStatsSP1 from "./stats/SP1stats";
import rawStatsSP2 from "./stats/SP2stats";
import rawStatsSP3 from "./stats/SP3stats";
import rawStatsSP4 from "./stats/SP4stats";
import rawStatsSP5 from "./stats/SP5stats";
import Teams from "./Teams";



rawPlayers.map(player => {
    player.log = [];
    player.op = [];
    player.tot = [];
    player.pts = [];
    player.day = [];
    player.totSum = 0;
    player.opSum = 0;
    player.ptsSum = 0;
    player.gmStart = 0;
    player.logo = null;
});
rawPlayers.map(player => {
    for (let i = 0; i < 20; i++) {
        player.log.push(null);
        player.op.push(null);
        player.tot.push(null);
        player.pts.push(null);
        player.day.push(null);
    }
})

Teams.forEach(team => {
    let logo = team.img
    rawPlayers.filter(player => player.otter === team.name).map(player => {
        player.logo = logo;
    })
})

console.log(rawPlayers);

rawStatsSP1.map(player => {
    rawPlayers[parseInt(player.id)].log.splice(0, 1, player.game);
    rawPlayers[parseInt(player.id)].op.splice(0, 1, player.OP);
    rawPlayers[parseInt(player.id)].pts.splice(0, 1, player.points);
    rawPlayers[parseInt(player.id)].day.splice(0, 1, player.day);
})

rawStatsSP2.map(player => {
    rawPlayers[parseInt(player.id)].log.splice(1, 1, player.game);
    rawPlayers[parseInt(player.id)].op.splice(1, 1, player.OP);
    rawPlayers[parseInt(player.id)].pts.splice(1, 1, player.points);
    rawPlayers[parseInt(player.id)].day.splice(1, 1, player.day);
})

rawStatsSP3.map(player => {
    rawPlayers[parseInt(player.id)].log.splice(2, 1, player.game);
    rawPlayers[parseInt(player.id)].op.splice(2, 1, player.OP);
    rawPlayers[parseInt(player.id)].pts.splice(2, 1, player.points);
    rawPlayers[parseInt(player.id)].day.splice(2, 1, player.day);
})

rawStatsSP4.map(player => {
    rawPlayers[parseInt(player.id)].log.splice(3, 1, player.game);
    rawPlayers[parseInt(player.id)].op.splice(3, 1, player.OP);
    rawPlayers[parseInt(player.id)].pts.splice(3, 1, player.points);
    rawPlayers[parseInt(player.id)].day.splice(3, 1, player.day);
})

rawStatsSP5.map(player => {
    rawPlayers[parseInt(player.id)].log.splice(4, 1, player.game);
    rawPlayers[parseInt(player.id)].op.splice(4, 1, player.OP);
    rawPlayers[parseInt(player.id)].pts.splice(4, 1, player.points);
    rawPlayers[parseInt(player.id)].day.splice(4, 1, player.day);
})



let Players = rawPlayers;

console.log(Players);

export default Players;