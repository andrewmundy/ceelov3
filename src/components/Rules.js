import React from 'react'
import icon from '../images/favicon.png'
import {Link} from 'react-router-dom'

class Rules extends React.Component{
    
    render(){
        return ( 
            <div className="App">
                <div className="title_page">
                    <div className="title_group">
                        <img alt="favicon" className="favicon" src={icon}/> 
                        <span>Ceelo 98</span>
                    </div>
                        <Link to="/"><button className="exit">X</button></Link>
                </div>
                <h1>Rules!</h1>
            </div>
        )
    }
}

export default Rules