import React, { Component } from 'react';
import '../App.scss';
<<<<<<< HEAD
import firebase from 'firebase'

import Dice from './Dice'
=======

import Dice from './Dice'
import GamePicker from './GamePicker'
import Messenger from './Messenger'
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
import Player from './Player'
import Title from './Title'
import icon from '../images/favicon.png'
import AddNewPlayer from './AddNewPlayer'
import Footer from './Footer'


import base from '../base'

class App extends Component {
  state = {
<<<<<<< HEAD
    [this.props.location.pathname]:{
=======
    ceelo:{
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
      title: "Welcome to Ceelo",
      subTitle: "Touch the dice to roll",
      rolling:false,
      turn:0,
      zero:0,
      dice:{d1:0,d2:0,d3:0},
      players: {}
<<<<<<< HEAD
    },
    isLoggedIn:false
  }

  componentDidMount(){
    let pathname = this.props.location.pathname

    if(pathname === "/"){
      pathname = "/ceelo"
      this.props.location.pathname = pathname
    }
    
    this.ref = base.syncState(pathname, {
      context: this,
      state: pathname
    });

    firebase.auth().onAuthStateChanged(function(user) {

      let isLoggedIn = false
      if (user) {
        isLoggedIn = true
      }
      this.setState({
        isLoggedIn:isLoggedIn
      })
    }.bind(this));
=======
    }
  }

  componentDidMount(){
    this.ref = base.syncState(`ceelo`, {
      context: this,
      state: 'ceelo'
    });

>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
  }

  score = (d1,d2,d3) => {
    let result = 0

    if(JSON.stringify([d1,d2,d3].sort()) === "[1,2,3]"){
      result = -1
    }
    if(JSON.stringify([d1,d2,d3].sort()) === "[4,5,6]"){
      result = 456
    }
   
    else if(d1 === d2){
      if(d1 === d3){
        result = (d1*3)+4
      }
      result = d3
    }else if(d1 === d3){
      result = d2
    }else if(d2 === d3){
      result = d1
    }

    this.setState({
<<<<<<< HEAD
      [this.props.location.pathname]:{
=======
      ceelo:{
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
        dice:{
          d1:d1,
          d2:d2,
          d3:d3
        }
      }
    })
    return result
  }
<<<<<<< HEAD

  turn = () => {
    // turn needs to check if its the last player
    const players = Object.keys(this.state[this.props.location.pathname].players)
    const length = players.length-1
    const turn = this.state[this.props.location.pathname].turn
    
    if(length !== turn){
      //if turn isnt the last player, than its next turn
      this.setState({[this.props.location.pathname]:{turn:turn+1}})
    }else{
      // if its the last player, reset
      this.setState({[this.props.location.pathname]:{turn:0}})
=======
  checkTurn = () => {
    const players = Object.keys(this.state.ceelo.players)
  }

  turn = () => {
    // turn needs to check if its the last player
    const players = Object.keys(this.state.ceelo.players)
    const length = players.length-1
    const turn = this.state.ceelo.turn
    
    if(length !== turn){
      //if turn isnt the last player, than its next turn
      this.setState({ceelo:{turn:turn+1}})
    }else{
      // if its the last player, reset
      this.setState({ceelo:{turn:0}})
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
      this.compareScore()
    }
  }
  compareScore = () => {
<<<<<<< HEAD
    const players = Object.keys(this.state[this.props.location.pathname].players)
=======
    const players = Object.keys(this.state.ceelo.players)
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
    let winner = ""
    let tied = []

    for(let i=0;i<players.length;i++){
<<<<<<< HEAD
      let player = this.state[this.props.location.pathname].players[`player${i+1}`]
      if(!winner){
        // if winner is empty, it is the first player, assign winner to first score
        winner = `player${i+1}`
      }else if(player.score === this.state[this.props.location.pathname].players[winner].score){
        if(!tied[0]){
          tied.push(this.state[this.props.location.pathname].players[`player${i+1}`].name)
          tied.push(this.state[this.props.location.pathname].players[winner].name)
        }else{
          tied.push(this.state[this.props.location.pathname].players[`player${i+1}`].name)
        }
      }else if(player.score > this.state[this.props.location.pathname].players[winner].score){
=======
      let player = this.state.ceelo.players[`player${i+1}`]
      if(!winner){
        // if winner is empty, it is the first player, assign winner to first score
        winner = `player${i+1}`
      }else if(player.score === this.state.ceelo.players[winner].score){
        if(!tied[0]){
          tied.push(this.state.ceelo.players[`player${i+1}`].name)
          tied.push(this.state.ceelo.players[winner].name)
        }else{
          tied.push(this.state.ceelo.players[`player${i+1}`].name)
        }
      }else if(player.score > this.state.ceelo.players[winner].score){
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
        //if the next player score is greater than the last, replace winner and zero out tied
        winner = `player${i+1}`
        tied = []
      }
    }
    if(tied[0]){
      this.setState({
<<<<<<< HEAD
        [this.props.location.pathname]:{
=======
        ceelo:{
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
          title:`${tied.join(", ")} tied!`,
          zero:1
        }
      })
      console.log(tied)
    }else{
      this.setState({
<<<<<<< HEAD
        [this.props.location.pathname]:{
          title: `${this.state[this.props.location.pathname].players[winner].name} wins with a ${this.state[this.props.location.pathname].players[winner].score}!`,
=======
        ceelo:{
          title: `${this.state.ceelo.players[winner].name} wins with a ${this.state.ceelo.players[winner].score}!`,
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
          zero:1
        }
      })
    }
  }

  zeroOutScore = () => {
<<<<<<< HEAD
    const players = Object.keys(this.state[this.props.location.pathname].players)
    for(let i=0;i<players.length;i++){
      let player = `player${i+1}`
      this.setState({
        [this.props.location.pathname]:{
=======
    const players = Object.keys(this.state.ceelo.players)
    for(let i=0;i<players.length;i++){
      let player = `player${i+1}`
      this.setState({
        ceelo:{
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
          zero:0,
          players:{
            [player]:{
              score:0
            }
          }
        }
      })
    }
  }

  roll = () => {
    //check if the score need to be zero'd out
<<<<<<< HEAD
    if(this.state[this.props.location.pathname].zero){
=======
    if(this.state.ceelo.zero){
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
      // console.log('should zero out')
      this.zeroOutScore()
    }
    // if not, continue
    let dice1 = Math.floor(Math.random() * 6) + 1
    let dice2 = Math.floor(Math.random() * 6) + 1
    let dice3 = Math.floor(Math.random() * 6) + 1  
    //start rolling
    this.setState({
<<<<<<< HEAD
      [this.props.location.pathname]:{
=======
      ceelo:{
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
        rolling:true
      }
    })
    //happens after 2 seconds
    setTimeout(() => {
      let score = this.score(dice1,dice2,dice3)
      // console.log(score)
      if(score){
        this.setState({
<<<<<<< HEAD
          [this.props.location.pathname]:{
            title:`${this.state[this.props.location.pathname].players[`player${this.state[this.props.location.pathname].turn+1}`].name} scored a ${score}` || 'Ceelo Online',
            // subTitle:this.state.ceelo.players[`player${this.state.ceelo.turn+2}`].name ? `${this.state.ceelo.players[`player${this.state.ceelo.turn+2}`].name}'s turn` : `Last turn!`,
            players:{
              [`player${this.state[this.props.location.pathname].turn+1}`]:{
=======
          ceelo:{
            title:`${this.state.ceelo.players[`player${this.state.ceelo.turn+1}`].name} scored a ${score}`,
            // subTitle:this.state.ceelo.players[`player${this.state.ceelo.turn+2}`].name ? `${this.state.ceelo.players[`player${this.state.ceelo.turn+2}`].name}'s turn` : `Last turn!`,
            players:{
              [`player${this.state.ceelo.turn+1}`]:{
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
                score:score
              }
            }
          }
        })
        this.turn()
      }
<<<<<<< HEAD
      this.setState({[this.props.location.pathname]:{rolling:false}})
=======
      this.setState({ceelo:{rolling:false}})
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
    }, 2200)
  }

  updatePlayer = (key, updatedPlayer) => {
      //take copy of current state
<<<<<<< HEAD
      const players = {...this.state[this.props.location.pathname].players}
      // update that state 
      // console.log(players)
      players[key] = updatedPlayer
      this.setState({[this.props.location.pathname]:{players}})
  }
  
  addNewPlayer = (change) => {
    const players = {...this.state[this.props.location.pathname].players}
=======
      const players = {...this.state.ceelo.players}
      // update that state 
      // console.log(players)
      players[key] = updatedPlayer
      this.setState({ceelo:{players}})
  }
  
  addNewPlayer = (change) => {
    const players = {...this.state.ceelo.players}
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
    let player = Object.keys(players).length+1
    let key = `player${player}`
    
    if(change === 'plus'){
      players[key] = {name:`player${player}`,score:0, purse:5}
    }else{
      // console.log(player-2)
      if(player-2){
        player = Object.keys(players).length
        key = `player${player}`
        players[key] = null
      }else{
      }
    }
      // console.log(player)
<<<<<<< HEAD
    this.setState({[this.props.location.pathname]:{players}})
=======
    this.setState({ceelo:{players}})
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
    // this.setState({
    // })
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <img alt="favicon" className="favicon" src={icon}/> <span>Ceelo 98</span>
        </div>
        <Title
<<<<<<< HEAD
          title={this.state[this.props.location.pathname].title}
          subTitle={this.state[this.props.location.pathname].subTitle}
        />
        <Dice 
          rolling={this.state[this.props.location.pathname].rolling}
          roll={this.roll}
          dice={this.state[this.props.location.pathname].dice}
        />
        <div className="players">
          {Object.keys(this.state[this.props.location.pathname].players).map(key =>
            <Player
              isLoggedIn={this.state.isLoggedIn}
              updatePlayer={this.updatePlayer}
              key={key} 
              index={key}
              details={this.state[this.props.location.pathname].players} 
              player={key}
              turn={this.state[this.props.location.pathname].turn}
            />
          )}
          {this.state.isLoggedIn ? (
            <AddNewPlayer
              players={Object.keys(this.state[this.props.location.pathname].players).length}
              addNewPlayer={this.addNewPlayer}
            />):(<p></p>)
          }
=======
          title={this.state.ceelo.title}
          subTitle={this.state.ceelo.subTitle}
        />
        <Dice 
          rolling={this.state.ceelo.rolling}
          roll={this.roll}
          dice={this.state.ceelo.dice}
        />
        <div className="players">
          {Object.keys(this.state.ceelo.players).map(key =>
            <Player
              updatePlayer={this.updatePlayer}
              key={key} 
              index={key}
              details={this.state.ceelo.players} 
              player={key}
              turn={this.state.ceelo.turn}
            />
          )}
          <AddNewPlayer
            players={Object.keys(this.state.ceelo.players).length}
            addNewPlayer={this.addNewPlayer}
          />
>>>>>>> aed84258c460ee13c3154ac0b278119bc1dfded0
        </div>
        {/* <GamePicker history={this.props.history} /> 
        <Messenger />
      
        */}
        <Footer />
      </div>
    );
  }
}

export default App;
