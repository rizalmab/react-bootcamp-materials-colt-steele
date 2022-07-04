import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            die1: this.props.die1,
            die2: this.props.die2,
            isRolling: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    static defaultProps = {
        die1: "one",
        die2: "six"
    }

    rollDice() {
        const numsMap = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six'}
        const randomNum = Math.floor(Math.random() * 6) + 1
        return numsMap[randomNum]
    }

    handleClick() {
        // update the state for both die
        this.setState({die1: this.rollDice(), die2: this.rollDice(), isRolling: true})
        setInterval(() => this.setState({isRolling: false}), 1000)
    }

    render(){
        return (<div className="RollDice">
            <div className='RollDice-container'>
                <Die num={this.state.die1}/>
                <Die num={this.state.die2}/>
            </div>
            <div>
                <button disabled={this.state.isRolling} onClick={this.handleClick}>{this.state.isRolling? 'Rolling ...':'Roll Dice!'}</button>
            </div>
        </div>)
    }
}

export default RollDice