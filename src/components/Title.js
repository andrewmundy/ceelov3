import React from 'react'
import banner from '../images/banner.png'
class Title extends React.Component{
    
    render(){
        return ( 
            <div className="title_text">
                <img alt="Ceelo 98 Online!" src={banner}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Title