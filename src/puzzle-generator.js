const samplePuzzle = [
  0,0,0,7,8,5,0,9,0,
  0,0,9,0,0,0,5,0,0,
  0,0,0,0,0,2,4,0,0,
  4,2,0,8,0,0,0,0,5,
  0,8,0,0,0,0,0,3,0,
  9,0,0,0,0,4,0,6,7,
  0,0,3,1,0,0,0,0,0,
  0,0,2,0,0,0,1,0,0,
  0,7,0,3,5,9,0,0,0
];

export class PuzzleGenerator {
  getPuzzle() {
    return samplePuzzle.map(n => ({
      val: n ? n.toString() : '',
      locked: !!n
    }));
  }
}
