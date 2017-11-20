let prevArray = (size) => new Array(size).fill(0).map((x) => x = Math.floor(Math.random()*2) );
let grid = (size) => new Array(size).fill(size).map(prevArray);

/* 
if cell is 1 {
2 =< live neighbours => 0
=< 1  live neigbour => 1
}
if cell is 0 {
  2 =< live neighbours => 1
}
*/
