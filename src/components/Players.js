import React from 'react'


import dice1 from '../images/dice1.png'
import dice2 from '../images/dice2.png'
import dice3 from '../images/dice3.png'
import dice4 from '../images/dice4.png'
import dice5 from '../images/dice5.png'
import dice6 from '../images/dice6.png'

class Players extends React.Component{
    handleChange = (event) => {
        console.log(event.currentTarget)
    
        //1. take copy of current player
        const updatedPlayer = {
            ...this.props.player, 
            [event.currentTarget.name]: event.currentTarget.value
        }
        this.props.updatePlayer(this.props.index, updatedPlayer)
    }
    
    render(){
        const players = Object.keys(this.props.players)
        const player_data = this.props.players
        return ( 
            <div className="players">
                {players.map(num => 
                    <div class="player">
                        <span>{player_data[num].purse}</span>
                        <input name="name" type="text" defaultValue={player_data[num].name} onChange={this.handleChange}></input>
                        <div class="score">
                            <img src={`dice${player_data[num].score}`}/>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Players