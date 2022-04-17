let rawStatsSP1 = [
    //mindfreaks 
    {id:"11", game:"3-5, 1 3B, 1 HR, 6 RBI", points:"1.6", OP:"5", day:"6"},
    {id:"12", game:"5-6, 1 HR, 2 RBI, 2 SB", points:"1.6", OP:"5", day:"8"},
    {id:"36", game:"2-3, 2 HR, 3 RBI, 2 BB, 1 SB", points:"1.6", OP:"5", day:"9"},
    {id:"35", game:"3-5, 1 HR, 3 RBI, 1 SB", points:"1.2", OP:"5", day:"9"},
    {id:"0", game:"2-5, 2 HR, 3 RBI", points:"1.1", OP:"4", day:"9"},
    {id:"72", game:"2-4, 1 HR, 2 RBI, 1 BB", points:"1", OP:"4", day:"2"},
    {id:"71", game:"6.2 IP, 4 H, 0 ER, 0 BB, 6 K", points:"0.892307692307692", OP:"8", day:"8"},
    {id:"90", game:"4.2 IP, 4 H, 1 ER, 1 BB, 9 K", points:"0.788524590163935", OP:"7", day:"1"},
    //Manatees
    {id:"68", game:"3-4, 1 2B, 1 HR, 3 RBI", points:"1.2", OP:"5", day:"7"},
    {id:"39", game:"2-4, 1 HR, 3 RBI, 1 BB", points:"1.1", OP:"4", day:"8"},
    {id:"75", game:"2-4, 1 2B, 2 RBI, 1 BB", points:"0.9", OP:"3", day:"4"},
    {id:"44", game:"2-3, 1 HR, 5 RBI, 1 BB", points:"1.3", OP:"5", day:"1"},
    {id:"56", game:"1-2, 1 HR, 3 RBI, 2 BB", points:"1.1", OP:"4", day:"2"},
    {id:"91", game:"2-5, 2 HR, 2 RBI", points:"1", OP:"4", day:"4"},
    {id:"87", game:"7 IP, 0 H, 0 ER, 0 BB, 13 K", points:"0.985714285714286", OP:"9", day:"7"},
    {id:"80", game:"8 IP, 4 H, 1 ER, 0 BB, 7 K", points:"0.7875", OP:"7", day:"7"},
    //Aliens
    {id:"25", game:"1-1, 4 BB, 1 SB", points:"1.1", OP:"4", day:"1"},
    {id:"22", game:"3-4, 1 2B, 2 RBI, 1 SB", points:"1.", OP:"4", day:"4"},
    {id:"10", game:"3-4, 1 HR, 1 RBI", points:"0.9", OP:"3", day:"4"},
    {id:"1", game:"2-3, 1 HR, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"6"},
    {id:"46", game:"2-4, 2 2B, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"7"},
    {id:"37", game:"2-5, 1 RBI, 1 SB", points:"0.6", OP:"2", day:"5"},
    {id:"13", game:"4.2 IP, 2 H, 0 ER, 0 BB, 4 K", points:"0.837704918032787", OP:"8", day:"1"},
    {id:"61", game:"6 IP, 0 H, 0 ER, 4 BB, 3 K", points:"0.783333333333333", OP:"7", day:"1"},
    //Doodles
    {id:"4", game:"4-4, 1 2B, 3 HR, 4 RBI", points:"1.9", OP:"5", day:"7"},
    {id:"64", game:"2-5, 1 HR, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"6"},
    {id:"40", game:"1-4, 1 HR, 2 RBI", points:"0.6", OP:"2", day:"2"},
    {id:"19", game:"2-5, 2 HR, 4 RBI", points:"1.2", OP:"5", day:"2"},
    {id:"52", game:"2-3, 1 HR, 2 RBI, 2 BB", points:"1.2", OP:"5", day:"8"},
    {id:"76", game:"2-4, 2 HR, 2 RBI", points:"1", OP:"4", day:"6"},
    {id:"67", game:"6.1 IP, 5 H, 1 ER, 0 BB, 6 K", points:"0.780110497237569", OP:"7", day:"7"},
    {id:"79", game:"7 IP, 3 H, 1 ER, 0 BB, 5 K", points:"0.771428571428571", OP:"7", day:"3"},
    //megabytes
    {id:"62", game:"3-5, 1 2B, 1 HR, 3 RBI, 1 BB", points:"1.4", OP:"5", day:"6"},
    {id:"81", game:"3-5, 1 2B, 1 RBI", points:"0.8", OP:"3", day:"2"},
    {id:"21", game:"2-4, 1 2B, 1 BB", points:"0.7", OP:"2", day:"6"},
    {id:"86", game:"2-5, 1 2B, 1 HR, 4 RBI", points:"1.1", OP:"4", day:"6"},
    {id:"74", game:"2-4, 1 2B, 1 HR, 1 RBI, 1 BB", points:"1", OP:"4", day:"7"},
    {id:"2", game:"2-4, 1 HR, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"7"},
    {id:"69", game:"0.1 IP, 0 H, 0 ER, 1 BB, 1 K", points:"6", OP:"10", day:"9"},
    {id:"57", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"4"},
    //acorns
    {id:"78", game:"3-5, 2 2B, 1 HR, 5 RBI", points:"1.5", OP:"5", day:"7"},
    {id:"41", game:"4-4, 3 2B, 3 RBI", points:"1.4", OP:"5", day:"3"},
    {id:"77", game:"2-3, 1 HR, 2 RBI, 1 BB", points:"1", OP:"4", day:"2"},
    {id:"29", game:"3-5, 1 2B, 1 HR, 3 RBI", points:"1.2", OP:"5", day:"5"},
    {id:"66", game:"2-4, 1 HR, 3 RBI", points:"0.9", OP:"3", day:"4"},
    {id:"18", game:"1-3, 1 HR, 1 RBI, 1 BB", points:"0.7", OP:"2", day:"1"},
    {id:"17", game:"7 IP, 3 H, 0 ER, 1 BB, 8 K", points:"0.857142857142857", OP:"8", day:"7"},
    {id:"53", game:"1 IP, 0 H, 0 ER, 0 BB, 1 K", points:"0.7", OP:"7", day:"3"}    

];

export default rawStatsSP1;