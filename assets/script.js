
var time = 60;
var timeLeft = true;
var timeBegin= false;
var startBtn = document.getElementById("startBtn");
var timer = document.getElementById("timer");
var homePage =  document.getElementById("homePage");
var quizBox = document.getElementById("quizBox");
var qHeader = document.getElementById("qHeader");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var correctChoice = document.getElementById("correctChoice");    
var savedScores= [];
var output="";
var score = 0;
let i=0;

var arrayQuestions = [
{
    question: "the condition in an if/else statement is enclosed with__", 
    choices: ["A. quotes", "B. curly brackets", "C. parenthesis", "D. Square Brackets"],
    correctChoice: 2
}, 

{
    question: "Where do you link the CSS file in the HTML", 
    choices: ["A. head", "B. footer", "C. body", "D. what is an HTML?"],
    correctChoice: 0
}, 

{
    question: "Where do you link the JS file in the HTML", 
    choices: ["A. The body or head(per google)", "B. footer", "C. what is a JS?", "D. No idea"],
    correctChoice: 0
}, 

{
    question: "what are variables used for", 
    choices: ["A. No idea", "B. Storing values", "C. what is a variable", "D. make drawings"],
    correctChoice: 1
}, 

{
    question: "Arrays can be used to store", 
    choices: ["A. numbers", "B. strings", "C. boolean", "D. all of the above"],
    correctChoice: 3
}, 
];


var timercountdownInt = setInterval(setCountdownTimer, 1000);
function setCountdownTimer() {
    if (timeBegin)
    time--;
    if(time<= 0) {
    endQuiz();
    time = 0;         
    }
document.getElementById("seconds").innerHTML = time;
}

startBtn.addEventListener("click", function() {
    quizBox.style.display = "block";
    homePage.style.display ="none";
    timer.style.display= "block";
    document.getElementById("scoresView").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuestions();
    timeBegin= true;
});

function setQuestions() {
    qHeader.textContent = arrayQuestions[i].question;
    answerA.textContent = arrayQuestions[i].choices[0]; 
    answerB.textContent = arrayQuestions[i].choices[1]; 
    answerC.textContent = arrayQuestions[i].choices[2]; 
    answerD.textContent = arrayQuestions[i].choices[3]; 
    };

    answerA.addEventListener('click', function(event) {
        event.stopPropagation();
        correctChoice = arrayQuestions[i].correctChoice;
        console.log(correctChoice);
        if (0 === correctChoice) { 
            document.getElementById("answerFeedback").innerHTML = "Correct!";
            setTimeout(function() {
                document.getElementById("answerFeedback").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            timeLeft -= 10;
            document.getElementById("answerFeedback").innerHTML = "Sorry thats Incorrect!";
            setTimeout(function() {
                document.getElementById("answerFeeedback").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= arrayQuestions.length -1) {
        endQuiz();
        } else {
            i++ 
            setQuestions();
        };
        });


        answerB.addEventListener('click', function(event) {
            event.stopPropagation();
            correctChoice = arrayQuestions[i].correctChoice;
            console.log(correctChoice);
            if (1 === correctChoice) { 
                document.getElementById("answerFeedback").innerHTML = "Correct!";
                setTimeout(function() {
                    document.getElementById("answerFeedback").innerHTML = "";
                        },
                        1000
                    );
                score++;
                document.getElementById("score").innerHTML = score;
            } else {
                timeLeft -= 10;
                document.getElementById("answerFeedback").innerHTML = "Sorry thats Incorrect!";
                setTimeout(function() {
                    document.getElementById("answerFeeedback").innerHTML = "";
                        },
                        1000
                    );
            }
            if (i >= arrayQuestions.length -1) {
            endQuiz();
            } else {
                i++ 
                setQuestions();
            };
            });

    answerC.addEventListener('click', function(event) {
        event.stopPropagation();
        correctChoice = arrayQuestions[i].correctChoice;
        console.log(correctChoice);
        if (2 === correctChoice) { 
            document.getElementById("answerFeedback").innerHTML = "Correct!";
            setTimeout(function() {
                document.getElementById("answerFeedback").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            timeLeft -= 10;
            document.getElementById("answerFeedback").innerHTML = "Sorry thats Incorrect!";
            setTimeout(function() {
                document.getElementById("answerFeeedback").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= arrayQuestions.length -1) {
        endQuiz();
        } else {
            i++ 
            setQuestions();
        };
        });

        answerD.addEventListener('click', function(event) {
            event.stopPropagation();
            correctChoice = arrayQuestions[i].correctChoice;
            console.log(correctChoice);
            if (3 === correctChoice) { 
                document.getElementById("answerFeedback").innerHTML = "Correct!";
                setTimeout(function() {
                    document.getElementById("answerFeedback").innerHTML = "";
                        },
                        1000
                    );
                score++;
                document.getElementById("score").innerHTML = score;
            } else {
                timeLeft -= 10;
                document.getElementById("answerFeedback").innerHTML = "Sorry thats Incorrect!";
                setTimeout(function() {
                    document.getElementById("answerFeeedback").innerHTML = "";
                        },
                        1000
                    );
            }
            if (i >= arrayQuestions.length -1) {
            endQuiz();
            } else {
                i++ 
                setQuestions();
            };
            });
    
        function endQuiz(){
            document.getElementById("quizComplete").style.display= "block";
            document.getElementById("quizBox").style.display="none";
            document.getElementById("timer").style.display= "none";
            document.getElementById("scoresView").style.display= "none";
            document.getElementById("answerFeedback").innerHTML="";
            document.getElementById("finalScore").innerHTML= score;
            }

                function submitScore() {
                savedScores.push(document.getElementById("scoreInitials").value + " " + score);
                seeHighScores();
            }