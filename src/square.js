export class Square {
  activate(square) {
    this.square = square;
  }

  keyPressed = (e) => {
    if (e.which >= 49 && e.which <= 57) {
      this.square.val = (e.which - 48).toString();
      e.target.blur();
    } else if (e.which === 27 || e.which === 8) {
      this.square.val = '';
      e.target.blur();
    }
    e.preventDefault();
  }
}
