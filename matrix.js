class Matrix {
  constructor(m, n) {
    // square matrix or given matrix
    if (arguments.length === 1) {
      if (typeof m === "number") {
        this.row = m;
        this.col = m;
        this.data = [...Array(m)].map((x) => Array(m).fill(0));
      } else {
        // initialize with matrix
        this.row = m.length;
        this.col = m[0].length;
        this.data = m;
      }
    }
    // m by n matrix
    if (arguments.length === 2) {
      this.row = m;
      this.col = n;
      this.data = [...Array(m)].map((x) => Array(n).fill(0));
    }
  }

  // get specific item
  pick(m, n) {
    return this.data[m - 1][n - 1];
  }

  transpose() {
    if (this.row === this.col) {
      let newMatrix = [...Array(this.row)].map((x) => Array(this.col).fill(0));
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
          newMatrix[i][j] = this.data[j][i];
        }
      }
      return new Matrix(newMatrix);
    } else {
      return "Its not a square matrix";
    }
  }

  add(other) {
    if (this.row === other.row && this.col === other.col) {
      let newMatrix = [...Array(this.row)].map((x) => Array(this.col).fill(0));
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
          newMatrix[i][j] = this.data[i][j] + other.pick(i + 1, j + 1);
        }
      }
      return new Matrix(newMatrix);
    } else {
      console.log("Unmatched Dimension");
    }
  }

  subtract(other) {
    if (this.row === other.row && this.col === other.col) {
      let newMatrix = [...Array(this.row)].map((x) => Array(this.col).fill(0));
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
          newMatrix[i][j] = this.data[i][j] - other.pick(i + 1, j + 1);
        }
      }
      return new Matrix(newMatrix);
    } else {
      console.log("Unmatched Dimension");
    }
  }

  multiply(other) {
    if (this.col === other.row) {
      let newMatrix = [...Array(this.row)].map((x) => Array(other.col).fill(0));
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
          for (let k = 0; k < this.col; k++) {
            newMatrix[i][j] += this.data[i][k] * other.pick(k + 1, j + 1);
          }
        }
      }
      return new Matrix(newMatrix);
    } else {
      console.log("Not Multipliable");
    }
  }

  trace() {
    if (this.row === this.col) {
      let ans = 0;
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
          if (i === j) {
            ans += this.data[i][j];
          }
        }
      }
      return ans;
    } else {
      return "Its not a square matrix";
    }
  }

  dimension() {
    console.log(`(${this.row}, ${this.col})`);
  }

  print() {
    for (let r = 0; r < this.row; r++) {
      process.stdout.write("|");
      for (let c = 0; c < this.col; c++) {
        process.stdout.write(` ${this.data[r][c]}`);
      }
      process.stdout.write(" |");
      console.log();
    }
  }
}

module.exports = Matrix;
