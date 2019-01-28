import React from 'react'
import isRolling from '../images/dicerolling.gif'

class Dice extends React.Component{

    render(){
        const dice = this.props.dice
        const rolling = this.props.rolling
        
        return ( 
            <div className="dices">
            {Object.keys(dice).map((die, key) =>
                <button onClick={this.props.roll} key={key}>
                    <img 
                        alt={die} 
                        style={die === "d2" ? {transform:'rotate(90deg)'}: {transform: 'rotate(0deg)'}} 
                        className="dice" src={rolling ? isRolling : require(`../images/dice${dice[die] || 1}.png`)}
                    />
                </button>
            )}
            </div>
        )
    }
}

export default Dice