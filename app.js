function factorial(n) {
  //guard clause
  if (n <= 0) {
    return "negative number or 0";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(-2));

function getUserScore(user) {
  if (!user) {
    return;
  }
}

function newFactorial(n) {
  let result = 1;
  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  console.log(factorial(3));
}
