var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name? ');

console.log("Welcome " + userName + " ,do you know Kaustubh ? ");
score = 0
// / var userAnswer = readlineSync.question('your ans is ?');
function game (question,answer){

var userAnswer = readlineSync.question(question);
if (userAnswer === answer) {
console.log("right")
score++
}else {
console.log("wrong")
}
console.log("current score:" ,score);
console.log('---------')
}

var question = [
questionOne ={
question: "Who is my favorite superhero? ",
answer: "Ironman",
},
questionTwo ={
question: "Which is my favorite sad song? ",
answer: "Kabira",
},
questionThree ={
question: "Which is my favorite sad song? ",
answer: "Kabira",
},
questionFour ={
question: "Which is my favorite actor? ",
answer: "Amir Khan",
},
questionFive ={
question: "Which is my favorite food ? ",
answer: "Pavbhaji",
},
]

for (i=0 ; i<question.length;i++){
currentQuestion = question[i]
game(currentQuestion.question,currentQuestion.answer);
}

