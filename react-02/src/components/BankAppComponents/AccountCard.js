import React from 'react';

class AccountCard extends React.Component {

    render() {
        const accountItem = this.props.details.map((items, index) =>
            <AccountList key={index} value={items} />
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
    const accountType = Object.keys(props.value)
    return (
        <div className="clAcctInfoCard">
            <p>Name: {props.value.name}</p>
            <p>Type: {accountType[1]}</p>
            <p>Balance: {props.value[accountType[1]]}</p>
        </div>
    )
}
