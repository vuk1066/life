let i,
  j,
  n = 30,
  ewArray = [],
  arrayRow = [],
  arraColumn = [];

let prevArray = new Array();
for (i= 0; i < n; i++){
  prevArray[i] = new Array();
    for (j= 0; j < n; j++){
      prevArray[i][j] = Math.floor(Math.random()*2);
    }
}

let newArray = prevArray.map(prevArray[i][j] = Math.floor(Math.random()*2))

console.log(prevArray);
console.log(newArray);
