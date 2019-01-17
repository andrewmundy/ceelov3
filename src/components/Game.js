import React from 'react'
import firebase from 'firebase'
import Login from './Login'
import base, {firebaseApp} from '../base'


class Inventory extends React.Component{
    state = {
        uid:null,
        owner:null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.authHandler({user})
            }
        })
    }


    authHandler = async (authData) => {
        // 1. look up current store in db
        const store = await base.fetch(this.props.storeId, {context:this})
        
        // 2. claim if no owner
        if(!store.owner){
            await base.post(`${this.props.storeId}/owner`,{
                data: authData.user.uid
            })   
        }
        // 3. set state of inventory 
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        })

        console.log(authData)
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
            return <Login authenticate={this.authenticate} />
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
            <div className="inventory">
                <h2>Game</h2>
                {logout}
            </div>
        )
    }
}

export default Inventory;