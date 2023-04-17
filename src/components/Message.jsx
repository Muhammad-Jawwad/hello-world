// class component
import React, {Component} from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Hope your are felling well!'
        }
    }
    changeMessage(){
        this.setState({
            message: "That's good, Thank you..."
        })
    }
    
    render() {
        return(
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={() => this.changeMessage()}>Yes</button>
            </div>
            )
    }
}

export default Message;