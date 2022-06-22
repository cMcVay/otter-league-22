let rawStatsSP6 = [
    //mindfreaks 
    {id:"12", game:"4-4, 3 2B, 1 3B, 2 RBI, 1 BB", points:"1.7", OP:"5", day:"1"},
    {id:"11", game:"2-4, 1 3B, 1 HR, 5 RBI, 1 BB, 1 SB", points:"1.6", OP:"5", day:"7"},
    {id:"36", game:"2-4, 1 3B, 1 HR, 6 RBI", points:"1.4", OP:"5", day:"3"},
    {id:"35", game:"3-4, 1 HR, 4 RBI, 1 BB", points:"1.4", OP:"5", day:"9"},
    {id:"0", game:"2-3, 2 HR, 3 RBI, 1 BB", points:"1.3", OP:"5", day:"8"},
    {id:"72", game:"2-4, 1 HR, 1 RBI", points:"0.7", OP:"2", day:"9"},
    {id:"84", game:"6.2 IP, 1 H, 0 ER, 3 BB, 8 K", points:"0.86", OP:"8", day:"8"},
    {id:"23", game:"6 IP, 4 H, 1 ER, 3 BB, 7 K", points:"0.733333333333333", OP:"7", day:"8"},
    {id:"71", game:"6 IP, 6 H, 1 ER, 2 BB, 7 K", points:"0.716666666666667", OP:"7", day:"7"},
    //Manatees
    {id:"39", game:"3-4, 1 2B, 1 HR, 2 RBI, 1 SB", points:"1.2", OP:"5", day:"7"},
    {id:"68", game:"3-5, 1 HR, 3 RBI", points:"1.1", OP:"4", day:"1"},
    {id:"75", game:"2-3, 1 2B, 1 HR, 2 RBI", points:"0.9", OP:"3", day:"3"},
    {id:"3", game:"3-4, 1 2B, 1 HR, 2 RBI, 1 BB", points:"1.3", OP:"5", day:"1"},
    {id:"15", game:"2-3, 3 RBI", points:"0.7", OP:"2", day:"3"},
    {id:"56", game:"1-1, 1 RBI, 1 BB", points:"0.5", OP:"1", day:"8"},
    {id:"32", game:"9 IP, 6 H, 0 ER, 2 BB, 7 K", points:"0.888888888888889", OP:"8", day:"1"},
    {id:"51", game:"6 IP, 4 H, 0 ER, 2 BB, 8 K", points:"0.833333333333334", OP:"8", day:"3"},
    {id:"80", game:"8 IP, 4 H, 3 ER, 0 BB, 10 K", points:"0.725", OP:"7", day:"9"},
    //Aliens
    {id:"25", game:"3-4, 1 HR, 4 RBI", points:"1.2", OP:"5", day:"7"},
    {id:"22", game:"3-4, 2 RBI, 1 BB", points:"1", OP:"4", day:"9"},
    {id:"85", game:"2-2, 1 2B, 2 BB", points:"0.9", OP:"3", day:"6"},
    {id:"1", game:"2-3, 1 2B, 1 HR, 2 RBI, 1 BB", points:"1.1", OP:"4", day:"8"},
    {id:"58", game:"2-5, 1 RBI, 1 BB, 1 SB", points:"0.8", OP:"3", day:"1"},
    {id:"37", game:"2-5, 1 HR, 1 RBI, 1 SB", points:"0.8", OP:"3", day:"2"},
    {id:"82", game:"7 IP, 4 H, 0 ER, 1 BB, 10 K", points:"0.871428571428572", OP:"8", day:"3"},
    {id:"34", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"1"},
    {id:"49", game:"9 IP, 7 H, 2 ER, 1 BB, 6 K", points:"0.788888888888889", OP:"7", day:"7"},
    //Doodles 
    {id:"55", game:"2-3, 1 3B, 1 HR, 3 RBI, 1 BB", points:"1.3", OP:"5", day:"4"},
    {id:"31", game:"2-4, 1 HR, 4 RBI, 1 BB, 1 SB", points:"1.3", OP:"5", day:"5"},
    {id:"4", game:"2-4, 1 HR, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"3"},
    {id:"7", game:"3-5, 1 2B, 1 HR, 4 RBI", points:"1.3", OP:"5", day:"3"},
    {id:"19", game:"1-4, 1 HR, 3 RBI", points:"0.7", OP:"2", day:"3"},
    {id:"28", game:"2-4, 1 RBI, 1 BB", points:"0.7", OP:"2", day:"5"},
    {id:"43", game:"8.1 IP, 5 H, 1 ER, 0 BB, 10 K", points:"0.912", OP:"9", day:"5"},
    {id:"67", game:"7 IP, 4 H, 1 ER, 2 BB, 11 K", points:"0.814285714285714", OP:"8", day:"5"},
    {id:"88", game:"6 IP, 3 H, 0 ER, 4 BB, 5 K", points:"0.766666666666667", OP:"7", day:"9"},
    //megabytes
    {id:"21", game:"4-5, 2 2B, 1 HR, 5 RBI", points:"1.7", OP:"5", day:"5"},
    {id:"81", game:"3-5, 2 2B, 2 RBI", points:"1", OP:"4", day:"8"},
    {id:"96", game:"1-3, 1 HR, 1 RBI, 2 BB", points:"0.9", OP:"3", day:"3"},
    {id:"2", game:"2-3, 2 HR, 3 RBI, 1 BB", points:"1.3", OP:"5", day:"2"},
    {id:"45", game:"4-5, 1 2B, 1 RBI, 1 BB", points:"1.2", OP:"5", day:"3"},
    {id:"74", game:"3-6, 1 2B, 3 RBI", points:"1", OP:"4", day:"5"},
    {id:"57", game:"1 IP, 1 H, 0 ER, 0 BB, 3 K", points:"0.8", OP:"8", day:"9"},
    {id:"99", game:"8 IP, 4 H, 1 ER, 1 BB, 5 K", points:"0.75", OP:"7", day:"5"},
    {id:"33", game:"6 IP, 5 H, 1 ER, 4 BB, 7 K", points:"0.7", OP:"7", day:"4"},
    //acorns 
    {id:"78", game:"2-2, 1 2B, 1 HR, 4 RBI, 1 BB", points:"1.3", OP:"5", day:"6"},
    {id:"65", game:"4-5, 1 2B", points:"0.9", OP:"3", day:"7"},
    {id:"42", game:"1-2, 1 2B, 1 RBI, 2 BB", points:"0.8", OP:"3", day:"1"},
    {id:"6", game:"3-4, 2 HR, 4 RBI, 1 BB", points:"1.6", OP:"5", day:"3"},
    {id:"18", game:"2-4, 2 HR, 2 RBI", points:"1", OP:"4", day:"9"},
    {id:"54", game:"2-4, 1 2B, 2 RBI, 1 BB", points:"0.9", OP:"3", day:"2"},
    {id:"17", game:"7 IP, 2 H, 0 ER, 1 BB, 11 K", points:"0.914285714285714", OP:"9", day:"8"},
    {id:"53", game:"1 IP, 0 H, 0 ER, 0 BB, 3 K", points:"0.9", OP:"9", day:"1"},
    {id:"5", game:"6 IP, 2 H, 1 ER, 3 BB, 10 K", points:"0.816666666666667", OP:"8", day:"7"}

];

export default rawStatsSP6;