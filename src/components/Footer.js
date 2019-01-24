import React from 'react'
import {Link} from 'react-router-dom'
class Footer extends React.Component{
    
    render(){
        return ( 
            <div className="footer">
                <Link to="/rules"><button>rules</button></Link>
                <Link to="/game"><button>game</button></Link>
            </div>
        )
    }
}

export default Footer