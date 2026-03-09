function findWord(grid, word) {

    let coordinates = []
    let found = true

    for (let row = 0; row < grid.length; row++) {

        for (let col = 0; col < grid[row].length; col++) {

            for (let w = 0; w < word.length; w++) {

                let letterInGrid = grid[row][col + w]
                let letterInWord = word[w]

                if (letterInGrid != letterInWord) {
                    found = false;
                    break
                }

                coordinates.push([col + w, row])
                if (found && coordinates.length === word.length) return coordinates
            }
        }
    }
    return null;
}

module.exports = { findWord }