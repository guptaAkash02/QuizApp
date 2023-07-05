const questions = [
  {
    que: "what does css stands for",
    a: "Case Cading Style",
    b: "Hyper Text Marcup Language",
    c: "Json Object Notation ",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    que: "what year was javascript lanched?",
    a: "1996",
    b: "1995",
    c: "1994 ",
    d: "None of the above",
    correct: "b",
  },
  {
    que: "which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "Javascript",
    d: "PHP",
    correct: "a",
  },
];

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;

const loadQuestion = () => {
  if (index === total) {
    return quizfun();
  }
  reset();
  const data = questions[index];
  document.querySelector("h2").innerText = `${index + 1} ${data.que}`;
  let inputOption = document.querySelectorAll(".options");

  inputOption[0].nextElementSibling.innerText = data.a;
  inputOption[1].nextElementSibling.innerText = data.b;
  inputOption[2].nextElementSibling.innerText = data.c;
  inputOption[3].nextElementSibling.innerText = data.d;
};
const getAnswer = () => {
  let inputOption = document.querySelectorAll(".options");
  let answer;
  inputOption.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
document.querySelector("#btn").addEventListener("click", () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
});

const reset = () => {
  let inputOption = document.querySelectorAll(".options");
  inputOption.forEach((input) => {
    input.checked = false;
  });
};
const quizfun = () => {
  document.querySelector(".box").innerHTML = `
    <div style ="text-align:center">
     <h3> Thank you for playing the game</h3>
     <h2> your correct answer is ${right}/${total}</h2>
    </div>
    `;
};
loadQuestion();
