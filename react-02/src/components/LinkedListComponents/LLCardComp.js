import React from 'react';

function LLCard() {
    const [subject, amount] = node.show();
    const nextNode = node.forwardNode || { subject: 'null', amount: '' };

    return (
        <div className="clLLCard">
            {eachLLCard}
        </div>
    );
};

const eachLLCard = this.props.cityDetails.map((items, index) => //
    <CityInfo key={index} value={items} retrieveCity={this.props.retrieveCity} />
)
export default LLCard;

function LLInfo(props) { //This component returns the city info card
    return (
        <div id={props.value.name} className="clLLInfoCard" onClick={props.retrieveCity}>
            <div className="clCardHover">
                <p>Name: {props.value.name}</p>
                <p>Latitude: {props.value.latitude}</p>
                <p>Longitude: {props.value.longitude}</p>
                <p>Population: {props.value.population}</p>
            </div>
        </div>
    )
};