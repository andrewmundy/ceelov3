import React from 'react'
import icon from '../images/aim.png'

class Messenger extends React.Component{
    
    render(){
        return ( 
            <div className="title">
                <img alt="favicon" className="favicon" src={icon}/> <span>Messenger</span>
            </div>
        )
    }
}

export default Messenger