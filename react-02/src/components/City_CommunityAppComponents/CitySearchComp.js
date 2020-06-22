import React from 'react';

class CitySearch extends React.Component {
    render() {
        return (
            <div className="clCitySearch">
                <div id="idCitySearch">
                    {/* z<span>Account <select id="dropdownTrxn" name="acctsTrxn"></select> */}
                    <span className="clSpan">
                        <p className="clRedFonts">Warning!!! Selected city will be deleted</p>
                        <input id="idSelectCity" placeholder="Select City to Delete" />
                    </span>
                    <button id="idDelete" className="clBtn" onClick={this.props.handleDeposit}>Delete</button>
                    {/* </span> */}
                </div>
            </div>
        );
    }
}
export default CitySearch