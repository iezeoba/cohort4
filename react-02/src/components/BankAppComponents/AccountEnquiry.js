import React from 'react';
//import React, {Component} from 'react'; //Alternative to line 1. Then no need to use 'React.' on line 5, just Component


class AccountEnquiry extends React.Component {
    render() {
        return (
            <div className="clAccountEnquiry">
                <div id="idAcctEnquiry">
                    {/* <span className="clSpan">
                        <input id="idTrxFrom" placeholder="Select Account" value={this.props.trxFromSelected} readOnly />
                        <input id="idTrxAmount" type="number" required placeholder="Enter amount" onChange={this.props.TrxAmountInput} />
                    </span> */}
                    <span className="clButtons"><button id="idTotalBal" className="clBtn" onClick={this.props.totalBalance}>Total Balance</button>
                        <button id="idHighestBal" className="clBtn" onClick={this.props.handleWithdraw}>Highest Balance</button>
                        <button id="idLowestBal" className="clBtn" onClick={this.props.handleWithdraw}>Lowest Balance</button>
                        <button id="idDeleteAcct" className="clBtn" onClick={this.props.handleWithdraw}>Delete Account</button></span>
                    <span><p className="clEnquiryResult">placeholder</p></span>
                </div>
            </div>
        );
    }
}
export default AccountEnquiry