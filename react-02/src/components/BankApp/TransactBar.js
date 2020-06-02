import React from 'react';

class TransactBar extends React.Component {
    render() {
        return (
            <div className="clTransactBar">
                <div id="idTrxBar">
                    <span>Account <select id="dropdownTrxn" name="acctsTrxn"></select>
                        <span className="clSpan"><input id="idAmount" type="number" required placeholder="Enter amount" /></span>
                        <button id="idDeposit">Deposit</button>
                        <button id="idWithdraw">Withdraw</button>
                    </span>
                </div>
            </div>
        );
    }
}
export default TransactBar