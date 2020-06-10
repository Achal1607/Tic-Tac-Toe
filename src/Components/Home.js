import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            Player1Name: "",
            Player2Name: ""
        }
    }

    render() {
        const item = { fontSize: '40px', backgroundColor: "red", color: "white", margin: "20px", padding: "20px", borderRadius: "50%", border: "solid 5px yellow" }
        const box = { marginTop: "160px", border: "solid 10px black", width: '500px', backgroundColor: "blue", height: "350px" }
        return (
            <>
                <div style={{ backgroundColor: "#121212" }}>
                    <h1 className="display1 text-primary p-md-4" style={{ color: '#3700B3' }}>Welcome to Tic Tac Toe</h1>
                </div>
                <div className="offset-md-4" style={box}>
                    <span className="m-md-5"><a href="/single"><button style={item}>Single Player</button></a></span>
                    <span className="m-md-5"><a href="/multi"><button style={item}>Multi Player</button></a></span>
                </div>
            </>
        )
    }
}

export default Home
