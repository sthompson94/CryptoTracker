import React, { Component } from 'react'

class Timer extends Component{
constructor(props){
super(props)

this.state = {
    countdown: 30,
}
}

componentDidMount(){
    this.loopIncrimentTimer();
}

resetTimer(){
    this.setState({countdown:30})
}



incrimentTimer(){
    this.setState({countdown: this.state.countdown -1})
}

loopIncrimentTimer(){
    var incrimentFunction = this.incrimentTimer;

    setInterval(function(){incrimentFunction()}, 1000)
}



render(){
    return(
        <div>
            <h3>Refreshing Data in : {this.state.countdown} seconds</h3>
        </div>
    )
}
}

export default Timer