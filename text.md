#### This is the selection (decision-making code - if, elif, else):

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

#### This is the iteration (code that loops):

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

#### This is sequencing (order of which code is performed):

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

  DOMSelectors.history.insertAdjacentHTML(
    "afterbegin",
    `<h2>Win Rate: ${((win / (win + lose + draw)) * 100)
      .toString()
      .substring(0, 5)}%</h2>
        <h3>Wins: ${win} | Losses: ${lose} | Draws: ${draw}</h3>`
  );
}
```

#### This shows an algorithm (Includes Sequencing, Selection, Iteration):

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
