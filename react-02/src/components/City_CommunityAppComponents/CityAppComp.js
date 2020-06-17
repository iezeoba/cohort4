import React from 'react';
import CityGenerator from './CityGeneratorComp.js';
import CitySearch from './CitySearchComp.js';
import CityEnquiry from './CityEnquiryComp.js';
import { Community } from '../../business/City_Community.js';


class CityApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: "",
            latitude: "",
            longitude: "",
            population: "",
            checked: false
        }
        this.myCommunity = new Community();
    }

    checkBox = () => {
        if (this.state.checked) {
            this.setState({
                checked: false
            })
        } else
            this.setState({
                checked: true
            })
    }

    handleCreateCity = () => {
        this.myCommunity.createCity(this.state.cityName, this.state.latitude, this.state.longitude, this.state.population, this.state.checked)
        console.log(this.myCommunity.allCities);

    }

    handleCityName = (e) => {
        this.setState({
            cityName: e.target.value
        })
    }

    handleLatitude = (e) => {
        this.setState({
            latitude: e.target.value
        })
    }

    handleLongitude = (e) => {
        this.setState({
            longitude: e.target.value
        })
    }

    handlePopulation = (e) => {
        this.setState({
            population: e.target.value
        })
    }

    render() {
        return (
            <div className="clCityContainer">
                <CityGenerator onChange={this.checkBox} cityName={this.handleCityName}
                    latitude={this.handleLatitude}
                    longitude={this.handleLongitude}
                    population={this.handlePopulation}
                    checked={this.state.checkBox}
                    createCity={this.handleCreateCity} />
                <CityEnquiry />
                <CitySearch />
            </div>
        );
    }
}
export default CityApp