import React, { Component } from 'react'
import './ChildBox.css'
import {chooseRandom} from "./helper"

class ChildBox extends Component {
    static defaultProps = {
        allColours: ["red", "blue", "green", "yellow", "black"]
    }
    
    constructor(props) {
        super(props)
        this.state = {
            color: chooseRandom(this.props.allColours)
        }
        this.handleClick = this.handleClick.bind(this)
    }

    pickColor() {
        let newColor;
        do {
            newColor = chooseRandom(this.props.allColours)
        } while (newColor === this.state.color)
        this.setState({color: newColor})
    }

    handleClick() {
        this.pickColor()
    }

    render() {
        return (<div className="ChildBox" style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>)
    }
}

export default ChildBox