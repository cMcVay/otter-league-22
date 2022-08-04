let rawStatsSP13 = [
    //mindfreaks 
    {id:"48", game:"3-5, 1 HR, 3 RBI", points:"1.1", OP:"4", day:"4"},
    {id:"36", game:"3-4, 1 HR, 2 RBI", points:"1", OP:"4", day:"4"},
    {id:"12", game:"3-4, 1 2B, 1 HR, 1 RBI", points:"1", OP:"4", day:"8"},
    {id:"35", game:"3-5, 1 3B, 1 HR, 3 RBI", points:"1.3", OP:"5", day:"3"},
    {id:"0", game:"2-2, 1 3B, 2 BB", points:"1", OP:"4", day:"5"},
    {id:"72", game:"2-5, 1 HR, 3 RBI", points:"0.9", OP:"3", day:"2"},
    {id:"47", game:"6 IP, 7 H, 0 ER, 0 BB, 6 K", points:"0.783333333333333", OP:"7", day:"8"},
    {id:"23", game:"7 IP, 5 H, 1 ER, 0 BB, 7 K", points:"0.771428571428571", OP:"7", day:"8"},
    {id:"83", game:"7.2 IP, 5 H, 1 ER, 1 BB, 5 K", points:"0.734782608695652", OP:"7", day:"3"},
    //Manatees
    {id:"8", game:"3-4, 1 2B, 3 RBI, 1 SB", points:"1.1", OP:"4", day:"2"},
    {id:"75", game:"2-5, 1 HR, 3 RBI", points:"0.9", OP:"3", day:"7"},
    {id:"39", game:"3-3, 1 2B, 1 RBI", points:"0.8", OP:"3", day:"2"},
    {id:"91", game:"2-3, 1 HR, 1 RBI, 1 BB, 1 SB", points:"1", OP:"4", day:"4"},
    {id:"56", game:"2-4, 1 2B, 1 HR, 2 RBI", points:"0.9", OP:"3", day:"8"},
    {id:"15", game:"1-3, 1 RBI, 2 BB", points:"0.7", OP:"2", day:"7"},
    {id:"97", game:"7 IP, 2 H, 0 ER, 0 BB, 10 K", points:"0.914285714285714", OP:"9", day:"5"},
    {id:"51", game:"8 IP, 1 H, 0 ER, 1 BB, 10 K", points:"0.9", OP:"9", day:"7"},
    {id:"32", game:"9 IP, 6 H, 0 ER, 1 BB, 3 K", points:"0.855555555555556", OP:"8", day:"8"},
    //Aliens
    {id:"25", game:"2-3, 1 HR, 3 RBI, 1 BB", points:"1.1", OP:"4", day:"7"},
    {id:"10", game:"1-3, 1 HR, 2 RBI, 1 BB", points:"0.8", OP:"3", day:"1"},
    {id:"70", game:"1-3, 1 HR, 2 RBI, 1 BB", points:"0.8", OP:"3", day:"6"},
    {id:"1", game:"1-1, 1 HR, 1 RBI, 3 BB, 1 SB", points:"1.2", OP:"5", day:"6"},
    {id:"46", game:"4-5, 2 RBI", points:"1", OP:"4", day:"5"},
    {id:"73", game:"3-5, 1 2B, 2 RBI", points:"0.9", OP:"3", day:"2"},
    {id:"109", game:"7 IP, 4 H, 0 ER, 2 BB, 5 K", points:"0.785714285714286", OP:"7", day:"5"},
    {id:"108", game:"6 IP, 4 H, 1 ER, 1 BB, 7 K", points:"0.766666666666667", OP:"7", day:"5"},
    {id:"13", game:"7 IP, 5 H, 1 ER, 2 BB, 8 K", points:"0.757142857142857", OP:"7", day:"3"},
    //Doodles 
    {id:"55", game:"1-2, 1 HR, 1 RBI, 2 BB", points:"0.9", OP:"3", day:"4"},
    {id:"40", game:"4-4, 1 2B", points:"0.9", OP:"3", day:"8"},
    {id:"64", game:"2-4, 1 HR, 2 RBI", points:"0.8", OP:"3", day:"4"},
    {id:"52", game:"3-4, 1 HR, 1 RBI, 1 BB", points:"1.1", OP:"4", day:"8"},
    {id:"28", game:"1-2, 1 RBI, 3 BB", points:"0.9", OP:"3", day:"1"},
    {id:"19", game:"2-4, 1 2B, 2 RBI", points:"0.7", OP:"2", day:"8"},
    {id:"43", game:"6 IP, 6 H, 1 ER, 1 BB, 8 K", points:"0.75", OP:"7", day:"5"},
    {id:"79", game:"6 IP, 6 H, 4 ER, 2 BB, 4 K", points:"0.466666666666667", OP:"4", day:"5"},
    {id:"16", game:"2.2 IP, 5 H, 4 ER, 4 BB, 3 K", points:"0", OP:"0", day:"3"},
    //megabytes
    {id:"81", game:"1-2, 1 HR, 3 RBI, 2 BB, 2 SB", points:"1.3", OP:"5", day:"2"},
    {id:"21", game:"1-3, 1 2B, 2 RBI, 2 BB, 1 SB", points:"1", OP:"4", day:"2"},
    {id:"50", game:"1-3, 2 BB", points:"0.6", OP:"2", day:"6"},
    {id:"2", game:"3-5, 2 HR, 6 RBI", points:"1.6", OP:"5", day:"3"},
    {id:"86", game:"2-4, 1 HR, 2 RBI, 1 BB", points:"1", OP:"4", day:"6"},
    {id:"74", game:"1-4, 1 2B, 2 RBI, 1 BB", points:"0.7", OP:"2", day:"2"},
    {id:"57", game:"1 IP, 1 H, 0 ER, 0 BB, 3 K", points:"0.8", OP:"8", day:"3"},
    {id:"9", game:"7 IP, 5 H, 0 ER, 2 BB, 6 K", points:"0.785714285714286", OP:"7", day:"1"},
    {id:"99", game:"5 IP, 5 H, 2 ER, 2 BB, 5 K", points:"0.5", OP:"5", day:"4"},
    //acorns 
    {id:"113", game:"3-4, 2 2B, 1 HR, 3 RBI", points:"1.3", OP:"5", day:"3"},
    {id:"78", game:"2-3, 1 2B, 1 HR, 1 RBI, 2 BB", points:"1.2", OP:"5", day:"6"},
    {id:"42", game:"2-4, 1 2B, 1 HR, 3 RBI", points:"1", OP:"4", day:"2"},
    {id:"18", game:"3-3, 1 HR, 2 RBI, 2 BB", points:"1.4", OP:"5", day:"3"},
    {id:"6", game:"3-5, 1 2B, 1 HR, 3 RBI", points:"1.2", OP:"5", day:"7"},
    {id:"54", game:"2-4, 1 2B, 1 HR, 1 RBI", points:"0.8", OP:"3", day:"1"},
    {id:"89", game:"1 IP, 0 H, 0 ER, 0 BB, 3 K", points:"0.9", OP:"9", day:"3"},
    {id:"103", game:"7 IP, 3 H, 1 ER, 2 BB, 6 K", points:"0.757142857142857", OP:"7", day:"3"},
    {id:"17", game:"6 IP, 5 H, 3 ER, 0 BB, 11 K", points:"0.7", OP:"7", day:"1"}


];

export default rawStatsSP13;