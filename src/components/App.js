import React, { Component } from 'react';
import '../App.scss';

import Dice from './Dice'
import GamePicker from './GamePicker'
import Player from './Player'
import Title from './Title'
import icon from '../images/favicon.png'

import base from '../base'

class App extends Component {
  state = {
    ceelo:{
      title: "Welcome to Ceelo",
      subTitle: "Touch the dice to roll",
      rolling:false,
      turn:0,
      zero:0,
      dice:{d1:0,d2:0,d3:0},
      players: {}
    }
  }
  componentDidMount(){
    this.ref = base.syncState(`ceelo`, {
      context: this,
      state: 'ceelo'
    });
  }

  score = (d1,d2,d3) => {
    let result = 0

    if(JSON.stringify([d1,d2,d3].sort()) === "[1,2,3]"){
      result = 123
    }
    if(JSON.stringify([d1,d2,d3].sort()) === "[4,5,6]"){
      result = 456
    }
   
    else if(d1 === d2){
      if(d1 === d3){
        result = `trip ${d1}`
      }
      result = d3
    }else if(d1 === d3){
      result = d2
    }else if(d2 === d3){
      result = d1
    }

    this.setState({
      ceelo:{
        dice:{
          d1:d1,
          d2:d2,
          d3:d3
        }
      }
    })
    return result
  }


  turn = () => {
    const players = Object.keys(this.state.ceelo.players)
    const length = players.length-1
    const turn = this.state.ceelo.turn
    // turn needs to check if its the last player

    if(length !== turn){
      this.setState({ceelo:{turn:turn+1}})
    }else{
      this.setState({ceelo:{turn:0}})
      this.compareScore()
    }
    //if it is the last player, restart
  }
  compareScore = () => {
    const players = Object.keys(this.state.ceelo.players)
    let winner = ""

    for(let i=0;i<players.length;i++){
      let player = this.state.ceelo.players[`player${i+1}`]
      if(!winner){
        winner = `player${i+1}`
      }else if(player.score > this.state.ceelo.players[winner].score){
        winner = `player${i+1}`
      }
    }
    this.setState({
      ceelo:{
        title:`${this.state.ceelo.players[winner].name} wins!`,
        zero:1
      }
    })
  }

  zeroOutScore = () => {
    const players = Object.keys(this.state.ceelo.players)
    for(let i=0;i<players.length;i++){
      let player = `player${i+1}`
      console.log(player)
      this.setState({
        ceelo:{
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
    if(this.state.ceelo.zero){
      this.zeroOutScore()
    }
    // if not, continue
    let dice1 = Math.floor(Math.random() * 6) + 1
    let dice2 = Math.floor(Math.random() * 6) + 1
    let dice3 = Math.floor(Math.random() * 6) + 1  
    //start rolling
    this.setState({
      ceelo:{
        rolling:true
      }
    })
    //happens after 2 seconds
    setTimeout(() => {
      let score = this.score(dice1,dice2,dice3)
      // console.log(score)
      if(score){
        this.setState({
          ceelo:{
            players:{
              [`player${this.state.ceelo.turn+1}`]:{
                score:score
              }
            }
          }
        })
        this.turn()
      }
      this.setState({ceelo:{rolling:false}})
    }, 500)
  }

  updatePlayer = (key, updatedPlayer) => {
      //take copy of current state
      const players = {...this.state.ceelo.players}
      // update that state 
      // console.log(players)
      players[key] = updatedPlayer
      this.setState({ceelo:{players}})
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <img alt="favicon" className="favicon" src={icon}/> <span>Ceelo 98</span>
        </div>
        <Title
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
        </div>
        {/* <GamePicker history={this.props.history} /> */}
      </div>
    );
  }
}

export default App;
