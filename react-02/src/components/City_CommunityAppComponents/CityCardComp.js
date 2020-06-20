import React from 'react';

class CityCard extends React.Component {
    render() {
        const eachCityCard = this.props.cityDetails.map((items, index) => //
            <CityInfo key={index} value={items} retrieveCity={this.props.retrieveCity} />
        )
        return (
            <div className="clCityCard">
                {eachCityCard}
            </div>
        );
    }
}
export default CityCard

function CityInfo(props) { //This component returns the city info card
    return (
        <div id={props.value.name} className="clCityInfoCard" onClick={props.retrieveCity}>
            <p>Name: {props.value.name}</p>
            <p>Latitude: {props.value.latitude}</p>
            <p>Longitude: {props.value.longitude}</p>
            <p>Population: {props.value.population}</p>
        </div>
    )
};