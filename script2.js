const quizDB= [
    {
        question: "Q1) Identify the correct extension of the user-defined header file in C++.",
        a: ".cpp",
        b: ".hg",
        c: ".h",
        d: ".hf",
        ans: "ans3",
    },
    {
        question: "Q2)  Identify the incorrect constructor type.",
        a: "Friend constructor",
        b: "Default constructor",
        c: "Parameterized constructor",
        d: "Copy constructor",
        ans: "ans1",
    },

    {
        question: "Q3) Which of the following data type is supported in C++ but not in C?",
        a: "int",
        b: "bool",
        c: "double",
        d: "float",
        ans: "ans2",
    },

    {
        question: "Q4) Which of the following loops is best when we know the number of iterations? ",
        a: "while loop",
        b: "do while loop",
        c: "for loop",
        d: "All of the above",
        ans: "ans3",
    },

    {
        question: "Q5) goto can be classified into?",
        a: "function",
        b: "variable",
        c: "operator",
        d: "label",
        ans: "ans4",
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