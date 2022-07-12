let rawStatsSP10 = [
    //mindfreaks 
    {id:"48", game:"3-4, 1 2B, 1 HR, 4 RBI", points:"1.3", OP:"5", day:"2"},
    {id:"36", game:"2-2, 2 BB", points:"0.8", OP:"3", day:"6"},
    {id:"24", game:"2-4, 1 2B, 1 RBI", points:"0.6", OP:"2", day:"1"},
    {id:"0", game:"3-3, 2 2B, 1 HR, 2 RBI, 1 BB", points:"1.4", OP:"5", day:"2"},
    {id:"72", game:"2-3, 2 HR, 2 RBI, 1 BB", points:"1.2", OP:"5", day:"9"},
    {id:"104", game:"2-3, 1 2B, 1 HR, 2 RBI", points:"0.9", OP:"3", day:"7"},
    {id:"83", game:"8 IP, 2 H, 0 ER, 1 BB, 6 K", points:"0.8375", OP:"8", day:"3"},
    {id:"23", game:"7 IP, 4 H, 0 ER, 1 BB, 5 K", points:"0.8", OP:"8", day:"7"},
    {id:"90", game:"5.2 IP, 5 H, 0 ER, 1 BB, 11 K", points:"0.788235294117647", OP:"7", day:"3"},
    //Manatees
    {id:"39", game:"3-5, 1 HR, 3 RBI", points:"1.1", OP:"4", day:"9"},
    {id:"75", game:"3-5, 2 2B, 2 RBI", points:"1", OP:"4", day:"2"},
    {id:"8", game:"3-4, 1 2B, 1 RBI", points:"0.8", OP:"3", day:"7"},
    {id:"20", game:"3-5, 1 2B, 1 HR, 2 RBI", points:"1.1", OP:"4", day:"2"},
    {id:"56", game:"3-4, 1 2B, 1 HR, 2 RBI", points:"1.1", OP:"4", day:"4"},
    {id:"15", game:"2-4, 1 BB, 2 SB", points:"0.8", OP:"3", day:"7"},
    {id:"32", game:"8 IP, 2 H, 0 ER, 0 BB, 10 K", points:"0.9", OP:"9", day:"9"},
    {id:"51", game:"7 IP, 4 H, 0 ER, 2 BB, 10 K", points:"0.857142857142857", OP:"8", day:"1"},
    {id:"87", game:"7 IP, 4 H, 0 ER, 1 BB, 8 K", points:"0.842857142857143", OP:"8", day:"7"},
    //Aliens
    {id:"70", game:"2-2, 1 2B, 1 HR, 2 RBI, 2 BB, 1 SB", points:"1.4", OP:"5", day:"9"},
    {id:"25", game:"4-4, 1 2B, 1 HR, 2 RBI", points:"1.3", OP:"5", day:"1"},
    {id:"10", game:"2-4, 2 HR, 2 RBI", points:"1", OP:"4", day:"2"},
    {id:"73", game:"3-5, 1 HR, 3 RBI", points:"1.1", OP:"4", day:"4"},
    {id:"58", game:"1-3, 1 HR, 2 RBI, 2 BB", points:"1", OP:"4", day:"7"},
    {id:"46", game:"2-4, 1 HR, 3 RBI", points:"0.9", OP:"3", day:"4"},
    {id:"82", game:"7 IP, 3 H, 0 ER, 1 BB, 3 K", points:"0.785714285714286", OP:"7", day:"1"},
    {id:"109", game:"7 IP, 5 H, 1 ER, 0 BB, 4 K", points:"0.728571428571429", OP:"7", day:"5"},
    {id:"13", game:"6 IP, 5 H, 3 ER, 2 BB, 5 K", points:"0.566666666666667", OP:"5", day:"4"},
    //Doodles 
    {id:"4", game:"3-5, 1 2B, 2 RBI", points:"0.9", OP:"3", day:"7"},
    {id:"31", game:"2-4, 1 HR, 1 RBI", points:"0.7", OP:"2", day:"8"},
    {id:"95", game:"1-4, 1 RBI", points:"0.3", OP:"0", day:"8"},
    {id:"52", game:"3-5, 3 HR, 6 RBI", points:"1.8", OP:"5", day:"3"},
    {id:"19", game:"1-3, 1 HR, 3 RBI, 1 BB, 1 SB", points:"1", OP:"4", day:"2"},
    {id:"28", game:"2-5, 1 3B, 1 RBI", points:"0.7", OP:"2", day:"4"},
    {id:"16", game:"7 IP, 1 H, 0 ER, 3 BB, 8 K", points:"0.857142857142857", OP:"8", day:"2"},
    {id:"67", game:"6 IP, 4 H, 2 ER, 2 BB, 7 K", points:"0.683333333333333", OP:"6", day:"2"},
    {id:"88", game:"6.1 IP, 3 H, 2 ER, 3 BB, 5 K", points:"0.657894736842105", OP:"6", day:"7"},
    //megabytes
    {id:"98", game:"2-4, 2 HR, 6 RBI", points:"1.4", OP:"5", day:"7"},
    {id:"21", game:"2-4, 1 HR, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"3"},
    {id:"81", game:"1-3, 1 HR, 3 RBI, 1 BB", points:"0.9", OP:"3", day:"9"},
    {id:"86", game:"3-4, 2 2B, 3 RBI, 2 BB", points:"1.5", OP:"5", day:"9"},
    {id:"26", game:"1-3, 1 HR, 2 RBI, 1 BB", points:"0.8", OP:"3", day:"1"},
    {id:"2", game:"1-3, 1 HR, 2 RBI, 1 BB", points:"0.8", OP:"3", day:"3"},
    {id:"9", game:"6 IP, 2 H, 0 ER, 0 BB, 11 K", points:"0.95", OP:"9", day:"9"},
    {id:"57", game:"1 IP, 0 H, 0 ER, 0 BB, 3 K", points:"0.9", OP:"9", day:"2"},
    {id:"105", game:"7 IP, 3 H, 1 ER, 1 BB, 10 K", points:"0.828571428571429", OP:"8", day:"6"},
    //acorns 
    {id:"41", game:"4-4, 1 2B, 1 3B, 1 HR, 3 RBI", points:"1.6", OP:"5", day:"5"},
    {id:"42", game:"3-5, 1 2B, 1 HR, 2 RBI", points:"1.1", OP:"4", day:"9"},
    {id:"78", game:"2-3, 1 BB", points:"0.6", OP:"2", day:"5"},
    {id:"18", game:"3-3, 1 HR, 2 RBI, 2 BB", points:"1.4", OP:"5", day:"2"},
    {id:"6", game:"2-3, 2 2B, 2 BB", points:"1", OP:"4", day:"7"},
    {id:"66", game:"2-3, 1 RBI, 2 BB", points:"0.9", OP:"3", day:"3"},
    {id:"89", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"5"},
    {id:"53", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"6"},
    {id:"17", game:"6 IP, 1 H, 1 ER, 4 BB, 5 K", points:"0.733333333333333", OP:"7", day:"5"}

];

export default rawStatsSP10;