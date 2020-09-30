
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix?([].concat(...matrix.map((x, index)=>((index+1)%2)==0?x.reverse():x))):[]
}
