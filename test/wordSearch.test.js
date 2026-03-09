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

    test("finds KHAN top to bottom", () => {
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

    test("finds KHAN diagonally down to right", () => {
        const grid = [
            ["K", "X", "X", "X"],
            ["X", "H", "X", "X"],
            ["X", "X", "A", "X"],
            ["X", "X", "X", "N"],
        ]

        const result = findWord(grid, "KHAN")

        expect(result).toEqual([
            [0, 0],
            [1, 1],
            [2, 2],
            [3, 3]
        ])

    })
    test("finds KHAN right to left", () => {
        const grid = [
            ["N", "A", "H", "K"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
        ];

        const result = findWord(grid, "KHAN")

        expect(result).toEqual([
            [3, 0],
            [2, 0],
            [1, 0],
            [0, 0]
        ])
    })
    test("finds KHAN bottom to top", () => {
        const grid = [
            ["N", "H", "A", "E"],
            ["A", "H", "A", "E"],
            ["H", "H", "A", "E"],
            ["K", "H", "A", "E"],
        ]

        const result = findWord(grid, "KHAN")

        expect(result).toEqual([
            [0, 3],
            [0, 2],
            [0, 1],
            [0, 0]
        ])
    })
    test("finds KHAN diagonally up to right", () => {
        const grid = [
            ["X", "X", "X", "N"],
            ["X", "X", "A", "X"],
            ["X", "H", "X", "X"],
            ["K", "X", "X", "X"],
        ];

        const result = findWord(grid, "KHAN");

        expect(result).toEqual([
            [0, 3],
            [1, 2],
            [2, 1],
            [3, 0]
        ]);
    });


})