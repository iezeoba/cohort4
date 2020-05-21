import React from 'react';
import logo from './logo.svg';
import menu from './svg/menu.svg';
import lego from './svg/lego.svg';
import maps from './svg/maps.svg';
import gears from './svg/gears.svg';

class Navbar extends React.Component {
    render() {
        return (
            <div id="idImages">
                <img src={logo} className="My-logo" id="id-reactlogo" alt="react-logo" onClick={this.props.onClick} />
                <img src={menu} className="My-logo-rev" id="id-menu" alt="menu-logo" onClick={this.props.onClick} />
                <img src={lego} className="My-logo" id="id-lego" alt="lego-logo" onClick={this.props.onClick} />
                <img src={maps} className="My-logo" id="id-maps" alt="maps-logo" onClick={this.props.onClick} />
                <img src={gears} className="My-logo" id="id-gears" alt="gears-logo" onClick={this.props.onClick} />
            </div>
        );
    }
}
export default Navbar