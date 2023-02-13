
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix) {
        return []
    }

    let arr = []; 
     
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            matrix[i] = matrix[i].reverse();
        }
        arr = arr.concat(matrix[i])    
    }
  return arr;
    
}
