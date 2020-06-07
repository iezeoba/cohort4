import React from 'react';
import AccountGenerator from "./AccountGeneratorComp.js"
import TransactBar from "./TransactBarComp.js"
import AccountCard from './AccountCardComp.js';
import { Account } from '../../business/Account.js'

class BankApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            acctDetail: [],
            acctName: "",
            acctType: "",
            idTrxFrom: "",
            idTrxAmount: ""
        }
        this.newAccount = new Account();
    }

    handleCreateAcct = () => {
        console.log("creating account", this.state.acctName, this.state.acctType);
        // let key = myCtrl.createAccount("David Chan", "Savings", 200);

        // if (this.newAccount.accountTypeExists(this.state.acctType)) {
        //     return
        // }
        // else if (this.newAccount.accountTypeExists(this.state.acctType) === false) {
        //     this.newAccount.createAccount(this.state.acctName, this.state.acctType)
        //     this.setState({
        //         acctDetail: this.newAccount.allAccounts
        //     })
        //     console.log(this.newAccount.allAccounts);
        // } else {
        //     this.newAccount.createAccount(this.state.acctName, this.state.acctType)
        //     this.setState({
        //         acctDetail: this.newAccount.allAccounts
        //     })
        //     console.log(this.newAccount.allAccounts);
        // }
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

    handleTrxFrom = (e) => {
        this.setState({
            idTrxFrom: e.target.value
        })
    }

    handleTrxAmount = (e) => {
        this.setState({
            idTrxAmount: e.target.value
        })
    }

    // handleDeposit(account) {
    //     if (account === this.state.idTrxFrom) {
    //         this.newAccount.idTrxFrom.deposit(this.state.idTrxAmount)
    //         this.setState({
    //             acctDetail: this.newAccount.allAccounts
    //         })
    //     }
    // }

    handleDeposit = () => {
        if (this.newAccount.accountTypeExists(this.state.idTrxFrom)) {
            this.newAccount.deposit(this.state.idTrxAmount)
            this.setState({
                acctDetail: this.newAccount.allAccounts
            })
            console.log(this.newAccount.allAccounts);
        }
    }
    handleWithdraw() {

    }

    render() {
        return (
            <div className="clAcctContainer">
                <AccountGenerator handleCreateAcct={this.handleCreateAcct} acctNameChange={this.handleAcctName} acctTypeChange={this.handleAcctType} />
                <TransactBar trxFromSelected={this.handleTrxFrom} TrxAmountInput={this.handleTrxAmount} handleDeposit={this.handleDeposit} handleWithdraw={this.handleWithdraw} />
                <AccountCard details={this.state.acctDetail} />
            </div>
        );
    }
}
export default BankApp