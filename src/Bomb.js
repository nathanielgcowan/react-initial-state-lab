// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {

    constructor(props){
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        let correctText = this.state.secondsLeft;
        if (correctText === 0) {
            return 'Boom!'
        }
        if (correctText !== 0) {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }

}

export default Bomb;