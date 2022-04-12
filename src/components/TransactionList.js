import React from 'react';
import Transactions from './Transactions';




function TransactionList({teamkey}) {
    return (
        <>
        <h4>Transactions</h4>
        <ul>
        {[...Transactions].filter(move => move.teamID === teamkey).map(move => {
            <li>{move.added} has been added to active roster, replacing the injured {move.injured} - {move.date}</li>
        })}
        </ul>
        </>
    )
};

export default TransactionList;