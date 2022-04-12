import rawPlayers from "./Players";
import rawStatsSP1 from "./stats/SP1stats";


rawPlayers.map(player => {
    player.log = [];
    player.op = [];
    player.tot = [];
});
rawPlayers.map(player => {
    for (let i = 0; i < 20; i++) {
        player.log.push(null);
        player.op.push(null);
        player.tot.push(null);
    }
})

console.log(rawPlayers);

rawStatsSP1.map(player => {
    rawPlayers[parseInt(player.id)].log.splice(0, 1, player.game);
    rawPlayers[parseInt(player.id)].op.splice(0, 1, player.OP);
})

let Players = rawPlayers;

console.log(Players);

export default Players;