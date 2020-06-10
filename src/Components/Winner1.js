//This alternative algo is used in declaring winner because this is more efficient

export default function checkWinner(square) {
    let winner = null;

    // horizontal
    for (let i = 0; i < 7; i = i + 3) {
        if (equals3(square[i].isSelected, square[i + 1].isSelected, square[i + 2].isSelected)) {
            winner = square[i].isSelected;
        }
    }

    // Vertical
    for (let i = 0; i < 3; i++) {
        if (equals3(square[i].isSelected, square[i + 3].isSelected, square[i + 6].isSelected)) {
            winner = square[i].isSelected;
        }
    }

    // Diagonal
    if (equals3(square[0].isSelected, square[4].isSelected, square[8].isSelected)) {
        winner = square[0].isSelected;
    }
    if (equals3(square[2].isSelected, square[4].isSelected, square[6].isSelected)) {
        winner = square[2].isSelected;
    }

    //For unfilled places
    let openSpots = 0;
    for (let i = 0; i < 9; i++) {
        if (square[i].isSelected === null) {
            openSpots++;
        }
    }

    //Declaring Status of game
    if (winner === null && openSpots === 0) {
        return 'tie';
    } else {
        return winner;
    }
}

function equals3(a, b, c) {
    return a === b && b === c && a !== '';
}
