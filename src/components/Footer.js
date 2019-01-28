import React from 'react'
import {Link} from 'react-router-dom'
import Rules from './Rules'
import Game from './Game'

class Footer extends React.Component{
    state = {
        rules:false,
        game:false
    }

    toggleClick = (e) => {
        e.preventDefault();
        
        e = e.target.name
        this.setState({[e]:!this.state[e]})
    }

    render(){
        return ( 
            <div>
            <div className="footer">
                <button name={"rules"} onClick={this.toggleClick}>Rules</button>
                <Game game={this.state.game}/>
            </div>
            <div>
                <Rules rules={this.state.rules}/>
            </div>
            </div>
        )
    }
}

export default Footer