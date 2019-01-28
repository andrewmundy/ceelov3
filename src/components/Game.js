import React from 'react'
import firebase from 'firebase'
import Login from './Login'
import { Link } from 'react-router-dom'
import base, {firebaseApp} from '../base'

class Inventory extends React.Component{
    state = {
        uid:null,
        owner:null,
        fullName:null
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.authHandler({user})
            }
        })
    }
    authHandler = async (authData) => {
        // 1. look up current game in db
        const game = await base.fetch(authData.user.displayName, {context:this})
        const name = authData.user.displayName.split(" ")
        const displayName = `${name[0]}${name[1][0]}`

        // 2. claim if no owner
        if(!game.players.player1.displayName){
            await base.post(displayName,{
                data: {
                    auth: authData.user.uid,
                    dice: {d1:1,d2:2,d3:3},
                    players: {
                        player1:{
                            photo:authData.user.photoURL,
                            name:displayName,
                            score:0,
                            purse:5
                        }
                    },
                    rolling:false,
                    zero:0,
                    turn:0,
                    title:`Welcome ${authData.user.displayName}`
                }
            })   
        }
        // 3. set state of inventory 
        this.setState({
            uid: authData.user.uid,
            owner: game.owner || authData.user.uid,
            displayName: `${name[0]}${name[1][0]}`,
            photo: authData.user.photoURL
        })
    }
    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler)
    }
    logout = async () => {
        await firebase.auth().signOut()
        this.setState({uid:null})
    }
    render(){
        const logout = <button onClick={this.logout}>Logout!</button>
        // 1. check if they are logged in
        if(!this.state.uid){
            return <Login game={this.props.game} authenticate={this.authenticate} />
        }
        // 2. check if they are the owner
        if(this.state.uid !== this.state.owner){
            return (
                <div>
                    <p>Sorry you arent the owner</p>
                    {logout}
                </div>
            )
        }
        return (
            <div 
            // className={this.props.game ? "login":"hide"}
            >
                <div className={this.props.match === "/" ? "":"hide"}><Link to={`/${this.state.displayName}`}><button>Play Online</button></Link></div>
                {logout}
            </div>
        )
    }
}
export default Inventory;