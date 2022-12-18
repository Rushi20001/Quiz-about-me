var readlinesync = require("readline-sync")
var userName = readlinesync.question("what's your name? ")
console.log("hello " + userName + ". welcome to DO YOU KNOW RUSHI?")
var score = 0;

function play(question, answer) {     
  var userAnswer = readlinesync.question(question)

  if (answer.toUpperCase() === userAnswer.toUpperCase()) {   
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");
    score = score - 1;
  }
  console.log("your score:" + score)
  console.log(".......");
}


var question = [{
  question: "where do i live?",
  answer: "nashik",
},
{
  question: "who is my favorite cricketer?",
  answer: "rohit sharma",
},
{
  question: "which is my favorite web series?",
  answer: "stranger things",
},
{
  question: "who is my favorite superhero?",
  answer: "batman",
},
{
  question: "which is my favorite IPL team?",
  answer: "mumbai indians",
}
]

for (var i = 0; i < question.length; i++) {
  var currentQuestion = question[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("you scored:", score)

