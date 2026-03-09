const { findWord } = require("../src/wordSearch")

describe("Word Search Kata", () => {

    test("finds KHAN left to right", () => {
        const grid = [
            ["K", "H", "A", "N"],
            ["B", "O", "N", "E"],
            ["T", "E", "S", "T"],
        ];

        const result = findWord(grid, "KHAN")

        expect(result).toEqual([
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0]
        ])
    })

    test("finds KHAN vertically", () => {
        const grid = [
            ["K", "H", "A", "E"],
            ["H", "H", "A", "E"],
            ["A", "H", "A", "E"],
            ["N", "H", "A", "E"],
        ]

        const result = findWord(grid, "KHAN")

        expect(result).toEqual([
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3]
        ])
    })

})