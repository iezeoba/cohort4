import React from 'react';
//import React, {Component} from 'react'; //Alternative to line 1. Then no need to use 'React.' on line 5, just Component


class AccountEnquiry extends React.Component {
    render() {
        return (
            <div className="clAccountEnquiry">
                <div id="idAcctEnquiry">
                    {/* <span className="clButtons">*/}
                    <button id="idTotalBal" className="clBtn" onClick={this.props.totalBalanceClick}>Total Balance</button>
                    <button id="idHighestBal" className="clBtn" onClick={this.props.highestBalance}>Highest Balance</button>
                    <button id="idLowestBal" className="clBtn" onClick={this.props.lowestBalance}>Lowest Balance</button>
                    <button id="idDeleteAcct" className="clBtn" onClick={this.props.deleteSelectedAcct}>Delete Account</button>
                    {/* </span> */}
                    <p id="idEnquiryResult">{this.props.totalBalance}</p>
                </div>
            </div>
        );
    }
}
export default AccountEnquiry