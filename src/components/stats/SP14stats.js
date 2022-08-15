let rawStatsSP14 = [
    //mindfreaks 
    {id:"11", game:"3-3, 1 HR, 4 RBI, 1 BB", points:"1.4", OP:"5", day:"8"},
    {id:"24", game:"2-4, 2 HR, 4 RBI", points:"1.2", OP:"5", day:"5"},
    {id:"36", game:"3-4, 1 2B, 3 RBI", points:"1", OP:"4", day:"2"},
    {id:"72", game:"3-4, 1 2B, 2 RBI, 1 SB", points:"1.", OP:"4", day:"6"},
    {id:"35", game:"2-4, 1 HR, 2 RBI, 1 SB", points:"0.9", OP:"3", day:"4"},
    {id:"0", game:"2-3, 1 HR, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"5"},
    {id:"47", game:"7 IP, 5 H, 1 ER, 0 BB, 8 K", points:"0.785714285714286", OP:"7", day:"5"},
    {id:"90", game:"6 IP, 4 H, 0 ER, 3 BB, 5 K", points:"0.766666666666667", OP:"7", day:"5"},
    {id:"23", game:"6 IP, 5 H, 1 ER, 3 BB, 8 K", points:"0.733333333333333", OP:"7", day:"5"},
    //Manatees
    {id:"8", game:"2-5, 2 2B, 3 RBI", points:"0.9", OP:"3", day:"5"},
    {id:"101", game:"2-3, 2 BB", points:"0.8", OP:"3", day:"2"},
    {id:"39", game:"2-5, 1 HR, 2 RBI", points:"0.8", OP:"3", day:"5"},
    {id:"15", game:"4-5, 1 SB", points:"0.9", OP:"3", day:"1"},
    {id:"93", game:"3-5, 1 HR, 1 RBI", points:"0.9", OP:"3", day:"5"},
    {id:"56", game:"1-2, 1 2B, 2 BB, 1 SB", points:"0.8", OP:"3", day:"2"},
    {id:"51", game:"6 IP, 6 H, 0 ER, 0 BB, 5 K", points:"0.783333333333333", OP:"7", day:"3"},
    {id:"97", game:"6 IP, 6 H, 2 ER, 0 BB, 7 K", points:"0.683333333333333", OP:"6", day:"8"},
    {id:"80", game:"7 IP, 4 H, 2 ER, 3 BB, 5 K", points:"0.657142857142857", OP:"6", day:"3"},
    //Aliens
    {id:"25", game:"3-5, 1 2B, 1 HR, 3 RBI", points:"1.2", OP:"5", day:"7"},
    {id:"107", game:"2-3, 1 HR, 2 RBI, 1 BB", points:"1", OP:"4", day:"4"},
    {id:"70", game:"2-5, 1 2B, 1 HR, 2 RBI", points:"0.9", OP:"3", day:"5"},
    {id:"1", game:"2-3, 1 2B, 1 HR, 1 RBI, 1 BB", points:"1", OP:"4", day:"5"},
    {id:"73", game:"2-5, 1 2B, 1 HR, 1 RBI, 1 BB", points:"1", OP:"4", day:"5"},
    {id:"58", game:"1-4, 1 2B, 2 RBI, 1 BB", points:"0.7", OP:"2", day:"3"},
    {id:"13", game:"7 IP, 4 H, 0 ER, 1 BB, 8 K", points:"0.842857142857143", OP:"8", day:"5"},
    {id:"34", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"1"},
    {id:"108", game:"6 IP, 3 H, 1 ER, 2 BB, 8 K", points:"0.783333333333333", OP:"7", day:"7"},
    //Doodles 
    {id:"4", game:"2-4, 1 HR, 2 RBI, 1 BB", points:"1", OP:"4", day:"1"},
    {id:"64", game:"2-4, 1 2B, 3 RBI, 1 BB", points:"1", OP:"4", day:"1"},
    {id:"55", game:"1-3, 1 HR, 1 RBI, 2 BB", points:"0.9", OP:"3", day:"2"},
    {id:"19", game:"3-5, 1 HR, 2 RBI", points:"1", OP:"4", day:"6"},
    {id:"52", game:"2-4, 1 RBI, 1 BB, 1 SB", points:"0.8", OP:"3", day:"3"},
    {id:"28", game:"1-3, 2 BB, 1 SB", points:"0.7", OP:"2", day:"1"},
    {id:"16", game:"7 IP, 5 H, 1 ER, 2 BB, 10 K", points:"0.785714285714286", OP:"7", day:"1"},
    {id:"43", game:"6 IP, 5 H, 1 ER, 2 BB, 5 K", points:"0.7", OP:"7", day:"3"},
    {id:"79", game:"6 IP, 8 H, 2 ER, 1 BB, 6 K", points:"0.616666666666667", OP:"6", day:"7"},
    //megabytes
    {id:"11", game:"3-3, 1 HR, 4 RBI, 1 BB", points:"1.4", OP:"5", day:"8"},
    {id:"24", game:"2-4, 2 HR, 4 RBI", points:"1.2", OP:"5", day:"5"},
    {id:"36", game:"3-4, 1 2B, 3 RBI", points:"1", OP:"4", day:"2"},
    {id:"74", game:"3-3, 2 HR, 2 RBI", points:"1.2", OP:"5", day:"3"},
    {id:"2", game:"2-5, 1 2B, 4 RBI, 1 BB", points:"1.1", OP:"4", day:"3"},
    {id:"86", game:"2-4, 2 2B, 1 SB", points:"0.7", OP:"2", day:"1"},
    {id:"9", game:"7 IP, 4 H, 0 ER, 0 BB, 11 K", points:"0.9", OP:"9", day:"2"},
    {id:"99", game:"5.1 IP, 1 H, 2 ER, 4 BB, 4 K", points:"0.556953642384106", OP:"5", day:"1"},
    {id:"105", game:"6.1 IP, 6 H, 4 ER, 0 BB, 3 K", points:"0.514917127071823", OP:"5", day:"2"},
    //acorns 
    {id:"113", game:"3-6, 1 3B, 1 HR, 5 RBI", points:"1.5", OP:"5", day:"5"},
    {id:"41", game:"3-5, 1 2B, 1 HR, 4 RBI", points:"1.3", OP:"5", day:"3"},
    {id:"42", game:"2-2, 1 HR, 3 RBI, 2 BB", points:"1.3", OP:"5", day:"7"},
    {id:"6", game:"3-5, 1 SB", points:"0.7", OP:"2", day:"2"},
    {id:"66", game:"1-3, 2 BB", points:"0.6", OP:"2", day:"2"},
    {id:"114", game:"2-3, 1 BB", points:"0.6", OP:"2", day:"3"},
    {id:"89", game:"1 IP, 0 H, 0 ER, 0 BB, 3 K", points:"0.9", OP:"9", day:"3"},
    {id:"5", game:"7 IP, 4 H, 0 ER, 0 BB, 8 K", points:"0.857142857142857", OP:"8", day:"5"},
    {id:"17", game:"6 IP, 2 H, 1 ER, 2 BB, 9 K", points:"0.816666666666667", OP:"8", day:"3"}

];

export default rawStatsSP14;