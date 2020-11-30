var readLineSync = require("readline-sync");

var userName = readLineSync.question("Please let us know your name ? ");
console.log("") //for new line break

console.log("Hi " + userName  + "  Welcome to Football Quiz !");
console.log("")

console.log("Lets see how much you know about this game");
console.log("")

console.log("Plase Use First letter of Answer Capital. " + "     Example : 'Chetan' ")
console.log(" ")
console.log(" ")

var highScores =[
  {
    name : "Chetan",
    score : 10
  },
  {
    name : "Cristaino",
    score : 9
  }
]

var score = 0;

function footBallQuiz (question , answer){
    var footanswer = readLineSync.question(question);

    if(footanswer.toString() === answer.toString()){
      console.log("You are right ");
      score++
    }
    else {
      console.log("You are wrong!");
      console.log("But No problem ! No negative Marking");
    }

    console.log("Your current score is : " + score);
    console.log("*********");
}

var footQuestionList = [
  {
    question : "How is the Active player with most International Goals ? ",
    answer : "Ronaldo"
  },
  {
    question : "Which Football Team Won the most FIFA  World Cups ? ",
    answer : "Brazil" 
  },
  {
    question : "Name the 2020 Golden Boy award winner ? ",
    answer : "Haland"
  },
  {
    question : "Youngest Player to score in Football World Cup final in this decade? ",
    answer : "Mbappe"
  },
  {
    question : "Who is the only player to have won three World Cups ? ",
    answer : "Pele"
  },
  {
    question : "Does Real Madrid has most number of champinos league titile ? ",
    answer : "Yes"
  },
  {
    question : "Is Ronaldo the highest goal scorer in champions league ? ",
    answer : "Yes"
  },
  {
    question : "Is messi the best player ? ",
    answer : "No"
  },
  {
    question : "Is Laliga better than Premier League ? ",
    answer : "Yes"
  },
  {
    question : "Is Ronaldo better than Messi ? ",
    answer : 'Yes'
  }
]

for(var i = 0; i <  footQuestionList.length ; i++) {
  var footquestion = footQuestionList[i];
  footBallQuiz(footquestion.question, footquestion.answer);
}

console.log(" ")
console.log("Yessss ! You have completed the quiz");
console.log(" ");
console.log("Your final Score is : " + score);

console.log("Check Other High Scores : " );
for(var i = 0 ; i<highScores.length; i++){
  var highscoresit = highScores[i]
  console.log("Name :" + highscoresit.name + + "  "+" Score : " + highscoresit.score);
}

