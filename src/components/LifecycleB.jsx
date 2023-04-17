import React, { Component } from 'react'

class LifecycleB extends Component {
    //1st Method of Mounting
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Jawwad'
      }
      console.log("LifecycleB Constructor");
    }

    //2nd Method of Mounting & 1st updating Method
    static getDerivedStateFromProps(state,props){
        console.log("LifecycleB getDerivedStateFromProps")
        return null;
    }
    //4th Method of Mounting
    componentDidMount(){
        console.log("LifecycleB componentDidMount");
    }

    //2nd Method of Updating 
    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate")
        return true;
    }

    //3rd Method of Mounting
    render() {
        console.log("LifecycleB redering")
        return (
        <div>Lifecycle B</div>
        )
    }
}

export default LifecycleB