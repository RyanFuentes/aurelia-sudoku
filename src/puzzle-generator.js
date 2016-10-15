const samplePuzzle = [
  1,0,9,3,0,0,0,8,0,
  0,0,0,0,0,7,0,0,0,
  0,0,5,0,0,0,9,3,6,
  2,0,1,9,0,0,0,0,0,
  9,7,4,0,8,0,6,5,2,
  0,0,0,0,0,2,1,0,9,
  5,8,6,0,0,0,4,0,0,
  0,0,0,5,0,0,0,0,0,
  0,9,0,0,0,1,5,0,8
];

export class PuzzleGenerator {
  getPuzzle() {
    return samplePuzzle.map((n, index) => ({
      val: n ? n.toString() : '',
      col: index % 9,
      row: Math.floor(index / 9),
      quadC: Math.floor((index % 9) / 3),
      quadR: Math.floor(Math.floor(index / 9) / 3),
      locked: !!n
    }));
  }
}
