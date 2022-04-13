import React from 'react';
import Transactions from './Transactions';
import { finalTeams } from './AddTotals';




function TransactionList() {


    return (
        <>
        <h4>Transactions</h4>
        <ul>
        {[...Transactions].map(move => (
            <li>{[...finalTeams].find(element => element.id === move.teamID).abbreviation} - {move.added} has been added to active roster, replacing the injured {move.injured} - {move.date}</li>
    ))}
        </ul>
        </>
    )
};

export default TransactionList;