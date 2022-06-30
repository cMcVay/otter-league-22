let rawStatsSP10 = [
    //mindfreaks 
    {id:"48", game:"3-4, 1 2B, 1 HR, 4 RBI", points:"1.3", OP:"5", day:"2"},
    {id:"24", game:"2-4, 1 2B, 1 RBI", points:"0.6", OP:"2", day:"1"},
    {id:"11", game:"1-4, 1 2B", points:"0.3", OP:"0", day:"2"},
    {id:"0", game:"3-3, 2 2B, 1 HR, 2 RBI, 1 BB", points:"1.4", OP:"5", day:"2"},
    {id:"72", game:"1-3, 1 HR, 1 RBI, 2 BB", points:"0.9", OP:"3", day:"2"},
    {id:"35", game:"3-4, 2 2B", points:"0.8", OP:"3", day:"2"},
    {id:"83", game:"8 IP, 2 H, 0 ER, 1 BB, 6 K", points:"0.8375", OP:"8", day:"3"},
    {id:"90", game:"5.2 IP, 5 H, 0 ER, 1 BB, 11 K", points:"0.788235294117647", OP:"7", day:"3"},
    {id:"23", game:"6.1 IP, 5 H, 3 ER, 1 BB, 8 K", points:"0.642105263157895", OP:"6", day:"2"},
    //Manatees
    {id:"75", game:"3-5, 2 2B, 2 RBI", points:"1", OP:"4", day:"2"},
    {id:"39", game:"2-4, 1 2B, 2 RBI", points:"0.7", OP:"2", day:"2"},
    {id:"68", game:"1-3, 1 BB, 2 SB", points:"0.6", OP:"2", day:"1"},
    {id:"20", game:"3-5, 1 2B, 1 HR, 2 RBI", points:"1.1", OP:"4", day:"2"},
    {id:"91", game:"2-5, 1 HR, 1 RBI", points:"0.7", OP:"2", day:"2"},
    {id:"56", game:"2-4, 1 2B, 1 RBI", points:"0.6", OP:"2", day:"2"},
    {id:"51", game:"7 IP, 4 H, 0 ER, 2 BB, 10 K", points:"0.857142857142857", OP:"8", day:"1"},
    {id:"32", game:"9 IP, 7 H, 2 ER, 2 BB, 3 K", points:"0.744444444444445", OP:"7", day:"3"},
    {id:"97", game:"6 IP, 7 H, 1 ER, 0 BB, 4 K", points:"0.683333333333333", OP:"6", day:"2"},
    //Aliens
    {id:"25", game:"4-4, 1 2B, 1 HR, 2 RBI", points:"1.3", OP:"5", day:"1"},
    {id:"10", game:"2-4, 2 HR, 2 RBI", points:"1", OP:"4", day:"2"},
    {id:"70", game:"2-4, 1 2B, 1 HR, 1 RBI", points:"0.8", OP:"3", day:"2"},
    {id:"37", game:"2-5, 1 2B, 2 RBI, 1 SB", points:"0.8", OP:"3", day:"1"},
    {id:"58", game:"2-4, 1 RBI, 2 SB", points:"0.7", OP:"2", day:"2"},
    {id:"1", game:"2-3, 1 BB", points:"0.6", OP:"2", day:"1"},
    {id:"82", game:"7 IP, 3 H, 0 ER, 1 BB, 3 K", points:"0.785714285714286", OP:"7", day:"1"},
    //Doodles 
    {id:"55", game:"2-4, 2 2B, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"3"},
    {id:"4", game:"2-4, 1 RBI, 1 BB", points:"0.7", OP:"2", day:"2"},
    {id:"31", game:"1-4, 1 HR, 1 RBI", points:"0.5", OP:"1", day:"2"},
    {id:"52", game:"3-5, 3 HR, 6 RBI", points:"1.8", OP:"5", day:"3"},
    {id:"19", game:"1-3, 1 HR, 3 RBI, 1 BB, 1 SB", points:"1", OP:"4", day:"2"},
    {id:"28", game:"2-5, 1 SB", points:"0.5", OP:"1", day:"2"},
    {id:"16", game:"7 IP, 1 H, 0 ER, 3 BB, 8 K", points:"0.857142857142857", OP:"8", day:"2"},
    {id:"67", game:"6 IP, 4 H, 2 ER, 2 BB, 7 K", points:"0.683333333333333", OP:"6", day:"2"},
    {id:"88", game:"5 IP, 6 H, 5 ER, 1 BB, 5 K", points:"0.26", OP:"2", day:"1"},
    //megabytes
    {id:"21", game:"2-4, 1 HR, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"3"},
    {id:"50", game:"1-3, 1 HR, 1 RBI, 1 BB", points:"0.7", OP:"2", day:"2"},
    {id:"98", game:"1-3, 1 RBI, 2 BB", points:"0.7", OP:"2", day:"2"},
    {id:"86", game:"2-4, 2 2B, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"1"},
    {id:"26", game:"1-3, 1 HR, 2 RBI, 1 BB", points:"0.8", OP:"3", day:"1"},
    {id:"2", game:"1-3, 1 HR, 2 RBI, 1 BB", points:"0.8", OP:"3", day:"3"},
    {id:"57", game:"1 IP, 0 H, 0 ER, 0 BB, 3 K", points:"0.9", OP:"9", day:"2"},
    {id:"33", game:"6 IP, 6 H, 2 ER, 1 BB, 6 K", points:"0.65", OP:"6", day:"1"},
    {id:"92", game:"7 IP, 6 H, 3 ER, 1 BB, 7 K", points:"0.628571428571429", OP:"6", day:"1"},
    //acorns 
    {id:"42", game:"3-5, 1 RBI", points:"0.7", OP:"2", day:"2"},
    {id:"41", game:"2-4", points:"0.4", OP:"1", day:"2"},
    {id:"65", game:"1-4, 1 BB", points:"0.4", OP:"1", day:"2"},
    {id:"18", game:"3-3, 1 HR, 2 RBI, 2 BB", points:"1.4", OP:"5", day:"2"},
    {id:"66", game:"2-3, 1 RBI, 2 BB", points:"0.9", OP:"3", day:"3"},
    {id:"54", game:"2-3, 2 BB", points:"0.8", OP:"3", day:"2"},
    {id:"89", game:"0.2 IP, 1 H, 0 ER, 0 BB, 2 K", points:"0.75", OP:"7", day:"3"},
    {id:"53", game:"1 IP, 0 H, 0 ER, 0 BB, 1 K", points:"0.7", OP:"7", day:"1"},
    {id:"103", game:"6 IP, 7 H, 4 ER, 2 BB, 6 K", points:"0.483333333333333", OP:"4", day:"1"}

];

export default rawStatsSP10;