import {BindingEngine} from 'aurelia-binding';
import {inject} from 'aurelia-framework';

import {PuzzleGenerator} from './puzzle-generator';

import {Square} from './square';

@inject(BindingEngine, PuzzleGenerator)
export class sudoku {
  squares = [];

  constructor(bindingEngine, puzzleGenerator) {
    this.squares = puzzleGenerator.getPuzzle().map((sq, i) => new Square(i, sq));

    this.squares.forEach(sq => {
      this.updateValuesInProximity(sq);

      bindingEngine
        .propertyObserver(sq, 'val')
        .subscribe(() => {
          this.getSquaresInProximityTo(sq)
            .concat(sq)
            .forEach(s => this.updateValuesInProximity(s));
        });
    });
  }

  getSquaresInProximityTo(square) {
    return this.squares.filter(sq => {
      return (
        (square !== sq) && (
          square.col === sq.col ||
          square.row === sq.row ||
          (square.quadC === sq.quadC && square.quadR === sq.quadR)));
    });
  }

  updateValuesInProximity(square) {
    let valuesInProx = this.getSquaresInProximityTo(square)
      .filter(sq => sq.val)
      .map(sq => sq.val);

    square.valuesInProximity = valuesInProx;
  }

}
