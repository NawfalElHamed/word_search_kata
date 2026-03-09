function resetStates() {
    return {
        coordinates: [],
        found: true
    }
}


function findWord(grid, word) {



    for (let row = 0; row < grid.length; row++) {

        for (let col = 0; col < grid[row].length; col++) {
            let { coordinates, found } = resetStates()

            // horizontal search

            //try to match the word

            for (let w = 0; w < word.length; w++) {

                if (grid[row][col + w] !== word[w]) {
                    found = false
                    break
                }
                coordinates.push([col + w, row])
            }

            // all letters matched horizontally

            if (found) return coordinates;

            //  vertical search

            // reset and try again but going down this time
            ({ coordinates, found } = resetStates())

            for (let w = 0; w < word.length; w++) {


                if (grid[row + w]?.[col] !== word[w]) {
                    found = false
                    break
                }

                coordinates.push([col, row + w])
            }
            // all letters matched vertically
            if (found) return coordinates;

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
            if (found) return coordinates
        }
    }
    return null;
}

module.exports = { findWord }