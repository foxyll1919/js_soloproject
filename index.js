let scoreEl = document.getElementById("score1")
let scoreEl1 = document.getElementById("score2")

let score_1 = 0;
let score_2 = 0;

function add1(){
  score_1 += 1;
  scoreEl.textContent = score_1;
}

function add2(){
  score_1 += 2;
  scoreEl.textContent = score_1;
}

function add3(){
  score_1 += 3;
  scoreEl.textContent = score_1;
}

function add1In2(){
  score_2 += 1;
  scoreEl1.textContent = score_2;
}

function add2In2(){
  score_2 += 2;
  scoreEl1.textContent = score_2;
}

function add3In2(){
  score_2 += 3;
  scoreEl1.textContent = score_2;
}