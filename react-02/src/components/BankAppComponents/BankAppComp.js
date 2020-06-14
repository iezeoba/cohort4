import React from 'react';
import AccountGenerator from "./AccountGeneratorComp.js"
import TransactBar from "./TransactBarComp.js"
import AccountCard from './AccountCardComp.js';
import AccountEnquiry from './AccountEnquiry.js';
import { Account, AccountController } from '../../business/Account.js'
//import { AccountController } from '../../business/Account.js'

class BankApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            AllAccountsDetails: [],
            acctName: "",
            acctType: "",
            idTrxFrom: "",
            idTrxAmount: "",
            idEnquiryResult: ""
        }
        this.myAcctController = new AccountController();
        //If not using arrow functions for the methods below, you should bind them to the constructor here as follows eg this.handleCreateAcct = this.handleCreateAcct.bind(this);
    }

    handleCreateAcct = () => {
        if (this.myAcctController.bankaccounts.length === 0) {
            let key = this.myAcctController.createAccount(this.state.acctName, this.state.acctType, 0);
            this.setState({
                AllAccountsDetails: this.myAcctController.bankaccounts
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
                    AllAccountsDetails: this.myAcctController.bankaccounts
                })
                console.log(this.myAcctController.bankaccounts);
            }
        }
    }

    handleAcctNameChange = (e) => {
        this.setState({
            acctName: e.target.value
        })
    }

    handleAcctTypeChange = (e) => {
        this.setState({
            acctType: e.target.value
        })
    }

    handleTrxAmount = (e) => {
        this.setState({
            idTrxAmount: e.target.value
        })
    }

    handleRetrieveAccount = (e) => {
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
                AllAccountsDetails: this.myAcctController.bankaccounts
            })
        }
    }

    handleWithdraw = () => {
        for (var i = 0; i < this.myAcctController.bankaccounts.length; i++) {
            if (this.state.idTrxFrom === this.myAcctController.bankaccounts[i].acctType) {
                this.myAcctController.bankaccounts[i].withdraw(this.state.idTrxAmount)
            }
            this.setState({
                AllAccountsDetails: this.myAcctController.bankaccounts
            })
        }
    }

    handleTotalBalance = () => {
        let total = this.myAcctController.totalBalance()
        this.setState({
            idEnquiryResult: "Your total balance is: " + "$" + total
        })
    }

    handleHighestBalance = () => {
        console.log("clicked highbal")
    }

    handleLowestBalance = () => {
        console.log("clicked lowbal")
    }

    handleDeleteSelectedAcct = () => {
        console.log("clicked delete")
        // this.myAcctController.performDelete("k2");
        // this.setState({
        //     AllAccountsDetails: this.myAcctController.bankaccounts
        // })
    }

    render() {
        return (
            <div className="clAcctContainer">
                <AccountGenerator createAcct={this.handleCreateAcct} acctNameChange={this.handleAcctNameChange} acctTypeChange={this.handleAcctTypeChange} />
                <TransactBar trxFromSelected={this.state.idTrxFrom} TrxAmountInput={this.handleTrxAmount} handleDeposit={this.handleDeposit} handleWithdraw={this.handleWithdraw} />
                <AccountCard details={this.state.AllAccountsDetails} retrieveAccount={this.handleRetrieveAccount} />
                <AccountEnquiry totalBalance={this.state.idEnquiryResult} totalBalanceClick={this.handleTotalBalance} highestBalance={this.handleHighestBalance} lowestBalance={this.handleLowestBalance} deleteSelectedAcct={this.handleDeleteSelectedAcct} />
            </div>
        );
    }
}
export default BankApp