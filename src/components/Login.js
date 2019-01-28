import React from 'react'

const Login = (props) => (

        <div 
        // className={props.game ? "login":"hide"}
        >
            <nav className="login">
                <button 
                    className="facebook" 
                    onClick={() => props.authenticate('Facebook')}
                >
                    Login with Facebook    
                </button>
            </nav>
        </div>

)

export default Login