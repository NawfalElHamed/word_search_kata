// Resets the search state
function resetStates() {
    return {
        coordinates: [],
        found: true
    }
}

//Searches the word horizontally
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

//Searches the word vertically
function verticalSearch(grid, word, row, col, direction) {

    let { coordinates, found } = resetStates()

    for (let w = 0; w < word.length; w++) {

        //direction = 1 up to bottom
        //direction = -1 bottom to top
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

//Searches the word diagonally
function diagonalSearch(grid, word, row, col, rowDirection, colDirection) {

    let { coordinates, found } = resetStates()

    for (let w = 0; w < word.length; w++) {


        let DirectionRow = row + w * rowDirection
        let DirectionCol = col + w * colDirection

        if (grid[DirectionRow]?.[DirectionCol] !== word[w]) {
            found = false
            break;
        }
        coordinates.push([DirectionCol, DirectionRow]);
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
            result = diagonalSearch(grid, word, row, col, 1, 1)
            if (result) return result;


            // horizontal right-to-left search
            result = horizontalSearch(grid, word, row, col, -1)
            if (result) return result;

            //vertical search bot to top
            result = verticalSearch(grid, word, row, col, -1)
            if (result) return result;

            // diagonal up to right search
            result = diagonalSearch(grid, word, row, col, -1, 1)
            if (result) return result;

            result = diagonalSearch(grid, word, row, col, 1, -1)
            if (result) return result

            result = diagonalSearch(grid, word, row, col, -1, -1)
            if (result) return result
        }
    }
    // Word not found in the grid
    return null;
}

function inputToWordAndGrid(input) {



    const lines = input.trim().split("\n")
    
    const firstLine = lines[0]
    const words = firstLine.trim().split(",")

    const grid = []
    for (let i = 1; i < lines.length; i++) {
        const letters = lines[i].trim().split(",")
        grid.push(letters)
    }

    return { words, grid }
}
module.exports = { findWord, inputToWordAndGrid }