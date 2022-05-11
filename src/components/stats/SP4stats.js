let rawStatsSP4 = [
    //mindfreaks 
    {id:"12", game:"2-3, 2 HR, 2 RBI, 1 BB", points:"1.2", OP:"5", day:"2"},
    {id:"11", game:"1-3, 1 3B, 1 RBI, 1 BB", points:"0.7", OP:"2", day:"5"},
    {id:"24", game:"3-5", points:"0.6", OP:"2", day:"2"},
    {id:"0", game:"3-4, 2 HR, 5 RBI", points:"1.5", OP:"5", day:"6"},
    {id:"35", game:"3-5, 1 2B, 1 HR, 2 RBI", points:"1.1", OP:"4", day:"2"},
    {id:"59", game:"2-3, 1 HR, 2 RBI", points:"0.8", OP:"3", day:"4"},
    {id:"90", game:"7 IP, 6 H, 0 ER, 0 BB, 11 K", points:"0.871428571428572", OP:"8", day:"2"},
    {id:"83", game:"8 IP, 1 H, 0 ER, 2 BB, 5 K", points:"0.825", OP:"8", day:"7"},
    {id:"71", game:"7 IP, 5 H, 2 ER, 1 BB, 8 K", points:"0.714285714285714", OP:"7", day:"5"},
    //Manatees
    {id:"39", game:"2-3, 2 HR, 2 RBI, 1 BB", points:"1.2", OP:"5", day:"7"},
    {id:"68", game:"3-4, 1 2B, 2 RBI, 1 SB", points:"1.", OP:"4", day:"7"},
    {id:"8", game:"2-4, 1 2B, 1 RBI, 1 BB, 1 SB", points:"0.9", OP:"3", day:"7"},
    {id:"3", game:"3-4, 2 HR, 3 RBI, 1 BB", points:"1.5", OP:"5", day:"7"},
    {id:"44", game:"2-4, 1 3B, 1 HR, 3 RBI, 1 BB", points:"1.3", OP:"5", day:"1"},
    {id:"15", game:"2-3, 1 HR, 1 RBI, 1 BB, 1 SB", points:"1", OP:"4", day:"4"},
    {id:"87", game:"7 IP, 5 H, 0 ER, 1 BB, 2 K", points:"0.742857142857143", OP:"7", day:"4"},
    {id:"51", game:"6.1 IP, 6 H, 1 ER, 1 BB, 5 K", points:"0.705263157894737", OP:"7", day:"4"},
    {id:"32", game:"4.2 IP, 5 H, 2 ER, 2 BB, 5 K", points:"0.485714285714286", OP:"4", day:"3"},
    //Aliens
    {id:"70", game:"2-4, 1 HR, 2 RBI", points:"0.8", OP:"3", day:"1"},
    {id:"25", game:"2-4, 2 2B, 1 BB", points:"0.8", OP:"3", day:"5"},
    {id:"22", game:"3-5, 1 2B", points:"0.7", OP:"2", day:"6"},
    {id:"1", game:"2-3, 1 2B, 1 HR, 1 RBI, 2 BB", points:"1.2", OP:"5", day:"2"},
    {id:"58", game:"4-5, 1 2B, 1 RBI", points:"1", OP:"4", day:"3"},
    {id:"46", game:"3-4, 2 2B, 2 RBI", points:"1", OP:"4", day:"6"},
    {id:"34", game:"1 IP, 0 H, 0 ER, 1 BB, 3 K", points:"0.8", OP:"8", day:"3"},
    {id:"61", game:"7 IP, 5 H, 2 ER, 0 BB, 3 K", points:"0.657142857142857", OP:"6", day:"3"},
    {id:"94", game:"5.2 IP, 10 H, 2 ER, 0 BB, 3 K", points:"0.475", OP:"4", day:"5"},
    //Doodles 
    {id:"64", game:"2-3, 2 HR, 2 RBI, 2 BB", points:"1.4", OP:"5", day:"4"},
    {id:"31", game:"2-5, 2 2B, 3 RBI", points:"0.9", OP:"3", day:"1"},
    {id:"95", game:"2-3, 1 2B, 2 RBI, 1 BB", points:"0.9", OP:"3", day:"4"},
    {id:"28", game:"3-5, 1 2B, 1 HR, 2 RBI, 1 SB", points:"1.2", OP:"5", day:"2"},
    {id:"19", game:"1-2, 3 BB, 2 SB", points:"1", OP:"4", day:"7"},
    {id:"7", game:"2-5, 1 2B, 1 HR, 2 RBI", points:"0.9", OP:"3", day:"2"},
    {id:"67", game:"7 IP, 4 H, 0 ER, 1 BB, 6 K", points:"0.814285714285715", OP:"8", day:"1"},
    {id:"43", game:"7 IP, 3 H, 1 ER, 1 BB, 7 K", points:"0.785714285714286", OP:"7", day:"2"},
    {id:"88", game:"8 IP, 5 H, 0 ER, 2 BB, 5 K", points:"0.775", OP:"7", day:"4"},
    //megabytes
    {id:"21", game:"3-4, 3 2B", points:"0.9", OP:"3", day:"4"},
    {id:"81", game:"2-5, 1 HR, 1 RBI", points:"0.7", OP:"2", day:"1"},
    {id:"50", game:"1-4, 1 HR, 2 RBI", points:"0.6", OP:"2", day:"1"},
    {id:"86", game:"4-5, 1 HR, 2 RBI, 1 SB", points:"1.3", OP:"5", day:"7"},
    {id:"2", game:"2-5, 1 HR, 3 RBI", points:"0.9", OP:"3", day:"7"},
    {id:"26", game:"2-4, 1 HR, 3 RBI", points:"0.9", OP:"3", day:"7"},
    {id:"14", game:"7 IP, 4 H, 1 ER, 2 BB, 6 K", points:"0.742857142857143", OP:"7", day:"5"},
    {id:"33", game:"7 IP, 6 H, 1 ER, 1 BB, 5 K", points:"0.714285714285714", OP:"7", day:"7"},
    {id:"57", game:"1 IP, 0 H, 0 ER, 0 BB, 1 K", points:"0.7", OP:"7", day:"3"},
    //acorns 
    {id:"78", game:"3-5, 2 HR, 5 RBI", points:"1.5", OP:"5", day:"5"},
    {id:"65", game:"2-4, 1 2B, 1 HR, 4 RBI, 1 BB", points:"1.3", OP:"5", day:"7"},
    {id:"41", game:"2-4, 1 HR, 5 RBI", points:"1.1", OP:"4", day:"1"},
    {id:"6", game:"2-5, 1 2B, 1 HR, 5 RBI", points:"1.2", OP:"5", day:"4"},
    {id:"54", game:"2-2, 1 2B, 2 BB", points:"0.9", OP:"3", day:"1"},
    {id:"29", game:"2-4, 1 HR, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"7"},
    {id:"89", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"2"},
    {id:"5", game:"6.1 IP, 5 H, 1 ER, 1 BB, 10 K", points:"0.8", OP:"8", day:"5"},
    {id:"17", game:"6 IP, 6 H, 1 ER, 1 BB, 7 K", points:"0.733333333333333", OP:"7", day:"4"},

];

export default rawStatsSP4;