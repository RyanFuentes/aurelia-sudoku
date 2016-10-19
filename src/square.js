export class Square {
  constructor(index, {val, locked}) {
    this.val = val;
    this.col = index % 9;
    this.row = Math.floor(index / 9);
    this.quadC = Math.floor((index % 9) / 3);
    this.quadR = Math.floor(Math.floor(index / 9) / 3);
    this.locked = locked;
    this.valuesInProximity = [];
  }
}
