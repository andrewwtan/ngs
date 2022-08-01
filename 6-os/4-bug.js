function convertArrayToObject(arr) {
  return arr.reduce((curr, acc) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
}

const obj = convertArrayToObject([
  [1, 'One'],
  [2, 'Two'],
  [3, 'Three'],
  [4, 'Four'],
  [5, 'Five'],
]);

console.log(obj);
/* Should output:

  {
    1: 'One',
    2: 'Two',
    3: 'Three'
    4: 'Four',
    5: 'Five'
  }

*/

// this convertArrayToObject has a bug - curr and acc is swapped producing:
// ~/dev/plural/ngs/6-os   master ±  node 4-bug.js
// [ 5, 'Five', <2 empty items>, 'Four'