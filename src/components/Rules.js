import React from 'react'

class Rules extends React.Component{
    
    render(){
        return ( 
                <div className={this.props.rules ? "":"hide"}>
                    <h1>Rules!</h1>
                    <ul>
                        <li> Typical to all gambling games, in order to start all players must ante $1 </li>
                        <li>Players start with $5. When you reach $0 you lose</li>
                        <li>The last remaining player wins! </li>
                        <li>Each person gets a turn to score. The player with the highest score wins the pot.</li>
                        <li>All of this is already done for you, all you have to do is tap the dice when its your turn!</li>
                    </ul>
                </div>
        )
    }
}

export default Rules