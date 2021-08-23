import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';


export const TransList = () => {
    const { transactions } = useContext(GlobalContext);
    
    

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(tran => (<Transaction key={tran.id} transaction={tran} />))}
            </ul>
        </>
    )
}
