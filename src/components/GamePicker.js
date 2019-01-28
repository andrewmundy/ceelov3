import React from 'react'

class GamePicker extends React.Component{
    
    myInput = React.createRef()

    goToStore = event => {
        // 1 stop from from submitting
        event.preventDefault()
        // 2 get text from input
        // console.log(this.myInput.current.value)
        // 3 change page to whatever they entered
        console.log(this.props)
        this.props.history.push(`/game/${this.myInput.current.value}`)
    }
    randomNum(){
        return 123
    }

    render(){
        return ( 
            <form className="game-selector" onSubmit={this.goToStore}>
            <input 
                type="text" 
                ref={this.myInput}
                required placeholder="Game Name"
                defaultValue={this.randomNum()}
            
            />
            <button type="submit">Go to Game</button>
            </form>
        )
    }

}

export default GamePicker