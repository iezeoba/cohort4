import React, {Component} from 'react';
import AccountGenerator from "./AccountGenerator.js"
import TransactBar from "./TransactBar.js"
import AccountCard from './AccountCard.js';

class Account extends React.Component {
    render() {
        return (
            <div className="clAcctContainer">
                <AccountGenerator />
                <TransactBar />
                <AccountCard />
            </div>   
        );
    }
}
export default Account