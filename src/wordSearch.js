function findWord(grid, word) {



    for (let row = 0; row < grid.length; row++) {

        for (let col = 0; col < grid[row].length; col++) {
            let coordinates = []
            let found = true

            // horizontal search

            //try to match the word

            for (let w = 0; w < word.length; w++) {

                let letterInGrid = grid[row][col + w]
                let letterInWord = word[w]

                if (letterInGrid != letterInWord) {
                    found = false;
                    break
                }

                coordinates.push([col + w, row])
            }

            // all letters matched horizontally

            if (found && coordinates.length === word.length) return coordinates

            //  vertical search

            // reset and try again but going down this time
            coordinates = []
            found = true

            for (let w = 0; w < word.length; w++) {


                // using ?. to avoid crashing if we go out of bounds
                let letterInGrid = grid[row + w]?.[col]


                let letterInWord = word[w]

                // letter doesn't match, stop here
                if (letterInGrid != letterInWord) {
                    found = false;
                    break
                }

                coordinates.push([col, row + w])
                // all letters matched vertically
                if (found && coordinates.length === word.length) return coordinates
            }
        }
    }
    return null;
}

module.exports = { findWord }