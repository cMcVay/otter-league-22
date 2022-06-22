let rawStatsSP9 = [
    //mindfreaks 
    {id:"48", game:"3-4, 1 2B, 1 HR, 2 RBI", points:"1.1", OP:"4", day:"4"},
    {id:"12", game:"2-4, 1 HR, 2 RBI, 1 BB", points:"1", OP:"4", day:"1"},
    {id:"36", game:"1-4, 1 HR, 2 RBI", points:"0.6", OP:"2", day:"1"},
    {id:"0", game:"3-4, 2 HR, 8 RBI", points:"1.8", OP:"5", day:"4"},
    {id:"104", game:"3-4, 1 HR, 2 RBI", points:"1", OP:"4", day:"4"},
    {id:"59", game:"1-5, 1 HR, 2 RBI", points:"0.6", OP:"2", day:"4"},
    {id:"47", game:"6 IP, 2 H, 0 ER, 2 BB, 6 K", points:"0.833333333333333", OP:"8", day:"1"},
    {id:"84", game:"6 IP, 12 H, 4 ER, 1 BB, 4 K", points:"0.383333333333333", OP:"3", day:"4"},
    {id:"83", game:"3.2 IP, 9 H, 4 ER, 0 BB, 3 K", points:"0.1", OP:"1", day:"1"},
    //Manatees
    {id:"39", game:"1-2, 1 HR, 1 RBI, 2 BB", points:"0.9", OP:"3", day:"2"},
    {id:"8", game:"4-5", points:"0.8", OP:"3", day:"4"},
    {id:"102", game:"3-5, 1 2B, 1 RBI", points:"0.8", OP:"3", day:"4"},
    {id:"20", game:"3-5, 1 2B, 4 RBI", points:"1.1", OP:"4", day:"1"},
    {id:"15", game:"3-5, 1 HR, 2 RBI", points:"1", OP:"4", day:"4"},
    {id:"56", game:"2-4, 2 2B, 2 RBI", points:"0.8", OP:"3", day:"3"},
    {id:"32", game:"8 IP, 6 H, 2 ER, 1 BB, 8 K", points:"0.7125", OP:"7", day:"2"},
    {id:"51", game:"6 IP, 7 H, 2 ER, 2 BB, 7 K", points:"0.633333333333333", OP:"6", day:"4"},
    {id:"63", game:"4 IP, 9 H, 6 ER, 1 BB, 1 K", points:"-0.125", OP:"0", day:"3"},
    //Aliens
    {id:"10", game:"2-5, 2 HR, 5 RBI", points:"1.3", OP:"5", day:"4"},
    {id:"25", game:"2-5, 2 RBI", points:"0.6", OP:"2", day:"1"},
    {id:"70", game:"1-2, 2 BB", points:"0.6", OP:"2", day:"1"},
    {id:"37", game:"2-6, 2 2B, 2 RBI", points:"0.8", OP:"3", day:"4"},
    {id:"1", game:"1-5, 1 HR, 3 RBI", points:"0.7", OP:"2", day:"2"},
    {id:"73", game:"2-3, 1 BB", points:"0.6", OP:"2", day:"1"},
    {id:"61", game:"7 IP, 4 H, 1 ER, 2 BB, 5 K", points:"0.728571428571429", OP:"7", day:"3"},
    {id:"13", game:"6.1 IP, 7 H, 2 ER, 1 BB, 9 K", points:"0.689473684210526", OP:"6", day:"2"},
    //Doodles 
    {id:"4", game:"2-3, 1 HR, 2 RBI, 2 BB", points:"1.2", OP:"5", day:"2"},
    {id:"31", game:"1-3, 1 HR, 1 RBI, 1 BB", points:"0.7", OP:"2", day:"2"},
    {id:"40", game:"1-4, 1 HR, 1 RBI, 1 BB", points:"0.7", OP:"2", day:"4"},
    {id:"19", game:"1-3, 1 2B, 3 RBI, 1 BB, 1 SB", points:"0.9", OP:"3", day:"4"},
    {id:"76", game:"2-4, 1 HR, 2 RBI", points:"0.8", OP:"3", day:"3"},
    {id:"52", game:"2-3, 1 BB", points:"0.6", OP:"2", day:"3"},
    {id:"43", game:"8 IP, 4 H, 0 ER, 1 BB, 8 K", points:"0.8375", OP:"8", day:"1"},
    {id:"79", game:"5 IP, 8 H, 4 ER, 2 BB, 7 K", points:"0.32", OP:"3", day:"1"},
    //megabytes
    {id:"21", game:"3-4, 1 2B, 1 3B, 5 RBI, 1 BB", points:"1.6", OP:"5", day:"4"},
    {id:"98", game:"3-4, 1 RBI", points:"0.7", OP:"2", day:"2"},
    {id:"96", game:"2-4, 1 HR, 1 RBI", points:"0.7", OP:"2", day:"3"},
    {id:"2", game:"1-4, 1 2B, 1 RBI, 1 BB", points:"0.6", OP:"2", day:"2"},
    {id:"74", game:"2-5", points:"0.4", OP:"1", day:"1"},
    {id:"86", game:"1-4, 1 2B, 1 RBI", points:"0.4", OP:"1", day:"2"},
    {id:"105", game:"6 IP, 4 H, 1 ER, 1 BB, 8 K", points:"0.783333333333333", OP:"7", day:"3"},
    {id:"57", game:"1 IP, 1 H, 0 ER, 0 BB, 1 K", points:"0.6", OP:"6", day:"3"},
    {id:"92", game:"7.1 IP, 8 H, 5 ER, 2 BB, 5 K", points:"0.459090909090909", OP:"4", day:"3"},
    //acorns 
    {id:"41", game:"2-4, 1 HR, 3 RBI, 1 BB", points:"1.1", OP:"4", day:"1"},
    {id:"78", game:"3-3, 1 HR, 1 RBI, 1 BB", points:"1.1", OP:"4", day:"4"},
    {id:"77", game:"2-4, 1 2B, 1 RBI, 1 BB", points:"0.8", OP:"3", day:"2"},
    {id:"18", game:"1-3, 1 HR, 2 RBI, 1 BB", points:"0.8", OP:"3", day:"4"},
    {id:"29", game:"0-1, 3 BB", points:"0.6", OP:"2", day:"1"},
    {id:"66", game:"1-4, 1 RBI, 1 BB", points:"0.5", OP:"1", day:"2"},
    {id:"17", game:"7 IP, 2 H, 0 ER, 2 BB, 10 K", points:"0.885714285714286", OP:"8", day:"3"},
    {id:"5", game:"7.1 IP, 1 H, 1 ER, 3 BB, 12 K", points:"0.854545454545455", OP:"8", day:"3"},
    {id:"53", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"1"}

];

export default rawStatsSP9;