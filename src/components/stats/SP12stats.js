let rawStatsSP12 = [
    //mindfreaks 
    {id:"11", game:"2-4, 2 HR, 5 RBI", points:"1.3", OP:"5", day:"2"},
    {id:"48", game:"2-4, 1 HR, 1 RBI, 1 BB, 1 SB", points:"1", OP:"4", day:"3"},
    {id:"36", game:"1-3, 2 BB", points:"0.6", OP:"2", day:"2"},
    {id:"104", game:"2-5, 1 HR, 5 RBI", points:"1.1", OP:"4", day:"1"},
    {id:"35", game:"1-4, 1 BB, 1 SB", points:"0.5", OP:"1", day:"2"},
    {id:"72", game:"1-5, 1 HR, 1 RBI", points:"0.5", OP:"1", day:"2"},
    {id:"83", game:"6 IP, 6 H, 0 ER, 0 BB, 10 K", points:"0.866666666666667", OP:"8", day:"2"},
    {id:"47", game:"7 IP, 5 H, 1 ER, 0 BB, 8 K", points:"0.785714285714286", OP:"7", day:"2"},
    //Manatees
    {id:"8", game:"2-4, 2 HR, 3 RBI", points:"1.1", OP:"4", day:"2"},
    {id:"102", game:"2-5, 1 HR, 2 RBI", points:"0.8", OP:"3", day:"3"},
    {id:"68", game:"2-5, 1 HR, 1 RBI", points:"0.7", OP:"2", day:"1"},
    {id:"56", game:"2-4, 1 2B, 1 HR, 3 RBI", points:"1", OP:"4", day:"1"},
    {id:"91", game:"2-3, 1 BB", points:"0.6", OP:"2", day:"1"},
    {id:"44", game:"1-3, 1 BB", points:"0.4", OP:"1", day:"1"},
    {id:"87", game:"8 IP, 1 H, 0 ER, 0 BB, 6 K", points:"0.8625", OP:"8", day:"1"},
    {id:"32", game:"8 IP, 4 H, 2 ER, 2 BB, 12 K", points:"0.775", OP:"7", day:"1"},
    {id:"63", game:"6.1 IP, 7 H, 2 ER, 1 BB, 7 K", points:"0.657894736842105", OP:"6", day:"3"},
    //Aliens
    {id:"10", game:"3-5, 3 RBI", points:"0.9", OP:"3", day:"1"},
    {id:"25", game:"2-5, 1 HR, 3 RBI", points:"0.9", OP:"3", day:"2"},
    {id:"70", game:"1-4, 1 HR, 3 RBI", points:"0.7", OP:"2", day:"2"},
    {id:"58", game:"2-4, 1 HR, 1 RBI, 1 BB, 1 SB", points:"1", OP:"4", day:"2"},
    {id:"1", game:"0-2, 1 RBI, 3 BB", points:"0.7", OP:"2", day:"1"},
    {id:"46", game:"1-3, 1 2B, 1 BB", points:"0.5", OP:"1", day:"2"},
    {id:"108", game:"7 IP, 1 H, 0 ER, 2 BB, 8 K", points:"0.871428571428572", OP:"8", day:"3"},
    {id:"34", game:"1 IP, 0 H, 0 ER, 0 BB, 1 K", points:"0.7", OP:"7", day:"1"},
    {id:"61", game:"7 IP, 5 H, 3 ER, 2 BB, 9 K", points:"0.657142857142857", OP:"6", day:"1"},
    //Doodles 
    {id:"4", game:"3-4, 1 2B, 1 RBI, 1 BB", points:"1", OP:"4", day:"2"},
    {id:"64", game:"4-4, 2 2B", points:"1", OP:"4", day:"3"},
    {id:"95", game:"1-2, 1 3B, 1 RBI, 1 BB", points:"0.7", OP:"2", day:"1"},
    {id:"19", game:"2-4, 1 HR, 1 RBI", points:"0.7", OP:"2", day:"3"},
    {id:"110", game:"2-4, 1 HR, 1 RBI", points:"0.7", OP:"2", day:"3"},
    {id:"28", game:"1-3, 2 BB", points:"0.6", OP:"2", day:"1"},
    {id:"16", game:"6.2 IP, 6 H, 3 ER, 0 BB, 12 K", points:"0.71", OP:"7", day:"1"},
    //megabytes
    {id:"38", game:"3-3, 1 RBI, 1 BB", points:"0.9", OP:"3", day:"2"},
    {id:"21", game:"2-4, 1 2B, 1 HR, 1 RBI", points:"0.8", OP:"3", day:"2"},
    {id:"50", game:"2-4, 1 HR, 2 RBI", points:"0.8", OP:"3", day:"2"},
    {id:"2", game:"3-3, 2 HR, 3 RBI, 1 BB", points:"1.5", OP:"5", day:"2"},
    {id:"26", game:"2-5, 1 HR, 3 RBI", points:"0.9", OP:"3", day:"1"},
    {id:"45", game:"2-5, 1 2B", points:"0.5", OP:"1", day:"1"},
    {id:"9", game:"6.1 IP, 8 H, 2 ER, 1 BB, 11 K", points:"0.705263157894737", OP:"7", day:"2"},
    //acorns 
    {id:"65", game:"1-4, 1 HR, 2 RBI, 1 BB", points:"0.8", OP:"3", day:"1"},
    {id:"78", game:"1-4, 1 2B, 2 RBI", points:"0.5", OP:"1", day:"2"},
    {id:"42", game:"1-4", points:"0.2", OP:"0", day:"1"},
    {id:"54", game:"3-4, 1 HR, 1 RBI", points:"0.9", OP:"3", day:"1"},
    {id:"29", game:"2-4, 1 BB", points:"0.6", OP:"2", day:"1"},
    {id:"6", game:"0-4, 1 BB", points:"0.2", OP:"0", day:"1"},
    {id:"89", game:"1 IP, 0 H, 0 ER, 0 BB, 2 K", points:"0.8", OP:"8", day:"2"},
    {id:"5", game:"7 IP, 4 H, 2 ER, 0 BB, 12 K", points:"0.8", OP:"8", day:"3"},
    {id:"30", game:"5.2 IP, 5 H, 2 ER, 5 BB, 4 K", points:"0.452941176470588", OP:"4", day:"1"},

];

export default rawStatsSP12;