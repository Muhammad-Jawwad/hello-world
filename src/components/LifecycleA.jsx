import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    //1st Method of Mounting
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Jawwad'
      }
      console.log("LifecycleA Constructor");
    }

    //2nd Method of Mounting
    static getDerivedStateFromProps(state,props){
        console.log("LifecycleA getDerivedStateFromProps")
        return null;
    }
    //4th Method of Mounting
    componentDidMount(){
        console.log("LifecycleA componentDidMount");
    }

    //3rd Method of Mounting
    render() {
        console.log("LifecycleA redering")
        return (
        <div>
            <div>Lifecycle A</div>
            <LifecycleB/>
        </div>
        
        )
    }
}

export default LifecycleA