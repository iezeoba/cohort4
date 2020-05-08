import React from "react";

class MyComponent extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Hello World from MyComponent {this.props.whatToSay}</h1>
        {/*<button onClick={this.props.onPushMe}>Do something</button>*/}{/*this line is not being used */}
            </div>
        )
    }
}
export default MyComponent