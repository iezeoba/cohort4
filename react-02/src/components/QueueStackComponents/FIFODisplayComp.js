import React from 'react';

class FIFODisplay extends React.Component {
    render() {
        return (
            <div className="clDisplay">
                <div className="clFIFODisplay">
                    <p>Queue Demo</p>
                    Enter Data to Queue <input id="idDataToQueue" onChange={this.props.newQueueElement} />
                    <button id="idStack" className="clBtn" onClick={this.props.enqueue}>Put In</button>
                    <button id="idStack" className="clBtn" onClick={this.props.createCity}>Take Out</button>
                </div>
                <div className="clLIFODisplay">
                    <p>Stack Demo</p>
                    <button id="idAddToStack" className="clBtn" onClick={this.props.enqueue}>Put In Stack</button>
                    <button id="idRemoveFromStack" className="clBtn" onClick={this.props.createCity}>Take Out</button>
                </div>
            </div>
        );
    }
}
export default FIFODisplay;