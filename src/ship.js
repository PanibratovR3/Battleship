class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunkFlag = false;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    if (this.hits === this.length) {
      return (this.sunkFlag = true);
    }
    return this.sunkFlag;
  }
}

export { Ship };
