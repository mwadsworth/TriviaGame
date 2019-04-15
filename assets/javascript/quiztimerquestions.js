//elements//
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImage");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score");

//create questions//
let  questions = [
    {
        question: "What is the color of Louise's ears?",
        imgSrc: "",
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        correct: "A"
    },{
        question: "When is Bob and Linda's Anniversary",
        imgSrc: "",
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        correct: "B"
    },{
        question: "Who plays the voice of Gene Belcher?",
        imgSrc: "",
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        correct: "B"   
    }
];

//variables//

const lastQuestion = questions.length = 1;
let runningQuestion = 0;

//Question Render//
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;

}

start.style.display = "none";
renderQuestion();
quiz.style.display = "block";

//Progress Render//
function progressRender(){
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "div class='prog' id=" + qIndex + "></div>"
    }
}
function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
}
function answerIsWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}

//counter Render//
 const questionTime = 10;
 const gaugeWidth = 150;
 let count = 0;
 const gaugeProgressUnit = gaugeWidth/questionTime;

 function counterRender(){
     if( count <= questionTime){
         counter.innerHTML = count;
         timeGauge.style.width = gaugeProgressUnit * count + "px" ;
         count++;
     }else{
         count = 0;
         answerIsWrong();
         if( runningQuestionIndex < lastQuestionIndex){
             runningQuestionIndex++;
             questionRender();
         }else( clearInterval(TIMER);
         scoreRender();
     }
 }
 //check Answer//
 let score = 0;
 function checkAnswer(answer){
     if(questions[runningQuestionIndex].correct == answer){
         score++;
         answerIsCorrect();
     }else{
         clearInterval(TIMER);
         scoreRender();
     }
 }
 //start Quiz//
const start = document.getElementById("start");

start.addEventListener("click", startQuiz );

let TIMER;

function startQuiz(){
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(counterRender,1000);
    progressRender();
    questionRender();
    quiz.style.display = "block";
}
    <div id="quiz" style = "display : none;"></div>

//score Render//

function scoreREnder(){
    scoreContainer.style.display="block";
    let scorePerCent = Math.round(1-- * score / questions.length);
    let img= (scorePerCent >= 80) ? "
}

