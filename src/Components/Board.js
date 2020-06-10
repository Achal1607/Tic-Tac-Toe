import React from 'react'

export default function Board(props) {

    const handleClick = () => {
        if (props.board.isSelected === "X" || props.board.isSelected === "O") { props.board.isSelected = null }
        else { props.board.isSelected = props.chance }
        return props.Change(props.board)
    }
    const button = { height: "200px", width: "200px", border: "solid 10px black" }
    const list = ["btn btn-danger", "btn btn-primary", "btn btn-success", "btn btn-dark", "btn btn-info", "btn btn-warning", "btn btn-default"]
    if (props.winner === null)
        return (
            <>
                {props.board.id === 3 || props.board.id === 6 ? <br /> : null}
                <button className={props.color} style={button} onClick={handleClick}>
                    {props.board.isSelected === "X" ? <span style={{ fontSize: "100px" }}>X</span> : null}
                    {props.board.isSelected === "O" ? <span style={{ fontSize: "100px" }}>O</span> : null}</button>
            </>
        )
    else {
        return (
            <>
                {props.board.id === 3 || props.board.id === 6 ? <br /> : null}
                <button className={list[6]} style={button} onClick={handleClick}>
                    {props.board.isSelected === "X" ? <span style={{ fontSize: "100px" }}>X</span> : null}
                    {props.board.isSelected === "O" ? <span style={{ fontSize: "100px" }}>O</span> : null}</button>
            </>
        )
    }
}

