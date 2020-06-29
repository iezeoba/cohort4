import React from 'react';
import './QueueStack.css';
import FIFODisplay from './FIFODisplayComp';
import { Stack, Queue } from '../../business/QueueStack';

class QueueStackApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            storage: {},
            size: 0,
            head: 0,
            tail: 0,
            newQueueElement: "",
            newStackElement: "",
            stackContent: [],
            queueContent: []
        }
        this.myStack = new Stack();
        this.myQueue = new Queue();
    }

    handleNewQueueElement = (e) => {
        this.setState({ newQueueElement: e.target.value })
    }

    handleEnqueue = () => {
        console.log("queueing")
        this.myQueue.enqueue(this.state.newQueueElement)
        this.setState({ queueContent: this.myQueue.allQueueElements })
        console.log(this.myQueue);
    }

    render() {
        return (
            <div className="clQueueStackContainer">
                <h1 id="h1">FIFO LIFO</h1>
                <FIFODisplay enqueue={this.handleEnqueue}
                    newQueueElement={this.handleNewQueueElement} />

            </div>
        );
    }
};
export default QueueStackApp;