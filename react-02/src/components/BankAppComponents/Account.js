import React from 'react';
import AccountGenerator from "./AccountGenerator.js"
import TransactBar from "./TransactBar.js"
import AccountCard from './AccountCard.js';
import { Account } from './Account_Import.js'

class BankApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            acctDetail: [],
            acctName: "",
            acctType: ""
        }
        this.newAccount = new Account();
    }
    handleCreateAcct = () => {
        if (this.newAccount.accountTypeExists(this.state.acctType)) {
            return
        }
        else if (this.newAccount.accountTypeExists(this.state.acctType) === false) {
            this.newAccount.createAccount(this.state.acctName, this.state.acctType)
            this.setState({
                acctDetail: this.newAccount.allAccounts
            })
            console.log(this.newAccount.allAccounts);
            // this.newAccount.updateAccount(this.state.acctName, this.state.acctType);
        } else {
            this.newAccount.createAccount(this.state.acctName, this.state.acctType)
            this.setState({
                acctDetail: this.newAccount.allAccounts
            })
            console.log(this.newAccount.allAccounts);
        }
    }

    handleAcctName = (e) => {
        this.setState({
            acctName: e.target.value
        })

    }

    handleAcctType = (e) => {
        this.setState({
            acctType: e.target.value
        })
    }

    render() {
        return (
            <div className="clAcctContainer">
                <AccountGenerator handleCreateAcct={this.handleCreateAcct} acctNameChange={this.handleAcctName} acctTypeChange={this.handleAcctType} />
                <TransactBar />
                <AccountCard details={this.state.acctDetail} />
            </div>
        );
    }
}
export default BankApp