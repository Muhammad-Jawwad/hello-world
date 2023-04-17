// class component
import React, {Component} from "react";

class Welcome extends Component {
    render() {
        //Destructuring in props and states 
        const { name } = this.props;
        // const { state1, state2 } = this.state;

        return(
            <div>
                <h1> Welcome to React {name} </h1>
                {this.props.children}
            </div>
            )
    }
}

export default Welcome;