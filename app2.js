// n = parking spaces
// first line of input containger intefer N (1<=N<=100)
// C indicates occupied space
// . indicates empty parking space

// **first line of input indicates how many total parking spaces there are**

// take the second line of input which is C (# of parking spaces occupied yesterday)
// then take the third lineidentify how many "c" (parking spaces are occupied today)
// compare the # of "c" (spaces occupied today)

function numberofparking(N, yesterday, today) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (yesterday[i] === "C" && today[i] === "C") {
      count++;
    }
  }
  return count;
}
console.log(numberofparking(5, "CC..C", ".CCCC"));
