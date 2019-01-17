import React from 'react'

class Players extends React.Component{

    handleChange = (event) => {
        // console.log(this.props.details)
        //1. take copy of current player
        const updatedPlayer = {
            ...this.props.details[this.props.player], 
            [event.currentTarget.name]: event.currentTarget.value
        }
        this.props.updatePlayer(this.props.index, updatedPlayer)
    }
    
    render(){
        const details = this.props.details[this.props.index]
        console.log(this.props.index === `player${this.props.turn+1}`)
        return ( 
            <div 
                className="player" 
                style={this.props.index === `player${this.props.turn+1}`? {opacity:1}:{opacity:1}}
            >
                <span style={this.props.index === `player${this.props.turn+1}`? {opacity:1}:{display:'none'}}> ☞ </span>
        {/*<span>{details.purse}</span>*/}
                <input name="name" type="text" value={details.name} onChange={this.handleChange}></input>
                <div className="score">
                    <img src={require(`../images/dice${details.score}.png`)}/>
                </div>
            </div>
        )
    }
}

export default Players