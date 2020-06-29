import React from 'react';

class LLControl extends React.Component {
    render() {
        return (
            <div className="clLinkedList">
                Enter Data Here: <input id="idInputValue" placeholder="Type Data"></input>
                <p>Please select operation</p>
                <select id="dropdown" name="accounts">
                    <option value="Select">Select</option>
                    <option value="Insert First">Insert First</option>
                    <option value="Insert Last">Insert Last</option>
                    <option value="Insert At Index">Insert At Index</option>
                    <option value="Get At Index">Get At Index</option>
                    <option value="Remove At Index">Remove At Index</option>
                    <option value="Clear List">Clear List</option>
                    <option value="Print List">Print List</option>
                </select><button>Submit</button>
            </div>
        );
    }
}
export default LLControl;