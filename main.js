// المتغيرات
let title = document.querySelector(".title");
let turn = "x";
let squares = [];

// الدالة الرئيسية للعبة
function game(id) {
  let element = document.getElementById(id);
  if (!element.innerHTML.trim()) {
    if (turn === "x") {
      element.innerHTML = 'x';
      turn = 'o';
      title.innerHTML = "O Turn";
    } else {
      element.innerHTML = 'o';
      turn = 'x';
      title.innerHTML = "X Turn";
    }
    winner();
  }
}

// الدالة التي تتحقق من الفوز
function winner() {
  for (let i = 1; i <= 9; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }

  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  for (let combo of winningCombinations) {
    if (squares[combo[0]] && squares[combo[0]] === squares[combo[1]] && squares[combo[1]] === squares[combo[2]]) {
      end(combo[0], combo[1], combo[2]);
      return;
    }
  }
}

// الدالة المساعدة التي تعلن عن الفائز وتعيد تحميل الصفحة
function end(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} wins!`;
  document.getElementById('item' + num1).style.backgroundColor = '#000';
  document.getElementById('item' + num2).style.backgroundColor = '#000';
  document.getElementById('item' + num3).style.backgroundColor = '#000';
  setInterval(function () { title.innerHTML += '.'; }, 1000);
  setTimeout(function () { location.reload(); }, 4000);
}