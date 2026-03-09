function resetStates() {
    return {
        coordinates: [],
        found: true
    }
}

function horizontalSearch(grid, word, row, col, direction) {

    let { coordinates, found } = resetStates()
    for (let w = 0; w < word.length; w++) {

        //direction = 1 left to right
        //direction = -1 right to left
        let directionColum = col + w * direction
        if (grid[row]?.[directionColum] !== word[w]) {
            found = false
            break
        }
        coordinates.push([directionColum, row])
    }

    // all letters matched horizontally
    if (found) return coordinates

    return null
}

function verticalSearch(grid, word, row, col, direction) {

    let { coordinates, found } = resetStates()

    for (let w = 0; w < word.length; w++) {

        //direction = 1 left to right
        //direction = -1 right to left
        let directionRow = row + w * direction

        if (grid[directionRow]?.[col] !== word[w]) {
            found = false
            break
        }
        coordinates.push([col, directionRow])
    }

    // all letters matched horizontally
    if (found) return coordinates

    return null
}

function findWord(grid, word) {



    for (let row = 0; row < grid.length; row++) {

        for (let col = 0; col < grid[row].length; col++) {
            let { coordinates, found } = resetStates()

            // horizontal search
            let result = horizontalSearch(grid, word, row, col, 1)
            if (result) return result;


            //  vertical search
            result = verticalSearch(grid, word, row, col, 1)
            if (result) return result;


            // diagonal down-right search
            ({ coordinates, found } = resetStates())
            for (let w = 0; w < word.length; w++) {
                if (grid[row + w]?.[col + w] !== word[w]) {
                    found = false
                    break;
                }
                coordinates.push([col + w, row + w]);
            }
            // all letters matched diagonally
            if (found) return coordinates;


            // horizontal right-to-left search
            result = horizontalSearch(grid, word, row, col, -1)
            if (result) return result;

            //vertical search bot to top
            result = verticalSearch(grid, word, row, col, -1)
            if (result) return result;

        }
    }
    return null;
}

module.exports = { findWord }