let li = document.getElementsByTagName('li');
let h = document.getElementsByTagName('h1');
let radio = document.getElementsByName('radio');
let input = '<input name="radio" type="radio">';
let quizz = document.getElementsByClassName('quizz');
let innerScore = document.getElementById('score');

let click = 0;
let totalScore = 0;
document.getElementById('next').addEventListener('click', getQuizQuestion);

let arr = [
  ['', '', '', '', '', 2],
  ['Whar is DOM?', 'Hypertext Preprocessor', 'HyperText Markup Language', 'Document Object Model', 'Cascading Style Sheets', 2],
  ['Whar is PHP?', 'Hypertext Preprocessor', 'HyperText Markup Language', 'Document Object Model', 'Cascading Style Sheets', 0],
  ['What is HTML?', 'Cascading Style Sheets', 'Document Object Model', 'HyperText Markup Language', 'Hypertext Preprocessor', 2],
  ['What is AJAX?', 'Alah Juses Apalon Xerox', 'AdaptiveJqueryAsynchroniumXimera', 'HyperText Markup Language', 'Asynchronous Javascript and XML', 3]
];

function getQuizQuestion() {
  finalTest();
  showTest();
  h[0].innerHTML = arr[click][0];
  li[0].innerHTML = input + arr[click][1];
  li[1].innerHTML = input + arr[click][2];
  li[2].innerHTML = input + arr[click][3];
  li[3].innerHTML = input + arr[click][4];
}

function showTest() {
  if (click < arr.length - 1) {
    click++;
  } else {
    quizz[0].classList.add('hidden');
    innerScore.innerHTML = "Ваш результат: " + totalScore + " из " + arr.length
    innerScore.classList.remove('hidden');
  }
}

function finalTest() {
  if (radio[arr[click][5]].checked) {
    totalScore++;
  }
}

