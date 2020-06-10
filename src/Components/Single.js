import React, { Component } from 'react'
import Game from './Game'
import Board from './Board'
import BestMove from './Minimax'
import Winner from './Winner'

class Single extends Component {
    constructor(props) {
        super(props)

        this.state = {
            board: Game,
            theme: 0,
        }
    }

    Change = (items) => {
        let ai = BestMove(this.state.board);
        this.setState(prevState => {
            const updatedState = prevState.board.map(item => {
                if (item.id === items.id) {
                    item.isSelected = items.isSelected
                }
                else if (item.id === ai) {
                    item.isSelected = "O"
                }
                return item
            })
            return { board: updatedState }
        })
    }

    theme = () => {
        this.setState(prevState => {
            if (prevState.theme < 6) { return { theme: prevState.theme + 1 } }
            else if (prevState.theme === 6) { return { theme: 0 } }
        })
    }
    reset = () => {
        this.setState(prevState => {
            const Reset = prevState.board.map(item => {
                item.isSelected = null
                return item
            })
            return { board: Reset}
        })
    }


    render() {
        //Winner
        let winner=Winner(this.state.board)

        //List of themes
        const list = ["btn btn-danger", "btn btn-primary", "btn btn-success", "btn btn-dark", "btn btn-info", "btn btn-warning", "btn btn-default"]

        //Board Details
        const items = this.state.board.map(item => <Board key={item.id} board={item} Change={this.Change} chance="X"
            color={list[this.state.theme]} winner={winner}/>)        
            
            //Resulting UI of the webpage
        return (
            <div>
                <h1 className="display1 text-primary p-md-4" style={{ color: '#3700B3', backgroundColor: "#121212" }}>Single Player</h1>
                <div>
                    <a href="/">
                        <button className="float-left btn btn-dark" style={{ fontSize: '20px' }}>Main menu</button>
                    </a>
                    {winner ?
                        <>
                            <a href="/single"><button className="float-right btn btn-dark" style={{ fontSize: "20px" }} onClick={this.theme}>Play Again</button></a>
                            {winner !== "tie" ? <h2 className="offset-md-1">Winner is {winner}!!</h2> : <h2>It's a {winner}!!</h2>}
                            {items}
                        </>
                        : <>
                            <button className="float-right btn btn-dark" style={{ fontSize: "20px" }} onClick={this.theme}>Change Theme</button>
                                <button className="float-right btn btn-dark" onClick={this.reset} style={{ fontSize: '20px' }}>Reset</button>
                            <h2 className="offset-2">Play Wisely Against AI</h2>
                            {items}
                        </>}
                </div>
            </div>
        )
    }
}

export default Single
