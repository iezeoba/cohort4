import React from 'react';
import { Community, City } from '../../business/City_Community';
//import React, {Component} from 'react'; //Alternative to line 1. Then no need to use 'React.' on line 5, just Component


class CityEnquiry extends React.Component {
    state = {
        enquiryResponse: ""
    }

    handleEnquiryResponse = (e) => {
        let myCommunity = new Community();
        let myCity = new City();
        if (e.target.id === "idMostNorthern") {
            this.setState({ enquiryResponse: `Most northern city is ${myCommunity.getMostNorthern(this.props.allCities)}` })
        } else if (e.target.id === "idMostSouthern") {
            this.setState({ enquiryResponse: `Most southern city is ${myCommunity.getMostSouthern(this.props.allCities)}` })
        } else if (e.target.id === "idWhichSphere") {
            console.log(this.props.selectedCity);
            this.setState({ enquiryResponse: `${this.props.selectedCity}: ${myCommunity.whichSphere(this.props.selectedCity, this.props.allCities)}` })
        } else if (e.target.id === "idHowBig") {
            this.setState({ enquiryResponse: `${myCity.howBig(this.props.selectedCity, this.props.allCities)}` })
        }
    }
    render() {
        return (
            <div className="clCityEnquiry">
                <div id="idCityEnquiry">
                    <input id="idInputShow" placeholder="Choose City to View Details" value={this.props.selectToDelete} readOnly /><br />
                    <button id="idShow" className="clBtn" onClick={this.handleEnquiryResponse}>Show City</button>
                    <button id="idMovedIn" className="clBtn" onClick={this.props.movements}>Moved In</button>
                    <input id="idMoveInMovedOut" type="number" value={this.props.movedInMovedOut} onChange={this.props.migration} />
                    <button id="idMovedOut" className="clBtn" onClick={this.props.movements}>Moved Out</button>
                    <button id="idHowBig" className="clBtn" onClick={this.handleEnquiryResponse}>How Big</button>
                    <button id="idWhichSphere" className="clBtn" onClick={this.handleEnquiryResponse} >Which Sphere</button>
                    {/* <button id="idGetPopulation" className="clBtn" onClick={this.handleEnquiryResponse}>Get Population</button><br /> */} {/*No need for this functionality as the information is already on the card*/}
                    <button id="idMostNorthern" className="clBtn" onClick={this.handleEnquiryResponse}>Most Northern</button>
                    <button id="idMostSouthern" className="clBtn" onClick={this.handleEnquiryResponse}>Most Southern</button>
                    <p id="idEnquiryResult">{this.state.enquiryResponse}</p>

                </div>
            </div >
        );
    }
}
export default CityEnquiry