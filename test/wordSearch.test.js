const {
  findWord,
  inputToWordAndGrid,
  findMultipleWords,
  formatResults,
} = require("../src/wordSearch");

describe("Word Search Kata", () => {
  test("finds KHAN left to right", () => {
    const grid = [
      ["K", "H", "A", "N"],
      ["B", "O", "N", "E"],
      ["T", "E", "S", "T"],
    ];

    const result = findWord(grid, "KHAN");

    expect(result).toEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ]);
  });

  test("finds KHAN top to bottom", () => {
    const grid = [
      ["K", "H", "A", "E"],
      ["H", "H", "A", "E"],
      ["A", "H", "A", "E"],
      ["N", "H", "A", "E"],
    ];

    const result = findWord(grid, "KHAN");

    expect(result).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ]);
  });

  test("finds KHAN diagonally down to right", () => {
    const grid = [
      ["K", "X", "X", "X"],
      ["X", "H", "X", "X"],
      ["X", "X", "A", "X"],
      ["X", "X", "X", "N"],
    ];

    const result = findWord(grid, "KHAN");

    expect(result).toEqual([
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ]);
  });
  test("finds KHAN right to left", () => {
    const grid = [
      ["N", "A", "H", "K"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
    ];

    const result = findWord(grid, "KHAN");

    expect(result).toEqual([
      [3, 0],
      [2, 0],
      [1, 0],
      [0, 0],
    ]);
  });
  test("finds KHAN bottom to top", () => {
    const grid = [
      ["N", "H", "A", "E"],
      ["A", "H", "A", "E"],
      ["H", "H", "A", "E"],
      ["K", "H", "A", "E"],
    ];

    const result = findWord(grid, "KHAN");

    expect(result).toEqual([
      [0, 3],
      [0, 2],
      [0, 1],
      [0, 0],
    ]);
  });
  // diagonally from bottom - left to top - right
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
      [3, 0],
    ]);
  });

  // diagonally from top-right to bottom-left
  test("finds KHAN diagonally down to left", () => {
    const grid = [
      ["X", "X", "X", "K"],
      ["X", "X", "H", "X"],
      ["X", "A", "X", "X"],
      ["N", "X", "X", "X"],
    ];

    const result = findWord(grid, "KHAN");

    expect(result).toEqual([
      [3, 0],
      [2, 1],
      [1, 2],
      [0, 3],
    ]);
  });
  // diagonally from bottom_left to rop-right
  test("finds KHAN diagonally up-left", () => {
    const grid = [
      ["N", "X", "X", "X"],
      ["X", "A", "X", "X"],
      ["X", "X", "H", "X"],
      ["X", "X", "X", "K"],
    ];

    const result = findWord(grid, "KHAN");

    expect(result).toEqual([
      [3, 3],
      [2, 2],
      [1, 1],
      [0, 0],
    ]);
  });
  test("parses the input into words and grid", () => {
    const input = `
            BONES,KHAN,KIRK
            B,O,N,E,S
            K,H,A,N,X
            K,I,R,K,X`;

    const result = inputToWordAndGrid(input);

    expect(result).toEqual({
      words: ["BONES", "KHAN", "KIRK"],
      grid: [
        ["B", "O", "N", "E", "S"],
        ["K", "H", "A", "N", "X"],
        ["K", "I", "R", "K", "X"],
      ],
    });
  });

  //same thing as findWord just this one support multiple words
  test("finds multiple words in the grid", () => {
    const grid = [
      ["K", "H", "A", "N"],
      ["B", "O", "N", "E"],
    ];

    const words = ["KHAN", "BONE"];

    const result = findMultipleWords(grid, words);

    expect(result).toEqual({
      KHAN: [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
      BONE: [
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
      ],
    });
  });

  test("formats the results for all found words", () => {
    const results = {
      KHAN: [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
      BONE: [
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
      ],
    };

    const words = ["KHAN", "BONE"];

    const formatted = formatResults(results, words);

    expect(formatted).toBe(
      "KHAN: (0,0),(1,0),(2,0),(3,0)\nBONE: (0,1),(1,1),(2,1),(3,1)",
    );
  });

  // a Test that combines all the previous tests to solve the full kata puzzle
  test("solves the full kata puzzle", () => {
    const input = `
BONES,KHAN,KIRK,SCOTTY,SPOCK,SULU,UHURA
U,M,K,H,U,L,K,I,N,V,J,O,C,W,E
L,L,S,H,K,Z,Z,W,Z,C,G,J,U,Y,G
H,S,U,P,J,P,R,J,D,H,S,B,X,T,G
B,R,J,S,O,E,Q,E,T,I,K,K,G,L,E
A,Y,O,A,G,C,I,R,D,Q,H,R,T,C,D
S,C,O,T,T,Y,K,Z,R,E,P,P,X,P,F
B,L,Q,S,L,N,E,E,E,V,U,L,F,M,Z
O,K,R,I,K,A,M,M,R,M,F,B,A,P,P
N,U,I,I,Y,H,Q,M,E,M,Q,R,Y,F,S
E,Y,Z,Y,G,K,Q,J,P,C,Q,W,Y,A,K
S,J,F,Z,M,Q,I,B,D,B,E,M,K,W,D
T,G,L,B,H,C,B,E,C,H,T,O,Y,I,K
O,J,Y,E,U,L,N,C,C,L,Y,B,Z,U,H
W,Z,M,I,S,U,K,U,R,B,I,D,U,X,S
K,Y,L,B,Q,Q,P,M,D,F,C,K,E,A,B
`;

    const result = solveWordSearch(input);

    expect(result).toBe(
      `BONES: (0,3),(1,3),(2,3),(3,3),(4,3)
KHAN: (5,9),(5,8),(5,7),(5,6)
KIRK: (4,7),(3,7),(2,7),(1,7)
SCOTTY: (0,5),(1,5),(2,5),(3,5),(4,5),(5,5)
SPOCK: (0,11),(1,10),(2,9),(3,8),(4,7)
SULU: (3,13),(4,13),(5,13),(6,13)
UHURA: (4,0),(3,1),(2,2),(1,3),(0,4)`,
    );
  });
});
