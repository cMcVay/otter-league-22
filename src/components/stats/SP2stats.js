let rawStatsSP2 = [
    //mindfreaks 
    {id:"12", game:"3-4, 1 2B, 1 HR, 2 RBI", points:"1.1", OP:"4", day:"3"},
    {id:"36", game:"3-5, 1 HR, 1 RBI", points:"0.9", OP:"3", day:"6"},
    {id:"11", game:"1-4, 1 HR, 4 RBI", points:"0.8", OP:"3", day:"5"},
    {id:"0", game:"2-5, 1 HR, 3 RBI, 1 SB", points:"1", OP:"4", day:"1"},
    {id:"72", game:"2-4, 1 HR, 3 RBI", points:"0.9", OP:"3", day:"4"},
    {id:"35", game:"1-3, 1 HR, 2 RBI, 1 BB", points:"0.8", OP:"3", day:"1"},
    {id:"90", game:"6 IP, 1 H, 0 ER, 1 BB, 12 K", points:"0.966666666666667", OP:"9", day:"5"},
    {id:"83", game:"8 IP, 3 H, 0 ER, 0 BB, 8 K", points:"0.8625", OP:"8", day:"1"},
    {id:"47", game:"5 IP, 1 H, 0 ER, 1 BB, 5 K", points:"0.76", OP:"7", day:"1"},
    //Manatees
    {id:"8", game:"3-4, 1 HR, 2 RBI", points:"1", OP:"4", day:"1"},
    {id:"27", game:"0-1, 4 BB", points:"0.8", OP:"3", day:"9"},
    {id:"68", game:"2-5, 1 HR, 1 RBI, 1 SB", points:"0.8", OP:"3", day:"9"},
    {id:"91", game:"2-5, 2 HR, 5 RBI, 1 BB", points:"1.5", OP:"5", day:"9"},
    {id:"3", game:"3-5, 2 HR, 2 RBI", points:"1.2", OP:"5", day:"8"},
    {id:"93", game:"1-3, 1 HR, 1 RBI, 2 BB", points:"0.9", OP:"3", day:"2"},
    {id:"32", game:"8 IP, 4 H, 0 ER, 1 BB, 6 K", points:"0.8125", OP:"8", day:"5"},
    {id:"51", game:"8 IP, 7 H, 1 ER, 0 BB, 8 K", points:"0.7625", OP:"7", day:"6"},
    {id:"63", game:"6 IP, 8 H, 1 ER, 1 BB, 6 K", points:"0.683333333333334", OP:"6", day:"5"},
    //Aliens
    {id:"70", game:"2-3, 1 HR, 3 RBI, 2 BB", points:"1.3", OP:"5", day:"7"},
    {id:"10", game:"3-4, 1 HR, 1 RBI, 1 BB", points:"1.1", OP:"4", day:"1"},
    {id:"22", game:"3-5, 1 2B, 1 HR, 2 RBI", points:"1.1", OP:"4", day:"4"},
    {id:"1", game:"2-3, 1 2B, 1 HR, 1 RBI, 2 BB", points:"1.2", OP:"5", day:"1"},
    {id:"46", game:"3-4, 1 HR, 1 RBI, 1 BB", points:"1.1", OP:"4", day:"5"},
    {id:"73", game:"3-4, 1 2B, 1 HR, 1 RBI", points:"1", OP:"4", day:"3"},
    {id:"61", game:"6 IP, 1 H, 0 ER, 3 BB, 7 K", points:"0.85", OP:"8", day:"8"},
    {id:"13", game:"6 IP, 4 H, 1 ER, 0 BB, 7 K", points:"0.783333333333333", OP:"7", day:"5"},
    {id:"34", game:"1 IP, 0 H, 0 ER, 0 BB, 1 K", points:"0.7", OP:"7", day:"8"},
    //Doodles
    {id:"4", game:"2-3, 1 RBI, 1 BB", points:"0.7", OP:"2", day:"9"},
    {id:"31", game:"1-3, 1 2B, 1 RBI, 1 BB", points:"0.6", OP:"2", day:"4"},
    {id:"55", game:"0-1, 3 BB", points:"0.6", OP:"2", day:"9"},
    {id:"28", game:"2-3, 1 2B, 1 HR, 4 RBI, 1 BB", points:"1.3", OP:"5", day:"3"},
    {id:"76", game:"2-3, 2 HR, 2 RBI, 1 BB", points:"1.2", OP:"5", day:"4"},
    {id:"7", game:"3-5, 1 2B, 1 HR, 2 RBI", points:"1.1", OP:"4", day:"2"},
    {id:"43", game:"7 IP, 1 H, 0 ER, 1 BB, 9 K", points:"0.9", OP:"9", day:"9"},
    {id:"88", game:"7 IP, 3 H, 0 ER, 0 BB, 9 K", points:"0.885714285714286", OP:"8", day:"6"},
    {id:"67", game:"6 IP, 2 H, 1 ER, 2 BB, 5 K", points:"0.75", OP:"7", day:"3"},
    //megabytes
    {id:"21", game:"4-5, 3 RBI", points:"1.1", OP:"4", day:"2"},
    {id:"81", game:"3-4, 1 2B, 1 RBI", points:"0.8", OP:"3", day:"2"},
    {id:"38", game:"1-3, 1 2B, 1 RBI, 1 BB", points:"0.6", OP:"2", day:"2"},
    {id:"2", game:"2-3, 2 HR, 3 RBI, 1 BB", points:"1.3", OP:"5", day:"7"},
    {id:"74", game:"2-4, 2 HR, 4 RBI", points:"1.2", OP:"5", day:"9"},
    {id:"86", game:"2-3, 1 2B, 2 BB", points:"0.9", OP:"3", day:"9"},
    {id:"9", game:"7 IP, 1 H, 1 ER, 3 BB, 10 K", points:"0.828571428571429", OP:"8", day:"4"},
    {id:"57", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"2"},
    {id:"69", game:"1 IP, 0 H, 0 ER, 0 BB, 1 K", points:"0.7", OP:"7", day:"4"},
    //acorns 
    {id:"77", game:"4-6, 1 2B, 1 HR, 3 RBI, 2 SB", points:"1.6", OP:"5", day:"8"},
    {id:"42", game:"2-3, 1 2B, 1 RBI, 2 BB", points:"1", OP:"4", day:"9"},
    {id:"41", game:"2-4, 1 2B, 1 BB", points:"0.7", OP:"2", day:"2"},
    {id:"6", game:"2-3, 2 HR, 2 RBI, 2 BB, 1 SB", points:"1.5", OP:"5", day:"7"},
    {id:"18", game:"3-5, 2 HR, 4 RBI", points:"1.4", OP:"5", day:"3"},
    {id:"54", game:"2-5, 1 2B, 1 RBI", points:"0.6", OP:"2", day:"1"},
    {id:"30", game:"6 IP, 1 H, 0 ER, 2 BB, 9 K", points:"0.9", OP:"9", day:"5"},
    {id:"5", game:"6.2 IP, 4 H, 0 ER, 1 BB, 9 K", points:"0.86", OP:"8", day:"9"},
    {id:"89", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"6"},

];

export default rawStatsSP2;