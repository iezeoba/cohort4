import React from 'react';

class TransactBar extends React.Component {
    render() {
        return (
            <div className="clTransactBar">
                <div id="idTrxBar">
                    {/* z<span>Account <select id="dropdownTrxn" name="acctsTrxn"></select> */}
                    <span className="clSpan">
                        <input id="idTrxFrom" placeholder="Select Account" value={this.props.trxFromSelected} readOnly />
                        <input id="idTrxAmount" type="number" required placeholder="Enter Amount" onChange={this.props.TrxAmountInput} />
                    </span>
                    <button id="idDeposit" onClick={this.props.handleDeposit}>Deposit</button>
                    <button id="idWithdraw" onClick={this.props.handleWithdraw}>Withdraw</button>
                    {/* </span> */}
                </div>
            </div>
        );
    }
}
export default TransactBar