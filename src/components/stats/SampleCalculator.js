import React, {useState} from "react";

function SampleCalculator() { 
    const [outs, setOuts] = useState(0);
    const [hits, setHits] = useState(0);
    const [ER, setERs] = useState(0);
    const [walks, setWalks] = useState(0);
    const [strikeouts, setStrikeouts] = useState(0);
    const [singles, setSingles] = useState(0);
    const [doubles, setDoubles] = useState(0);
    const [triples, setTriples] = useState(0);
    const [homers, setHomers] =useState(0);
    const [baseonballs, setBaseonballs] = useState(0);
    const [rbis, setRbis] = useState(0);
    const [steals, setSteals] = useState(0);

    function getPitchingOP(a, b, c, d, e) {
        let q =Math.floor(((((a*0.2)-(b*0.1)-(c*0.4)-(d*0.1)+(e*0.1))/(a/3)) + (a > 23 ? .3 : a > 17 ? .2 : a > 8 ? .1 : 0))*10)
        return (
            q > 10 ? 10: q ? q : 0
        )
    }
    function getHittingOP(a, b, c, d, e, f, g) {
        let q =(a*.2)+(b*.3)+(c*.4)+(d*.4)+(e*.2)+(f*.1)+(g*.1);
        return (
            q > 1.1 ? 5 : q > 0.9 ? 4 : q > 0.7 ? 3 : q > 0.5 ? 2 : q > 0.3 ? 1 : 0
        )
    }


    return (
        <div>
            <h2>Pitching Otter Points Calculator</h2>
            <label for={"Outs"}>Outs:</label>
            <input id={"Outs"} onChange={e => setOuts(e.target.value)} value={outs} type={"number"} placeholder={"0"} step={"1"} min={"0"} max={"27"}></input>
            <label for={"Hits"}>H:</label>
            <input id={"Hits"} onChange={e => setHits(e.target.value)} value={hits} type={"number"} placeholder={"0"} step={"1"} min={"0"} max={"15"}></input>
            <label for={"ER"}>ER:</label>
            <input id={"ER"} onChange={e => setERs(e.target.value)} value={ER}type={"number"} placeholder={"0"} step={"1"} min={"0"} max={"15"}></input>
            <label for={"BB"}>BB:</label>
            <input id={"BB"} onChange={e => setWalks(e.target.value)} value={walks}type={"number"} placeholder={"0"} step={"1"} min={"0"} max={"15"}></input>
            <label for={"K"}>K:</label>
            <input id={"K"} onChange={e => setStrikeouts(e.target.value)} value={strikeouts}type={"number"} placeholder={"0"} step={"1"} min={"0"} max={"27"}></input>
            <h2>{getPitchingOP(outs, hits, ER, walks, strikeouts)} OP</h2>
            <br/>
            <h2>Hitting Otter Points Calculator</h2>
            <label for={"Singles"}>1B:</label>
            <input id={"Singles"} onChange={e => setSingles(e.target.value)} value={singles} type={"number"} placeholder={"0"} step={"1"} min={"0"} max={"8"}></input>
            <label for={"Doubles"}>2B:</label>
            <input id={"Doubles"} onChange={e => setDoubles(e.target.value)} value={doubles} type={"number"} placeholder={"0"} step={"1"} min={"0"} max={"8"}></input>
            <label for={"Triples"}>3B:</label>
            <input id={"Triples"} onChange={e => setTriples(e.target.value)} value={triples} type={"number"} placeholder={"0"} step={"1"} min={"0"} max={"8"}></input>
            <label for={"Homers"}>HR:</label>
            <input id={"Homers"} onChange={e => setHomers(e.target.value)} value={homers} type={"number"} placeholder={"0"} step={"1"} min={"0"} max={"8"}></input>
            <label for={"Baseonballs"}>BB:</label>
            <input id={"Baseonballs"} onChange={e => setBaseonballs(e.target.value)} value={baseonballs} type={"number"} placeholder={"0"} step={"1"} min={"0"} max={"8"}></input>
            <label for={"Rbis"}>RBI:</label>
            <input id={"Rbis"} onChange={e => setRbis(e.target.value)} value={rbis} type={"number"} placeholder={"0"} step={"1"} min={"0"} max={"18"}></input>
            <label for={"Steals"}>SB:</label>
            <input id={"Steals"} onChange={e => setSteals(e.target.value)} value={steals} type={"number"} placeholder={"0"} step={"1"} min={"0"} max={"8"}></input>
            <h2>{getHittingOP(singles,doubles,triples,homers,baseonballs,rbis,steals)} OP</h2>
        </div>
    )
};

export default SampleCalculator;