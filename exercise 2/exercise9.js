function calculateMatrixSum(matrix) {
  return matrix.flat().reduce((sum, val) => sum + val, 0);
}
