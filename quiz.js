var readlineSync= require('readline-sync');

var name = readlineSync.question("Please enter your name : ")
console.log("Welcome "+name+" to How well do you know Sharan? ")

var questionOne = {
  question: "Which is Sharan's favourite sport? ",
  answer : "Football"
}

var questionTwo = {
  question: "Who is Sharan's favourite fictional character? ",
  answer : "Joker"
}

var questionThree = {
  question: "Which is Sharan's favourite color ? ",
  answer : "Blue"
}

var questionFour = {
  question: "Which is Sharan's favourite MusicBand? ",
  answer : "Linkinpark"
}

var questionFive = {
  question: "Which is Sharan's favourite dessert ? ",
  answer : "Rasmalai"
}

var questionsList = [questionOne,questionTwo,questionThree,questionFour,questionFive]

var score = 0; 

var scores = [
  {
  name: "Prathik",
  score: 4
  },
  {
  name: "Sharath",
  score: 3 
  }           
]   

function highScore(points){
  console.log( points.name + "--> "+ points.score)
}

function quiz(question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    score = score+1;
    console.log("Correct Answer!")
    console.log("---------------------------")
  }
  else{
        console.log("Oops! Wrong Answer!")
        console.log("---------------------------")
  }
  
}
for (var x=0; x < questionsList.length; x++)
  {
  
  quiz(questionsList[x].question,questionsList[x].answer)
  }


console.log("You have scored :" ,score)
console.log("Here are the list of Highscores below ")

scores.map(highScore);
console.log("Send me a screenshot if you have scored more than the highscores !") 