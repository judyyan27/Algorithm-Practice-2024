#### This is the selection:

```javascript
function returnInput(input) {
  let output;

  if (input == 0) {
    output = "rock";
  } else if (input == 1) {
    output = "paper";
  } else {
    output = "scissors";
  }

  return output;
}
```

#### This is the iteration:

```javascript
for (let i = 0; i <= random; i++) {
  if (i % 3 == 0) {
    opponentChoice = "rock";
  } else if (i % 2 == 0) {
    opponentChoice = "paper";
  } else {
    opponentChoice = "scissors";
  }
}
```

#### This shows an algorithm:

```javascript
function getHistory() {
  DOMSelectors.content.innerHTML = "";
  DOMSelectors.history.innerHTML = "";
  let win = 0;
  let lose = 0;
  let draw = 0;

  for (let i = 0; i < history.length; i++) {
    if (history[i] == "win") {
      win++;
    } else if (history[i] == "lose") {
      lose++;
    } else {
      draw++;
    }

    DOMSelectors.history.insertAdjacentHTML(
      "afterbegin",
      `<div class="historyCard" id="${history[i]}">
        <h4>Game ${i + 1}: ${history[i].toUpperCase()}</h4>
        </div>`
    );
  }
```
