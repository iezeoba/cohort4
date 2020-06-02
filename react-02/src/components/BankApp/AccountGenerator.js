import React from 'react';

class AccountGenerator extends React.Component {
    render() {
        return (
            <div className="clAcctGen">
                <h1 id="h1">Welcome!</h1>
                <div id="idAcctGen">
                    <p>Get New Account</p>
                    <span className="clSpan">Enter Account Name <input id="acctName" /> Enter Account Type <input
                        id="acctType" /></span>
                    <button id="createAcct">Create Account</button>
                </div>
            </div>   
        );
    }
}
export default AccountGenerator