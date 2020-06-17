import React from 'react';
//import React, {Component} from 'react'; //Alternative to line 1. Then no need to use 'React.' on line 5, just Component


class CityEnquiry extends React.Component {
    render() {
        return (
            <div className="clCityEnquiry">
                <div id="idCityEnquiry">
                    <input id="idInputShow" placeholder="Choose City to View Details" /><br />
                    <button id="idShow" className="clBtn" onClick={this.props.totalBalance}>Show City</button>
                    <button id="idMovedIn" className="clBtn" onClick={this.props.highestBalance}>Moved In</button>
                    <button id="idMovedOut" className="clBtn" onClick={this.props.lowestBalance}>Moved Out</button>
                    <button id="idHowBig" className="clBtn" onClick={this.props.lowestBalance}>How Big</button>
                    <button id="idWhichSphere" className="clBtn" onClick={this.props.lowestBalance}>Which Sphere</button>
                    <button id="idGetPopulation" className="clBtn" onClick={this.props.lowestBalance}>Get Population</button><br />
                    <button id="idMostNorthern" className="clBtn" onClick={this.props.lowestBalance}>Most Northern</button>
                    <button id="idMostSouthern" className="clBtn" onClick={this.props.lowestBalance}>Most Southern</button>
                    <p id="idEnquiryResult">`***{this.props.enquiryResponse}`</p>

                </div>
            </div >
        );
    }
}
export default CityEnquiry