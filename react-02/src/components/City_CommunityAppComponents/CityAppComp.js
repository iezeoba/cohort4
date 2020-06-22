import React from 'react';
import CityGenerator from './CityGeneratorComp.js';
import CitySearch from './CitySearchComp.js';
import CityEnquiry from './CityEnquiryComp.js';
import CityCard from './CityCardComp.js';
import CityMap from './CityMapComp.js';
import { Community, City } from '../../business/City_Community.js';
import './City_Community.css';


class CityApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: "",
            latitude: "",
            longitude: "",
            population: "",
            selectedCity: "Airdrie",
            movedInMovedOut: "",
            cities: [],
            checked: false
        }
        this.myCommunity = new Community();
        this.myCity = new City();
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

    async componentDidMount() {
        let newCity = await this.myCommunity.getCities();
        //mostNorthern.textContent = `Most Northern Location: ${city.getMostNorthern(city.allCities)}`
        //mostSouthern.textContent = `Most Southern Location: ${city.getMostSouthern(city.allCities)}`
        this.setState({ cities: this.myCommunity.allCities })
        console.log(newCity);
    }

    handleCreateCity = () => {
        this.myCommunity.createCity(this.state.cityName, this.state.latitude, this.state.longitude, this.state.population, this.state.checked)
        this.setState({ cities: this.myCommunity.allCities })
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

    handleMigration = (e) => {
        this.setState({
            movedInMovedOut: e.target.value
        })
    }

    handleMovements = (e) => {
        let getCityPopulation = this.myCommunity.cityFinder(this.state.selectedCity, this.myCommunity.allCities).population;
        let remainingPopulation;
        if (e.target.id === "idMovedOut") {
            remainingPopulation = this.myCity.movedOut(getCityPopulation, this.state.movedInMovedOut);
        }
        else if (e.target.id === "idMovedIn") {
            remainingPopulation = this.myCity.movedIn(getCityPopulation, this.state.movedInMovedOut);
        }
        this.myCommunity.cityFinder(this.state.selectedCity, this.myCommunity.allCities).population = remainingPopulation
        this.setState({ population: remainingPopulation, cities: this.myCommunity.allCities })
    }

    handleRetrieveCity = (e) => {
        this.setState({ selectedCity: e.target.id })
    }

    render() {
        return (
            <div className="clCityContainer">
                <CityGenerator onChange={this.checkBox}
                    cityName={this.handleCityName}
                    latitude={this.handleLatitude}
                    longitude={this.handleLongitude}
                    population={this.handlePopulation}
                    checked={this.state.checkBox}
                    createCity={this.handleCreateCity} />
                <CityEnquiry allCities={this.state.cities}
                    selectedCity={this.state.selectedCity}
                    newCommunity={this.myCommunity}
                    selectToDelete={this.state.selectedCity}
                    cityPopulation={this.state.population}
                    movedInMovedOut={this.state.movedInMovedOut}
                    migration={this.handleMigration}
                    movements={this.handleMovements} />
                <div style={{ display: "grid", gridTemplateColumns: "70% 30%" }}>
                    <CityCard
                        cityDetails={this.state.cities}
                        retrieveCity={this.handleRetrieveCity} />
                    <CityMap selectedCity={this.state.selectedCity} />
                </div>
                <CitySearch fromSelected={this.state.selectedCity} />
            </div>
        );
    }
}
export default CityApp