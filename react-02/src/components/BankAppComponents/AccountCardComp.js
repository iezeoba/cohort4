import React from 'react';

class AccountCard extends React.Component {

    render() {
        const accountItem = this.props.details.map((items, index) =>
            <AccountList key={index} value={items} handleGetAccount={this.props.handleGetAccount} />
        )
        return (
            <div className="clAcctCard">
                {accountItem}
            </div>
        );
    }
}
export default AccountCard

function AccountList(props) {
    return (
        <div id={props.value.acctType} className="clAcctInfoCard" onClick={props.handleGetAccount}>
            <p>Name: {props.value.name}</p>
            <p>Type: {props.value.acctType}</p>
            <p>Balance: {props.value.balance}</p>
        </div>
    )
}
