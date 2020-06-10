//Algo for AI to play against human very famously known as multimax

import Winner from './Winner'
export default function BestMove(board) {
    let bestScore = Infinity
    let move = null
    for (let i = 0; i < 9; i++) {
        //Is Spot Available??
        if (board[i].isSelected === null) {
            board[i].isSelected = "O"
            let score = Minimax(board, 0, true)
            board[i].isSelected = null
            if (score < bestScore) {
                bestScore = score
                move = board[i].id
            }
        }
    }
    return move
}

let scores = {
    X: 10,
    O: -10,
    tie: 0
}

function Minimax(board, depth, isMaximizing) {
    let result = Winner(board)
    if (result !== null) {
        if(result==="X")
        {return scores[result]-depth;}
        else if(result==="O")
        {return scores[result]+depth;}
        else
        {return scores[result];}
    }

    if (isMaximizing) {
        let bestScore = -Infinity
        for (let i = 0; i < 9; i++) {
            //Is Spot Available??
            if (board[i].isSelected === null) {
                board[i].isSelected = "X"
                let score = Minimax(board, depth + 1, false)
                board[i].isSelected = null
                bestScore = Math.max(score, bestScore)
            }
        }
        return bestScore
    }
    else {
        let bestScore = Infinity
        for (let i = 0; i < 9; i++) {
            //Is Spot Available??
            if (board[i].isSelected === null) {
                board[i].isSelected = "O"
                let score = Minimax(board, depth + 1, true)
                board[i].isSelected = null
                bestScore = Math.min(score, bestScore)
            }
        }
        return bestScore
    }
}