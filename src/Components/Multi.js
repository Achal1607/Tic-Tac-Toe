import React, { Component } from 'react'
import Game from './Game'
import Board from './Board'
import Winner from './Winner'

class Multi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            board: Game,
            isNext: "X",
            theme: 0,
            win: null,
            Score: { X: 0, O: 0 }
        }
    }

    Change = (items) => {
        this.setState(prevState => {
            const updatedState = prevState.board.map(item => {
                if (item.id === items.id) {
                    item.isSelected = items.isSelected
                }
                return item
            })
            if (prevState.isNext === "X")
                return { board: updatedState, isNext: "O" }
            else
                return { board: updatedState, isNext: "X" }

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
            return { board: Reset, isNext: "X" }
        })
    }

    render() {
        //winner
        let winner = Winner(this.state.board)
        //List of themes
        const list = ["btn btn-danger", "btn btn-primary", "btn btn-success", "btn btn-dark", "btn btn-info", "btn btn-warning", "btn btn-default"]

        //Board Details
        const items = this.state.board.map(item => <Board key={item.id} board={item} Change={this.Change} chance={this.state.isNext}
            color={list[this.state.theme]} winner={winner} />)

        //Resulting UI of the webpage
        return (
            <div>
                <h1 className="display1 text-primary p-md-4" style={{ color: '#3700B3', backgroundColor: "#121212" }}>Multi Player</h1>
                <div>
                    <a href="/">
                        <button className="float-left btn btn-dark" style={{ fontSize: '20px' }}>Main menu</button>
                    </a>
                    {winner ?
                        <> <a href="/multi"><button className="float-right btn btn-dark" style={{ fontSize: "20px" }} onClick={this.theme}>Play Again</button></a>
                            {winner !== "tie" ? <h2 className="offset-md-1">Winner is {winner}!!</h2> : <h2>It's a {winner}!!</h2>}
                            {items}
                        </>
                        : <>
                            <button className="float-right btn btn-dark" style={{ fontSize: "20px" }} onClick={this.theme}>Change Theme</button>
                            <button className="float-right btn btn-dark" style={{ fontSize: '20px' }} onClick={this.reset}>Reset</button>
                            <h2 className="offset-2">Next turn is of {this.state.isNext}</h2>
                            {items}
                        </>}
                </div>
            </div>
        )
    }
}

export default Multi
