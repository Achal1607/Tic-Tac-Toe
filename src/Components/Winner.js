//This is more efficient Algo to delcare winner

export default function Winner(square) {
    let winner = null

    const possibilties = [
        [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
    ]


    for (let i = 0; i < possibilties.length; i++) {
        const [a, b, c] = possibilties[i]
        if (square[a].isSelected && square[a].isSelected === square[b].isSelected && square[a].isSelected === square[c].isSelected) {
            winner = square[a].isSelected
        }
        let openSpots = 0;
        for (let i = 0; i < 9; i++) {
            if (square[i].isSelected === null) {
                openSpots++;
            }
        }
        if (openSpots === 0) {
            winner = 'tie'
        }
    }
    return winner
}