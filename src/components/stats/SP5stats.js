let rawStatsSP5 = [
    //mindfreaks 
    {id:"11", game:"2-4, 1 3B, 1 HR, 3 RBI", points:"1.1", OP:"4", day:"8"},
    {id:"24", game:"2-4, 2 HR, 3 RBI", points:"1.1", OP:"4", day:"9"},
    {id:"36", game:"2-3, 2 BB, 1 SB", points:"0.9", OP:"3", day:"7"},
    {id:"35", game:"3-4, 1 2B, 1 3B, 1 SB", points:"1", OP:"4", day:"2"},
    {id:"0", game:"2-3, 1 HR, 2 RBI, 1 BB", points:"1", OP:"4", day:"3"},
    {id:"72", game:"1-5, 1 HR, 2 RBI, 1 BB", points:"0.8", OP:"3", day:"1"},
    {id:"23", game:"7 IP, 4 H, 0 ER, 0 BB, 9 K", points:"0.871428571428572", OP:"8", day:"6"},
    {id:"83", game:"6 IP, 6 H, 0 ER, 0 BB, 8 K", points:"0.833333333333334", OP:"8", day:"9"},
    {id:"47", game:"5 IP, 2 H, 0 ER, 0 BB, 5 K", points:"0.76", OP:"7", day:"8"},
    //Manatees
    {id:"27", game:"2-3, 1 HR, 3 RBI, 2 BB", points:"1.3", OP:"5", day:"5"},
    {id:"68", game:"2-3, 2 RBI, 2 BB, 2 SB", points:"1.2", OP:"5", day:"7"},
    {id:"39", game:"2-4, 1 2B, 1 HR, 1 RBI, 1 BB", points:"1", OP:"4", day:"5"},
    {id:"3", game:"3-4, 1 2B, 1 HR, 1 RBI, 1 BB", points:"1.2", OP:"5", day:"5"},
    {id:"20", game:"3-4, 1 HR, 4 RBI", points:"1.2", OP:"5", day:"7"},
    {id:"91", game:"1-3, 1 HR, 1 RBI, 2 BB", points:"0.9", OP:"3", day:"1"},
    {id:"32", game:"8 IP, 3 H, 1 ER, 1 BB, 5 K", points:"0.7625", OP:"7", day:"4"},
    {id:"63", game:"7 IP, 6 H, 0 ER, 2 BB, 4 K", points:"0.742857142857143", OP:"7", day:"5"},
    {id:"51", game:"7 IP, 5 H, 3 ER, 1 BB, 8 K", points:"0.657142857142857", OP:"6", day:"1"},
    //Aliens
    {id:"25", game:"3-4, 2 2B, 1 HR, 3 RBI", points:"1.3", OP:"5", day:"3"},
    {id:"10", game:"2-4, 1 2B, 1 BB", points:"0.7", OP:"2", day:"6"},
    {id:"70", game:"1-3, 1 2B, 1 BB", points:"0.5", OP:"1", day:"5"},
    {id:"58", game:"4-5, 1 BB", points:"1", OP:"4", day:"8"},
    {id:"46", game:"2-6, 1 2B, 3 RBI, 1 SB", points:"0.9", OP:"3", day:"1"},
    {id:"37", game:"2-3, 1 2B, 2 RBI, 1 BB", points:"0.9", OP:"3", day:"4"},
    {id:"34", game:"1 IP, 0 H, 0 ER, 0 BB, 3 K", points:"0.9", OP:"9", day:"4"},
    {id:"61", game:"7 IP, 6 H, 0 ER, 0 BB, 5 K", points:"0.785714285714286", OP:"7", day:"7"},
    {id:"13", game:"6 IP, 7 H, 1 ER, 3 BB, 7 K", points:"0.683333333333333", OP:"6", day:"2"},
    //Doodles 
    {id:"31", game:"4-4, 3 HR, 7 RBI, 1 BB, 1 SB", points:"2.4", OP:"5", day:"7"},
    {id:"40", game:"4-5, 2 2B", points:"1", OP:"4", day:"7"},
    {id:"64", game:"2-4, 2 3B, 1 RBI", points:"0.9", OP:"3", day:"1"},
    {id:"7", game:"3-4, 2 2B, 1 HR, 2 RBI, 2 BB", points:"1.6", OP:"5", day:"1"},
    {id:"19", game:"2-5, 2 HR, 6 RBI", points:"1.4", OP:"5", day:"5"},
    {id:"52", game:"2-4, 1 2B, 1 HR, 2 RBI", points:"0.9", OP:"3", day:"9"},
    {id:"88", game:"7 IP, 3 H, 1 ER, 0 BB, 11 K", points:"0.857142857142857", OP:"8", day:"1"},
    {id:"67", game:"6 IP, 4 H, 2 ER, 1 BB, 12 K", points:"0.783333333333333", OP:"7", day:"3"},
    {id:"43", game:"7 IP, 4 H, 2 ER, 2 BB, 8 K", points:"0.714285714285714", OP:"7", day:"3"},
    //megabytes
    {id:"21", game:"1-3, 3 BB", points:"0.8", OP:"3", day:"1"},
    {id:"98", game:"2-4, 2 RBI, 1 BB", points:"0.8", OP:"3", day:"4"},
    {id:"62", game:"2-4, 1 2B, 2 RBI", points:"0.7", OP:"2", day:"2"},
    {id:"2", game:"4-5, 1 2B, 2 HR, 3 RBI", points:"1.6", OP:"5", day:"5"},
    {id:"26", game:"2-3, 1 HR, 3 RBI, 2 BB", points:"1.3", OP:"5", day:"7"},
    {id:"45", game:"2-3, 1 HR, 1 RBI, 2 BB", points:"1.1", OP:"4", day:"2"},
    {id:"57", game:"1 IP, 0 H, 0 ER, 0 BB, 3 K", points:"0.9", OP:"9", day:"4"},
    {id:"9", game:"7 IP, 3 H, 1 ER, 2 BB, 6 K", points:"0.757142857142857", OP:"7", day:"1"},
    {id:"14", game:"5 IP, 6 H, 2 ER, 2 BB, 4 K", points:"0.46", OP:"4", day:"6"},
    //acorns 
    {id:"78", game:"3-4, 1 HR, 3 RBI, 1 BB, 1 SB", points:"1.4", OP:"5", day:"7"},
    {id:"65", game:"3-4, 2 HR, 3 RBI", points:"1.3", OP:"5", day:"9"},
    {id:"77", game:"2-2, 1 3B, 1 HR, 2 RBI, 1 BB", points:"1.2", OP:"5", day:"6"},
    {id:"66", game:"3-4, 1 2B, 3 RBI, 1 BB", points:"1.2", OP:"5", day:"2"},
    {id:"6", game:"3-4, 1 2B, 1 HR, 2 RBI", points:"1.1", OP:"4", day:"5"},
    {id:"54", game:"3-4, 2 2B, 1 RBI", points:"0.9", OP:"3", day:"1"},
    {id:"89", game:"1 IP, 0 H, 0 ER, 0 BB, 3 K", points:"0.9", OP:"9", day:"2"},
    {id:"53", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"9"},
    {id:"17", game:"7 IP, 5 H, 1 ER, 0 BB, 7 K", points:"0.771428571428571", OP:"7", day:"1"}

];

export default rawStatsSP5;