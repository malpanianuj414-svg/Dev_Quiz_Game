const quizDatabase = {
    html: 
    [
        { question: "What is full form of HTML?", answers: [{ text: "Hyper Text Markup Language", correct: true }, 
            { text: "Home Tool Markup Language", correct: false }, { text: "Hyperlinks Language", correct: false }, 
            { text: "High Text Machine Language", correct: false }] 
        },
        { question: "Which HTML element handles the most important heading?", answers: [{ text: "&lt;heading&gt;", correct: false }, 
            { text: "&lt;h6&gt;", correct: false }, { text: "&lt;h1&gt;", correct: true }, 
            { text: "&lt;head&gt;", correct: false }] 
        },
        { question: "What is the correct HTML element for inserting a line break?", answers: [{ text: "&lt;break&gt;", correct: false }, 
            { text: "&lt;br&gt;", correct: true }, { text: "&lt;lb&gt;", correct: false }, 
            { text: "None", correct: false }] 
        },
        { question: "Which character indicates an closing tag in HTML?", answers: [{ text: "<*tagname>", correct: false }, 
            { text: "&lt;/tagname&gt;", correct: true }, { text: "&lt;tagname&gt;", correct: false }, 
            { text: "^tagname^", correct: false }] 
        },
        { question: "Which HTML element is used to define an inline image?", answers: [{ text: "&lt;image&gt;", correct: false }, 
            { text: "&lt;pic&gt;", correct: false }, { text: "&lt;img&gt;", correct: true }, 
            { text: "&lt;src&gt;", correct: false }] 
        },
        { question: "Choose the correct HTML element for a dropdown list option in forms?", answers: [{ text: "&lt;select&gt;", correct: true }, 
            { text: "&lt;input type='dropdown'&gt;", correct: false }, { text: "&lt;list&gt;", correct: false }, 
            { text: "&lt;form&gt;", correct: false }] 
        },
        { question: "An &lt;iframe&gt; is used to display a web page within a web page.", answers: [{ text: "True", correct: true }, 
            { text: "False", correct: false }] 
        },
        { question: "Which HTML input property specifies that an input field must be filled out before submitting?", 
            answers: 
            [
                { text: "validate", correct: false }, { text: "placeholder", correct: false }, 
                { text: "required", correct: true }, { text: "mandatory", correct: false }
            ] 
        },
        { question: "Which HTML element is used to define a footer block container?", answers: [{ text: "&lt;bottom&gt;", correct: false }, 
            { text: "&lt;section&gt;", correct: false }, { text: "&lt;footer&gt;", correct: true }, 
            { text: "&lt;aside&gt;", correct: false }] 
        },
        { question: "What is the correct HTML syntax for making a checkbox form selection?", 
            answers: 
            [
                { text: "&lt;input type='checkbox'&gt;", correct: true }, { text: "&lt;check&gt;", correct: false }, 
                { text: "&lt;input type='check'&gt;", correct: false }, { text: "&lt;checkbox&gt;", correct: false }
            ] 
        }
    ],
    css: 
    [
        { question: "What is the full form of CSS?", answers: [{ text: "Creative Style Sheets", correct: false }, 
            { text: "Cascading Style Sheets", correct: true }, { text: "Computer Style Sheets", correct: false }, 
            { text: "Colorful Style Sheets", correct: false }] 
        },
        { question: "Where in an HTML document is the correct place to refer to an external style sheet?", 
            answers: 
            [
                { text: "In the &lt;body&gt; section", correct: false }, { text: "In the &lt;head&gt; section", correct: true }, 
                { text: "At the end of the document", correct: false }, { text: "In the &lt;script&gt;", correct: false}
            ] 
        },
        { question: "Which HTML tag is used to define an internal style sheet?", answers: [{ text: "&lt;css&gt;", correct: false }, 
            { text: "&lt;style&gt;", correct: true }, { text: "&lt;script&gt;", correct: false }, 
            { text: "&lt;head&gt;", correct: false}] 
        },
        { question: "Which CSS property controls the layout text size?", answers: [{ text: "font-style", correct: false }, 
            { text: "text-size", correct: false }, { text: "font-size", correct: true }, 
            { text: "text-style", correct: false }] 
        },
        { question: "What is the correct CSS syntax to make all paragraph elements bold?", 
            answers: 
            [
                { text: "p {font-weight:bold;}", correct: true }, { text: "&lt;p style='font-size:bold'&gt;", correct: false }, 
                { text: "p {text-size:bold;}", correct: false }, { text: "p {font-style:bold;}", correct: false }
            ] 
        },
        { question: "How do you select an element with id 'demo' in your CSS file?", answers: [{ text: ".demo", correct: false }, 
            { text: "#demo", correct: true }, { text: "*demo", correct: false }, 
            { text: "demo", correct: false }] 
        },
        { question: "How do you select elements with class name 'test' in CSS?", answers: [{ text: ".test", correct: true }, 
            { text: "#test", correct: false }, { text: "test", correct: false }, 
            { text: "*test", correct: false }] 
        },
        { question: "What is the default value of the position property in CSS selectors?", 
            answers: 
            [
                { text: "absolute", correct: false }, { text: "fixed", correct: false }, { text: "relative", correct: false }, 
                { text: "static", correct: true }
            ] 
        },
        { question: "Which property is used to change the background color inside CSS rules?", answers: [{ text: "color", correct: false }, 
            { text: "background-color", correct: true }, { text: "bgcolor", correct: false }, 
            { text: "surface-color", correct: false }] 
        },
        { question: "Which CSS property is used to change the left margin of an element?", 
            answers: 
            [
                { text: "padding-left", correct: false }, { text: "indent-left", correct: false }, 
                { text: "margin-left", correct: true }, { text: "left-margin", correct: false }
            ] 
        }
    ],
    js: 
    [
        { question: "Inside which HTML element do we put the JavaScript code?", answers: [{ text: "&lt;scripting&gt;", correct: false }, 
            { text: "&lt;js&gt;", correct: false }, { text: "&lt;script&gt;", correct: true }, 
            { text: "&lt;javascript&gt;", correct: false }] 
        },
        { question: "How do you define a function declaration in JavaScript?", 
            answers: 
            [
                { text: "function myFunction(){body}", correct: true }, { text: "function:myFunction()", correct: false }, 
                { text: "function = myFunction()", correct: false }, { text: "function myFunction", correct: false}
            ] 
        },
        { question: "How do you write a standard IF conditional statement in JavaScript?", 
            answers: 
            [
                { text: "if i == 5 then", correct: false }, { text: "if (i == 5)", correct: true }, 
                { text: "if i = 5", correct: false }, { text: "IF i==5", correct: false }
            ] 
        },
        { question: "Which event listener executes when a user clicks on an element?", 
            answers: 
            [
                { text: "onmouseover", correct: false }, { text: "onchange", correct: false }, 
                { text: "onclick", correct: true }, { text: "onhover", correct: false }
            ] 
        },
        { question: "How do you initialize a local variable with block scope value in ES6?", 
            answers: 
            [
                { text: "var myValue;", correct: false }, { text: "let myValue;", correct: true }, 
                { text: "local myValue;", correct: false }, { text: "const myValue;", correct: false }
            ] 
        },
        { question: "What is the correct logical operator for checking absolute value and type equality concurrently?", 
            answers: 
            [
                { text: "==", correct: false }, { text: "=", correct: false }, 
                { text: "===", correct: true }, { text: "!!", correct: false }
            ] 
        },
        { question: "What is the correct syntax of FOR loop in JavaScript?", answers: [{ text: "for (i &lt;= 5; i++)", correct: false }, 
            { text: "for(let i = 0; i &lt; 5; i++)", correct: true }, { text: "for i = 1 to 5", correct: false }, 
            { text: "FOR[let i=0; i &lt; 5; i++]", correct: false}] 
        },
        { question: "How do you write a comment in JavaScript files?", 
            answers: 
            [
                { text: "' This is a comment", correct: false }, { text: "// This is a comment", correct: true }, 
                { text: "&lt;!-- This is a comment --&gt;", correct: false }, { text: "*This is a comment*", correct: false}
            ] 
        },
        { question: "Which function is used to add an element at the end of an array?", 
            answers: 
            [
                { text: "pop()", correct: false }, { text: "shift()", correct: false }, 
                { text: "push()", correct: true }, { text: "join()", correct: false }
            ] 
        },
        { question: "Is JavaScript congruent to Java.", answers: [{ text: "True", correct: false }, 
            { text: "False", correct: true }] 
        }
    ]
};

const headerNav = document.getElementById("app-header");
const footerLayout = document.getElementById("app-footer");
const homepageView = document.getElementById("homepage-view");
const quizView = document.getElementById("quiz-view");
const scoreboardView = document.getElementById("scoreboard-view");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const finishHomeButton = document.getElementById("finish-home-btn");
const currentBadge = document.getElementById("current-badge");
const timerLabel = document.getElementById("timer-countdown");
const viewScoreBtn = document.getElementById("view-score-btn");

let sessionScores = { html: 0, css: 0, js: 0 };
let activeCategory = "";
let currentQuestionIndex = 0;
let dynamicRunningScore = 0;

let countdownEngineInterval = null;
let remainingSessionSeconds = 600; 

function switchCategory(categoryKey) {
    activeCategory = categoryKey;
    currentQuestionIndex = 0;
    dynamicRunningScore = 0;
    remainingSessionSeconds = 600; 

    headerNav.classList.add("hidden-ui");
    footerLayout.classList.add("hidden-ui");
    document.body.classList.add("quiz-active");

    homepageView.classList.add("hidden");
    scoreboardView.classList.add("hidden");
    quizView.classList.remove("hidden");
    finishHomeButton.classList.add("hidden");
    nextButton.classList.remove("hidden");

    currentBadge.innerHTML = categoryKey.toUpperCase() + " Quiz";
    nextButton.innerHTML = "Next";
    
    startTimerEngine();
    showQuestion();
}

function startTimerEngine() {
    clearInterval(countdownEngineInterval);
    updateTimerStringLabel();
    
    countdownEngineInterval = setInterval(() => {
        remainingSessionSeconds--;
        updateTimerStringLabel();
        
        if (remainingSessionSeconds <= 0) {
            clearInterval(countdownEngineInterval);
            forceTimeoutSubmission();
        }
    }, 1000);
}

function updateTimerStringLabel() {
    const calculationMinutes = Math.floor(remainingSessionSeconds / 60);
    const calculationSeconds = remainingSessionSeconds % 60;
    timerLabel.innerHTML = `${calculationMinutes}:${calculationSeconds < 10 ? '0' : ''}${calculationSeconds}`;
}

function forceTimeoutSubmission() {
    resetState();
    clearInterval(countdownEngineInterval);
    
    sessionScores[activeCategory] = dynamicRunningScore;
    
    questionElement.innerHTML = `&#x26A0 <strong>Time Expired!</strong><br>Your assessment has been forced submitted automatically.<br>Unattempted questions are marked zero.<br><br>Category Score: ${dynamicRunningScore} / ${quizDatabase[activeCategory].length}`;
    
    nextButton.classList.add("hidden");
    finishHomeButton.classList.remove("hidden");
}

function showHome() {
    clearInterval(countdownEngineInterval);
    activeCategory = "";
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    headerNav.classList.remove("hidden-ui");
    footerLayout.classList.remove("hidden-ui");
    document.body.classList.remove("quiz-active");

    quizView.classList.add("hidden");
    scoreboardView.classList.add("hidden");
    homepageView.classList.remove("hidden");
}

function updateGlobalScoreDisplay() {
    document.getElementById("score-html").innerHTML = sessionScores.html;
    document.getElementById("score-css").innerHTML = sessionScores.css;
    document.getElementById("score-js").innerHTML = sessionScores.js;
    
    homepageView.classList.add("hidden");
    quizView.classList.add("hidden");
    scoreboardView.classList.remove("hidden");
}

function showQuestion() {
    resetState();
    let currentQuestion = quizDatabase[activeCategory][currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        dynamicRunningScore++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showQuizResults() {
    resetState();
    clearInterval(countdownEngineInterval);
    const totalQuestionsCount = quizDatabase[activeCategory].length;
    
    questionElement.innerHTML = `Category Assessment Complete! <br>You scored ${dynamicRunningScore} out of ${totalQuestionsCount}!`;
    
    sessionScores[activeCategory] = dynamicRunningScore;
    
    nextButton.innerHTML = "Retake Assessment";
    nextButton.style.display = "block";
    finishHomeButton.classList.remove("hidden");
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < quizDatabase[activeCategory].length) {
        showQuestion();
    } else {
        showQuizResults();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < quizDatabase[activeCategory].length) {
        handleNextButton();
    } else {
        switchCategory(activeCategory);
    }
});

viewScoreBtn.addEventListener("click", updateGlobalScoreDisplay);