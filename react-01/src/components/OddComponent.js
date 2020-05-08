import React from "react";

class OddComponent extends React.Component {
    
    render() {
        return (
            <div>
                <h1>This is the OddComponent {this.props.whatToSay}</h1>
            </div>
        )
    }
}
export default OddComponent