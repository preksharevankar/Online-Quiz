
const quizDB= [
    {
        question: "Q1) Number of primitive data types in Java are?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        ans: "ans3",
    },
    {
        question: "Q2) Arrays in java are-",
        a: "Object references",
        b: "Objects",
        c: "Primitive data type",
        d: "None",
        ans: "ans2",
    },

    {
        question: "Q3) In which of the following is toString() method defined?",
        a: "java.lang.Object",
        b: "java.lang.String",
        c: "java.lang.util",
        d: "None",
        ans: "ans1",
    },

    {
        question: "Q4) Identify the modifier which cannot be used for constructor.",
        a: "public",
        b: "protected",
        c: "private",
        d: "static",
        ans: "ans4",
    },

    {
        question: "Q5) Which of the following exception is thrown when divided by zero statement is executed?",
        a: "NullPointerException",
        b: "NumberFormatException",
        c: "ArithmeticException",
        d: "None",
        ans: "ans3",
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers =document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');


let questionCount=0;
let score = 0;

const loadQuestion = () => {
    const questionList= quizDB[questionCount];
    question.innerText= questionList.question;
    option1.innerText= questionList.a;
    option2.innerText= questionList.b;
    option3.innerText= questionList.c;
    option4.innerText= questionList.d;


}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem)=> {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    
    });
    return answer;
}

const deselectAll =() => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    }
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML= `
        <h4 align="center">You scored : ${score}/${quizDB.length} </h4>
         <button class="btn" onclick="location.reload()"> Play Again</button> 
         <br>
         <a href="/quizes.html"> <h6 align="center"> Return to Home </h6></a>`
        
        ;
        showScore.classList.remove('scoreArea');
        
    } 

});