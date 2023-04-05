// array for questions
var questions = [
    {
      question: "What are JavaScript Data Types?",
      answers: ["Number", "String", "Boolean", "All of the Above"],
      correctAnswer: 3
    },
    {
      question: "Which company developed JavaScript?",
      answers: ["Tesla", "Microsoft", "Netscape", "Google"],
      correctAnswer: 2
    },
    {
      question: "Which is not a JavaScript looping style?",
      answers: ["For", "From", "While", "Do-while"],
      correctAnswer: 1
    },
    {
      question: "Where are the meta tags found in HTML?",
      answers: ["In the Head", "In the Header", "In the Body", "In the Footer"],
      correctAnswer: 0
    },
    {
      question: "What is CSS",
      answers: ["Central Style Sheet", "Cascading Styling Sheet", "Cascading Style Sheets", "Central Styling Sheets"],
      correctAnswer: 2
    }
  ];
  
  var answers = [
    "d, All of the Above",
    "c, Netscape",
    "b, From",
    "a, In the Head",
    "c, Cascading Style Sheets"
  ];
  // define variables
  var startButton = document.getElementById("start-button");
  var questionContainer = document.querySelector(".quiz-box"); 
  var questionElement = document.querySelector(".question");
  var answerList = document.querySelector(".answer-list");
  var feedbackElement = document.querySelector(".quiz-feedback");
  var scoreSection = document.querySelector(".score-section");
  var scoreDisplay = document.getElementById("score-display");
  var initialsInput = document.getElementById("initials-input");
  var saveScoreButton = document.getElementById("save-scores-button");
  var highScoresList = document.getElementById("high-scores-list");
  var clearScoresButton = document.getElementById("clear-scores-button");
  var currentQuestionIndex = 0;
  var timeLeft = 60;
  var timerInterval;
  var score = 0;
 // add event listeners
 startButton.addEventListener("click", startQuiz);
 answerList.addEventListener("click", handleAnswerSelection);
 saveScoreButton.addEventListener("click", saveScore);
 clearScoresButton.addEventListener("click", clearScores);
  
// functions
function startQuiz(){
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    scoreSection.classList.add("hide");
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    feedbackElement.textContent = "";
    startTimer();
    displayQuestion();
}
function startTimer(){
    timerInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}
function displayQuestion(){
    var question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    answerList.innerHTML = "";
    question.answers.forEach(function(option, index) {
        var li = document.createElement("li");
        li.textContent = String.fromCharCode(65 + index) + ". " + option;
        answerList.appendChild(li);
    });
}

function handleAnswerSelection(event){
        var selectedAnswer = parseInt(event.target.getAttribute("data-answer"));
    
        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            feedbackElement.textContent = "Correct!";
        } else {
            feedbackElement.textContent = "Wrong!";
            timeLeft -= 10;
        }
    
        currentQuestionIndex++;
    
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }
    
function endQuiz() {
    clearInterval(timerInterval);
    questionContainer.classList.add("hide");
    feedbackElement.textContent = "";
    scoreSection.classList.remove("hide");
    scoreDisplay.textContent = "Your Score: " + timeLeft;
}
 