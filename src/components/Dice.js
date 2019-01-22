import React from 'react'
import isRolling from '../images/dicerolling.gif'

class Dice extends React.Component{

    render(){
        const dice = this.props.dice
        const rolling = this.props.rolling
        
        return ( 
            <div className="dices">
            {Object.keys(dice).map(key =>
                <button onClick={this.props.roll}>
                    <img 
                        alt={key} 
                        style={key === "d2" ? {transform:'rotate(90deg)'}: {transform: 'rotate(0deg)'}} 
                        className="dice" src={rolling ? isRolling : require(`../images/dice${dice[key] || 1}.png`)}
                    />
                </button>
            )}
            </div>
        )
    }
}

export default Dice