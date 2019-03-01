/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  let result = 0;
preferences.forEach(function(item, i, arr){
  if(i === preferences[preferences[preferences[i]-1]-1]-1){
    result++;	
  }
})

return Math.trunc(result / 3);
};
