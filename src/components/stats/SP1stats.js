let rawStatsSP1 = [
    {id:"11", game:"3-5, 1 3B, 1 HR, 6 RBI", points:"1.6", OP:"5", day:"6"},
    {id:"12", game:"2-4, 1 2B, 1 RBI, 1 BB, 1 SB", points:"0.9", OP:"3", day:"3"},
    {id:"36", game:"1-3, 1 HR, 1 RBI, 1 BB, 1 SB", points:"0.8", OP:"3", day:"4"},
    {id:"72", game:"2-4, 1 HR, 2 RBI, 1 BB", points:"1", OP:"4", day:"2"},
    {id:"35", game:"2-5, 1 2B, 3 RBI", points:"0.8", OP:"3", day:"2"},
    {id:"60", game:"2-3, 1 BB", points:"0.6", OP:"2", day:"5"},
    {id:"90", game:"4.2 IP, 4 H, 1 ER, 1 BB, 9 K", points:"0.788524590163935", OP:"7", day:"1"},
    {id:"84", game:"5 IP, 3 H, 0 ER, 2 BB, 7 K", points:"0.74", OP:"7", day:"1"},
    //Manatees
    {id:"75", game:"2-4, 1 2B, 2 RBI, 1 BB", points:"0.9", OP:"3", day:"4"},
    {id:"68", game:"3-5, 2 2B", points:"0.8", OP:"3", day:"4"},
    {id:"39", game:"2-4, 1 2B, 1 BB", points:"0.7", OP:"2", day:"2"},
    {id:"44", game:"2-3, 1 HR, 5 RBI, 1 BB", points:"1.3", OP:"5", day:"1"},
    {id:"56", game:"1-2, 1 HR, 3 RBI, 2 BB", points:"1.1", OP:"4", day:"2"},
    {id:"91", game:"2-5, 2 HR, 2 RBI", points:"1", OP:"4", day:"4"},
    {id:"80", game:"6 IP, 5 H, 1 ER, 1 BB, 3 K", points:"0.683333333333333", OP:"6", day:"2"},
    {id:"51", game:"5 IP, 8 H, 3 ER, 0 BB, 5 K", points:"0.4", OP:"4", day:"3"},
    //Aliens
    {id:"22", game:"3-4, 1 2B, 2 RBI, 1 SB", points:"1.", OP:"4", day:"4"},
    {id:"10", game:"3-4, 1 HR, 1 RBI", points:"0.9", OP:"3", day:"4"},
    {id:"70", game:"0-2, 3 BB", points:"0.6", OP:"2", day:"6"},
    {id:"1", game:"2-3, 1 HR, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"6"},
    {id:"46", game:"1-4, 1 HR, 2 RBI", points:"0.6", OP:"2", day:"3"},
    {id:"37", game:"2-5, 1 RBI, 1 SB", points:"0.6", OP:"2", day:"5"},
    {id:"13", game:"4.2 IP, 2 H, 0 ER, 0 BB, 4 K", points:"0.837704918032787", OP:"8", day:"1"},
    {id:"61", game:"6 IP, 0 H, 0 ER, 4 BB, 3 K", points:"0.783333333333333", OP:"7", day:"1"},
    //Doodles
    {id:"64", game:"2-5, 1 HR, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"6"},
    {id:"4", game:"1-3, 1 HR, 1 RBI, 1 BB", points:"0.7", OP:"2", day:"4"},
    {id:"40", game:"1-4, 1 HR, 2 RBI", points:"0.6", OP:"2", day:"2"},
    {id:"19", game:"2-5, 2 HR, 4 RBI", points:"1.2", OP:"5", day:"2"},
    {id:"76", game:"2-4, 2 HR, 2 RBI", points:"1", OP:"4", day:"6"},
    {id:"52", game:"2-4, 1 HR, 1 RBI", points:"0.7", OP:"2", day:"6"},
    {id:"79", game:"7 IP, 3 H, 1 ER, 0 BB, 5 K", points:"0.771428571428571", OP:"7", day:"3"},
    {id:"16", game:"7 IP, 3 H, 1 ER, 4 BB, 5 K", points:"0.714285714285714", OP:"7", day:"2"},
    //megabytes
    {id:"62", game:"3-5, 1 2B, 1 HR, 3 RBI, 1 BB", points:"1.4", OP:"5", day:"6"},
    {id:"81", game:"3-5, 1 2B, 1 RBI", points:"0.8", OP:"3", day:"2"},
    {id:"21", game:"2-4, 1 2B, 1 BB", points:"0.7", OP:"2", day:"6"},
    {id:"86", game:"2-5, 1 2B, 1 HR, 4 RBI", points:"1.1", OP:"4", day:"6"},
    {id:"26", game:"3-5, 1 RBI", points:"0.7", OP:"2", day:"4"},
    {id:"74", game:"2-3, 1 BB", points:"0.6", OP:"2", day:"4"},
    {id:"69", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"2"},
    {id:"57", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"4"}, 
    //acorns
    {id:"41", game:"4-4, 3 2B, 3 RBI", points:"1.4", OP:"5", day:"3"},
    {id:"77", game:"2-3, 1 HR, 2 RBI, 1 BB", points:"1", OP:"4", day:"2"},
    {id:"42", game:"2-4, 1 HR, 2 RBI", points:"0.8", OP:"3", day:"1"},
    {id:"29", game:"3-5, 1 2B, 1 HR, 3 RBI", points:"1.2", OP:"5", day:"5"},
    {id:"66", game:"2-4, 1 HR, 3 RBI", points:"0.9", OP:"3", day:"4"},
    {id:"18", game:"1-3, 1 HR, 1 RBI, 1 BB", points:"0.7", OP:"2", day:"1"},
    {id:"53", game:"1 IP, 0 H, 0 ER, 0 BB, 1 K", points:"0.7", OP:"7", day:"3"},
    {id:"89", game:"1 IP, 2 H, 0 ER, 0 BB, 3 K", points:"0.7", OP:"7", day:"6"}      

];

export default rawStatsSP1;