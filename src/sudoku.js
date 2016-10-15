import {BindingEngine} from 'aurelia-binding';
import {inject} from 'aurelia-framework';

import {PuzzleGenerator} from './puzzle-generator';


@inject(BindingEngine, PuzzleGenerator)
export class sudoku {
  squares = [];

  constructor(bindingEngine, puzzleGenerator) {
    this.squares = puzzleGenerator.getPuzzle();

    this.squares.forEach(sq => {
      bindingEngine
        .propertyObserver(sq, 'val')
        .subscribe(() => this.squareUpdated(sq));
    });
  }

  squareUpdated = (square) => {
    square.error = false;
    this.getSquaresConnectedTo(square).forEach(sq => {
      if (square.val !== '' && square.val === sq.val) {
        square.error = true;
        sq.error = true;
      } else {
        sq.error = false;
      }
    });
  };

  getSquaresConnectedTo(square) {
    return this.squares.filter(sq => {
      return (
        (square !== sq) && (
          square.col === sq.col ||
          square.row === sq.row ||
          (square.quadC === sq.quadC && square.quadR === sq.quadR)));
    });
  }

}
