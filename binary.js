//Using Pseudocode write a function that converts decimal to binary

//function toBinary(decimal) {}

//Using Pseudocode write a function to convert binary to decimal

function toDecimal(binary) {
  const num = [1, 2, 4, 8, 16, 32, 64, 128];
  let dec = 0;
  b = binary.reverse;
  console.log(b);
  for (let i = 0; i <= binary.length; i++) {
    if (binary[binary.length - i] === "1") {
      dec = dec + num[i];
    }
  }
  console.log(dec);
}

console.log(toDecimal("1011"));

//00000000
/* 
function binaryToDec(binary) {
  let decimal = 0;
  //     -- reverses the string
  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - 1] === "1") {
      decimal = decimal + Math.pow(2, i);
    }
  }
  return decimal;
}
console.log(binaryToDec("1101"));

//assume decimal is a string
 */
