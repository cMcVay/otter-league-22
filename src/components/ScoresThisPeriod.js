import React, {useState} from 'react';
import ScoringPeriod from './stats/ScoringPeriod';
import { finalTeams } from './AddTotals';
import periodBreakdown from './periodBreakdown';
import rawSchedule from './RawSchedule';
import { periodNumber } from './ScoringDay';
import { Link } from 'react-router-dom';

function ScoresThisPeriod() {
    const [currentPeriod, setCurrentPeriod] = useState(periodNumber);

    function backWeek () {
        (currentPeriod-1 === 0 ? setCurrentPeriod(1) : setCurrentPeriod(currentPeriod-1));
    }
    function nextWeek () {
        (currentPeriod+1 === 21 ? setCurrentPeriod(20) : setCurrentPeriod(currentPeriod+1));
    }
    return (
        <div className="scoreBug">
            <div >
            <button onClick={backWeek} style={{display: 'inline-block'}}> &#60; </button>
            <h2 style={{display: 'inline-block', marginTop: 5, marginRight: 10, marginBottom: 5, marginLeft: 10}}>
                Scoring Period {currentPeriod}
            </h2>
            <button onClick={nextWeek} style={{display: 'inline-block'}}> &#62; </button>
            <h3 style={{marginTop: 5 }}>{periodBreakdown[currentPeriod-1].start}-{periodBreakdown[currentPeriod-1].end}</h3>
            </div>
            {[...rawSchedule][currentPeriod-1].map(matchup => {
                let away = [...finalTeams].find(element => element.id === matchup.away);
                let home = [...finalTeams].find(element => element.id === matchup.home);
                return(<>
                <table className="fullscore">
                <thead>
                
                    <th></th>
                    <th>TOTAL</th>
                    <th>OP</th>
                    <th>PF</th>
                </thead>
                <tbody>
                <tr>
                    <td><img src={away.img} alt="away logo" style={{width: '35px', height: '35px'}}/></td>
                    <td><b>{away.TOT[currentPeriod-1]}</b></td>
                    <td>{away.OP[currentPeriod-1]}</td>
                    <td>{away.PF[currentPeriod-1]}</td>
                </tr>
                <tr>
                    <td><img src={home.img} alt="home logo" style={{width: '35px', height: '35px'}}/></td>
                    <td><b>{home.TOT[currentPeriod-1]}</b></td>
                    <td>{home.OP[currentPeriod-1]}</td>
                    <td>{home.PF[currentPeriod-1]}</td>
                </tr>
                <tr>
                    <td colSpan="4"><Link to={`/BoxScore/${currentPeriod - 1}/${home.id}`} >Boxscore</Link></td>
                </tr>
                </tbody>
                
            </table>
            </>)
            })}
        </div>
    );
};

export default ScoresThisPeriod;