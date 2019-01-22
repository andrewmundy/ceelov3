import React from 'react'

class AddNewPlayer extends React.Component{

    handleChange = (event) => {
        const change = event.currentTarget.name
        //1. take copy of current player
        // const updatedPlayer = {
        //     ...this.props.details[this.props.player], 
        //     [event.currentTarget.name]: event.currentTarget.value
        // }
        this.props.addNewPlayer(change)
    }
    
    render(){
        let players = this.props.players
        console.log(players)
        return ( 
            <div className="add_player">
                <button name="plus" onClick={this.handleChange}>+</button>
                <button 
                    name="minus" 
                    disabled={players === 1} 
                    // style={!players ? {display:'none'}:{display:'auto'}}
                    onClick={this.handleChange}>-</button>
            </div>
        )
    }
}

export default AddNewPlayer