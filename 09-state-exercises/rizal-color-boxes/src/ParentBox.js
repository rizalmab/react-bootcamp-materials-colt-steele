import React, { Component } from 'react'
import ChildBox from './ChildBox'

class ParentBox extends Component {
    static defaultProps = {
        colors: ["red", "blue", "green", "yellow", "black"]
    }
    
    chooseRandomColour() {
        const randId = Math.floor(Math.random() * this.props.colors.length)
        return this.props.colors[randId]
    }

    render() {
        return (<div className="ParentBox">
            <ChildBox color="red"/>
            <ChildBox color="blue"/>
            <ChildBox color="green"/>
            {/* <ChildBox color={this.chooseRandomColour()}/> */}
            {}
        </div>)
    }
}

export default ParentBox