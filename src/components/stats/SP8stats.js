let rawStatsSP8 = [
    //mindfreaks 
    {id:"11", game:"3-4, 2 2B, 1 HR, 1 RBI", points:"1.1", OP:"4", day:"2"},
    {id:"48", game:"2-4, 1 2B, 2 RBI, 2 BB", points:"1.1", OP:"4", day:"3"},
    {id:"12", game:"2-4, 1 HR, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"2"},
    {id:"0", game:"3-4, 1 2B, 1 HR, 3 RBI, 1 BB", points:"1.4", OP:"5", day:"3"},
    {id:"60", game:"2-5, 2 HR, 3 RBI", points:"1.1", OP:"4", day:"1"},
    {id:"104", game:"2-5, 1 HR, 2 RBI", points:"0.8", OP:"3", day:"3"},
    {id:"84", game:"9 IP, 3 H, 0 ER, 0 BB, 12 K", points:"1", OP:"10", day:"6"},
    {id:"23", game:"6 IP, 2 H, 0 ER, 0 BB, 8 K", points:"0.9", OP:"9", day:"3"},
    {id:"71", game:"6 IP, 4 H, 0 ER, 2 BB, 8 K", points:"0.833333333333334", OP:"8", day:"2"},
    //Manatees
    {id:"75", game:"3-4, 2 HR, 4 RBI, 1 BB", points:"1.6", OP:"5", day:"5"},
    {id:"101", game:"3-4, 2 2B", points:"0.8", OP:"3", day:"3"},
    {id:"8", game:"1-4, 1 RBI, 1 BB, 1 SB", points:"0.6", OP:"2", day:"1"},
    {id:"91", game:"2-4, 2 HR, 4 RBI, 1 BB", points:"1.4", OP:"5", day:"1"},
    {id:"3", game:"3-4, 1 2B, 2 HR, 3 RBI", points:"1.4", OP:"5", day:"3"},
    {id:"20", game:"2-4, 2 RBI", points:"0.6", OP:"2", day:"6"},
    {id:"97", game:"6 IP, 2 H, 0 ER, 3 BB, 8 K", points:"0.85", OP:"8", day:"4"},
    {id:"63", game:"8 IP, 5 H, 1 ER, 1 BB, 5 K", points:"0.7375", OP:"7", day:"2"},
    {id:"51", game:"6 IP, 6 H, 1 ER, 3 BB, 4 K", points:"0.65", OP:"6", day:"3"},
    //Aliens
    {id:"70", game:"2-5, 1 2B, 1 HR, 5 RBI", points:"1.2", OP:"5", day:"1"},
    {id:"85", game:"3-4, 1 BB", points:"0.8", OP:"3", day:"3"},
    {id:"10", game:"1-3, 1 RBI, 1 BB", points:"0.5", OP:"1", day:"2"},
    {id:"1", game:"1-2, 1 HR, 3 RBI, 2 BB", points:"1.1", OP:"4", day:"3"},
    {id:"46", game:"2-4, 1 2B, 2 RBI", points:"0.7", OP:"2", day:"3"},
    {id:"73", game:"2-5, 1 2B, 2 RBI", points:"0.7", OP:"2", day:"3"},
    {id:"61", game:"8 IP, 5 H, 1 ER, 0 BB, 7 K", points:"0.775", OP:"7", day:"5"},
    {id:"34", game:"1 IP, 0 H, 0 ER, 0 BB, 1 K", points:"0.7", OP:"7", day:"2"},
    {id:"13", game:"6.2 IP, 9 H, 3 ER, 1 BB, 7 K", points:"0.575", OP:"5", day:"6"},
    //Doodles 
    {id:"40", game:"3-5, 1 2B, 1 HR, 3 RBI", points:"1.2", OP:"5", day:"4"},
    {id:"4", game:"3-5, 1 HR, 3 RBI", points:"1.1", OP:"4", day:"5"},
    {id:"95", game:"2-3, 1 2B, 1 RBI, 1 BB", points:"0.8", OP:"3", day:"4"},
    {id:"52", game:"3-4, 1 2B, 1 HR, 2 RBI", points:"1.1", OP:"4", day:"3"},
    {id:"76", game:"2-4, 1 2B, 1 HR, 3 RBI", points:"1", OP:"4", day:"2"},
    {id:"19", game:"1-4, 1 HR, 2 RBI, 1 BB, 1 SB", points:"0.9", OP:"3", day:"2"},
    {id:"16", game:"7 IP, 3 H, 0 ER, 1 BB, 4 K", points:"0.8", OP:"8", day:"4"},
    {id:"79", game:"7 IP, 6 H, 2 ER, 0 BB, 6 K", points:"0.685714285714286", OP:"6", day:"4"},
    {id:"43", game:"7 IP, 6 H, 2 ER, 0 BB, 6 K", points:"0.685714285714286", OP:"6", day:"5"},
    //megabytes
    {id:"50", game:"3-5, 1 2B, 1 HR, 2 RBI", points:"1.1", OP:"4", day:"2"},
    {id:"21", game:"3-5, 1 2B, 3 RBI", points:"1", OP:"4", day:"1"},
    {id:"62", game:"1-4, 1 HR, 4 RBI", points:"0.8", OP:"3", day:"3"},
    {id:"26", game:"2-4, 1 2B, 3 RBI, 2 BB", points:"1.2", OP:"5", day:"4"},
    {id:"2", game:"2-3, 2 HR, 3 RBI", points:"1.1", OP:"4", day:"3"},
    {id:"86", game:"4-6, 2 RBI", points:"1", OP:"4", day:"4"},
    {id:"57", game:"1 IP, 0 H, 0 ER, 0 BB, 3 K", points:"0.9", OP:"9", day:"4"},
    {id:"105", game:"8 IP, 2 H, 0 ER, 1 BB, 9 K", points:"0.875", OP:"8", day:"1"},
    {id:"14", game:"4 IP, 4 H, 3 ER, 0 BB, 6 K", points:"0.45", OP:"4", day:"2"},
    //acorns 
    {id:"77", game:"2-5, 2 HR, 3 RBI", points:"1.1", OP:"4", day:"2"},
    {id:"78", game:"2-4, 1 HR, 2 RBI, 1 BB", points:"1", OP:"4", day:"4"},
    {id:"65", game:"1-3, 1 HR, 2 RBI, 1 BB", points:"0.8", OP:"3", day:"3"},
    {id:"29", game:"3-3, 1 2B, 1 HR, 2 RBI, 1 BB", points:"1.3", OP:"5", day:"2"},
    {id:"66", game:"4-5, 1 HR, 3 RBI", points:"1.3", OP:"5", day:"2"},
    {id:"18", game:"3-4, 1 2B, 2 RBI", points:"0.9", OP:"3", day:"4"},
    {id:"89", game:"1.2 IP, 0 H, 0 ER, 1 BB, 5 K", points:"0.84", OP:"8", day:"4"},
    {id:"5", game:"6 IP, 5 H, 0 ER, 1 BB, 7 K", points:"0.816666666666667", OP:"8", day:"6"},
    {id:"53", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"1"}

];

export default rawStatsSP8;