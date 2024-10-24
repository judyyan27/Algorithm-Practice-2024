//Using Pseudocode write a function that converts decimal to binary

//function toBinary(decimal) {}

//Using Pseudocode write a function to convert binary to decimal

function toDecimal(binary) {
  const num = [128, 64, 32, 16, 8, 4, 2, 1];
  let dec = 0;

  for (let i = 0; i <= 8; i++) {
    if (binary[i] === "1") {
      dec = dec + num[i];
    }
  }
  console.log(dec);
}

console.log(toDecimal("11111111"));

//00000000
