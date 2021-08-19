const Matrix = require('./matrix.js');

const m = new Matrix([[1, 2, -11, 121, 3], [3, 4, -1, -43, 13]]);
const n = new Matrix([[-1, 2, 15], [-7, 4, -17], [9, 1, 19], [91, 48, 87], [-91, 11, -3]]);
const mul = m.multiply(n);
m.dimension();
console.log();
n.dimension();
console.log();
mul.dimension();
