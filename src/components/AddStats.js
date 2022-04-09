import rawPlayers from "./Players";
import rawStatsSP1 from "./stats/SP1stats";

rawPlayers.map(player => {
    player.log = [null, null];
    player.op = [null, null]
});

rawStatsSP1.map(player => {
    rawPlayers[parseInt(player.id)].log.splice(0, 1, player.game);
    rawPlayers[parseInt(player.id)].op.splice(0, 1, player.OP)
})

let Players = rawPlayers;

console.log(Players);

export default Players;