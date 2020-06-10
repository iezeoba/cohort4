import React from 'react';
import AccountGenerator from "./AccountGeneratorComp.js"
import TransactBar from "./TransactBarComp.js"
import AccountCard from './AccountCardComp.js';
import { Account, AccountController } from '../../business/Account.js'
//import { AccountController } from '../../business/Account.js'

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
        //this.newAccount = new Account();
        this.myAcctController = new AccountController();
    }

    handleCreateAcct = () => {
        if (this.myAcctController.bankaccounts.length === 0) {
            let key = this.myAcctController.createAccount(this.state.acctName, this.state.acctType, 0);
            this.setState({
                acctDetail: this.myAcctController.bankaccounts
            })
            console.log(this.myAcctController.bankaccounts);
        }

        else {
            if (this.myAcctController.accountTypeExists(this.state.acctType)) {
                return

            }
            else if (this.myAcctController.accountTypeExists(this.state.acctType) === false) {
                this.myAcctController.createAccount(this.state.acctName, this.state.acctType, 0)
                this.setState({
                    acctDetail: this.myAcctController.bankaccounts
                })
                console.log(this.myAcctController.bankaccounts);
            }
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

    handleTrxAmount = (e) => {
        this.setState({
            idTrxAmount: e.target.value
        })
    }

    handleGetAccount = (e) => {
        this.setState({
            idTrxFrom: e.target.id
        })

    }

    handleDeposit = () => {
        for (var i = 0; i < this.myAcctController.bankaccounts.length; i++) {
            if (this.state.idTrxFrom === this.myAcctController.bankaccounts[i].acctType) {
                this.myAcctController.bankaccounts[i].deposit(this.state.idTrxAmount)
            }
            this.setState({
                acctDetail: this.myAcctController.bankaccounts
            })
        }
    }

    handleWithdraw = () => {
        for (var i = 0; i < this.myAcctController.bankaccounts.length; i++) {
            if (this.state.idTrxFrom === this.myAcctController.bankaccounts[i].acctType) {
                this.myAcctController.bankaccounts[i].withdraw(this.state.idTrxAmount)
            }
            this.setState({
                acctDetail: this.myAcctController.bankaccounts
            })
        }
    }

    render() {
        return (
            <div className="clAcctContainer">
                <AccountGenerator handleCreateAcct={this.handleCreateAcct} acctNameChange={this.handleAcctName} acctTypeChange={this.handleAcctType} />
                <TransactBar trxFromSelected={this.state.idTrxFrom} TrxAmountInput={this.handleTrxAmount} handleDeposit={this.handleDeposit} handleWithdraw={this.handleWithdraw} />
                <AccountCard details={this.state.acctDetail} handleGetAccount={this.handleGetAccount} />
            </div>
        );
    }
}
export default BankApp