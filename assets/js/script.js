var startBtn = document.querySelector('.start-btn')
var startQuizEl = document.querySelector('#start-quiz')
var highscoreBtn = document.querySelector('#highscores-btn')
var highscoreEl = document.querySelector('#highscores')
var displayScoreEl = document.querySelector('#display-score')
var homeBtn = document.querySelector('#home')
var submitBtn = document.querySelector('#submit-btn')
var clearBtn = document.querySelector('#clear-scores')
var timerEl = document.querySelector('#timer')
var timeScoreEl = document.querySelector('#time-score')
var scoreEl = document.querySelector('#submit-score')
var quizboxEl = document.querySelector('#quizbox')
var questionEl = document.querySelector('#q1')
var answer1El = document.querySelector('#a1')
var answer2El = document.querySelector('#a2')
var answer3El = document.querySelector('#a3')
var answer4El = document.querySelector('#a4')
var initials = document.querySelector('#initials')


//timer variables
var timerCount;
var timerInterval;

// set index start variable
let i = 0

// Questions for quiz
var myQuestions = [
    {
        question: "What is a storage format that defines the way data is stored, organized, and manipulated?",
        optionA: 'Array',
        optionB: 'Linked List',
        optionC: 'Data Structure',
        optionD: 'Stack',
        correctOption: 'optionC',
    },
    {
        question: "What is a collection of items stores at contiguous memory locations?",
        optionA: 'Array',
        optionB: 'Linked List',
        optionC: 'Data Structure',
        optionD: 'Stack',
        correctOption: 'optionA',
    },
    {
        question: "What is a linear data structure in which the elements are not necessarily stored in a contiguous manner?",
        optionA: 'Array',
        optionB: 'Linked List',
        optionC: 'Data Structure',
        optionD: 'Stack',
        correctOption: 'optionB',
    },
    {
        question: "What is a linear data structure performing operations in a LIFO order?",
        optionA: 'Array',
        optionB: 'Linked List',
        optionC: 'Data Structure',
        optionD: 'Stack',
        correctOption: 'optionD',
    },
    {
        question: "What is a linear data structure that performs in a FIFO order?",
        optionA: 'Queue',
        optionB: 'Graph',
        optionC: 'Recursion',
        optionD: 'Binary Trees',
        correctOption: 'optionA',
    },
];

// Timer starts when start button is clicked. 
function startQuiz() {
    timerCount = 75;
    if (i !== 0) {
        i = 0;
    }
    showQuestions()
    countdown()
}

function countdown() {
    
    timerInterval = setInterval(function () {
        timerCount--;
        timerEl.textContent = 'Time: ' + timerCount;
        
        // quiz is over when timer reaches 0
        if (timerCount === 0) {
            clearInterval(timerInterval);
            scoreInput();
        }
        
    }, 1000);
}


// First question is presented when start button is clicked
function showQuestions() {
    startQuizEl.style = "display:none";
    
    questionEl.style = "display:flex";
    answer1El.style = "display:flex"
    answer2El.style = "display:flex"
    answer3El.style = "display:flex"
    answer4El.style = "display:flex"
    
    questionEl.textContent = myQuestions[i].question
    answer1El.textContent = myQuestions[i].optionA
    answer2El.textContent = myQuestions[i].optionB
    answer3El.textContent = myQuestions[i].optionC
    answer4El.textContent = myQuestions[i].optionD
}

answer1El.addEventListener('click', function () {
    // Following question is presented when question is answered correctly or incorrectly
    if (myQuestions[i].correctOption === 'optionA') {
        i++;
        
        // Short message is displayed when question is answered correctly or incorrectly
        document.getElementById('msg').innerHTML = 'Correct';
        setTimeout(function () {
            document.getElementById('msg').innerHTML = '';
        }, 2000);
        
        // quiz is over when all questions are answered
        if (i === myQuestions.length) {
            scoreInput()
        } else {
            showQuestions()
        }
    } else {
        i++;
        
        // Timer decreases by 10 seconds when incorrect answer is selected.
        timerCount = timerCount - 10;
        
        // Short message is displayed when question is answered correctly or incorrectly
        document.getElementById('msg').innerHTML = 'Wrong';
        setTimeout(function () {
            document.getElementById('msg').innerHTML = '';
        }, 2000);
        
        // quiz is over when all questions are answered
        if (i === myQuestions.length) {
            scoreInput()
        } else {
            showQuestions()
        }
    }
})

answer2El.addEventListener('click', function () {
    // Following question is presented when question is answered correctly or incorrectly
    if (myQuestions[i].correctOption === 'optionB') {
        i++;
        
        // Short message is displayed when question is answered correctly or incorrectly
        document.getElementById('msg').innerHTML = 'Correct';
        setTimeout(function () {
            document.getElementById('msg').innerHTML = '';
        }, 2000);
        
        // quiz is over when all questions are answered
        if (i === myQuestions.length) {
            
            scoreInput()
        } else {
            
            showQuestions()
        }
    } else {
        i++;
        
        // Timer decreases by 10 seconds when incorrect answer is selected.
        timerCount = timerCount - 10;
        
        // Short message is displayed when question is answered correctly or incorrectly
        document.getElementById('msg').innerHTML = 'Wrong';
        setTimeout(function () {
            document.getElementById('msg').innerHTML = '';
        }, 2000);
        
        // quiz is over when all questions are answered
        if (i === myQuestions.length) {
            scoreInput()
        } else {
            showQuestions()
        }
    }
})

answer3El.addEventListener('click', function () {
    // Following question is presented when question is answered correctly or incorrectly
    if (myQuestions[i].correctOption === 'optionC') {
        i++;
        
        // Short message is displayed when question is answered correctly or incorrectly
        document.getElementById('msg').innerHTML = 'Correct';
        setTimeout(function () {
            document.getElementById('msg').innerHTML = '';
        }, 2000);
        
        // quiz is over when all questions are answered
        if (i === myQuestions.length) {
            
            scoreInput()
        } else {
            
            showQuestions()
        }
    } else {
        i++;
        // Timer decreases by 10 seconds when incorrect answer is selected.
        timerCount = timerCount - 10;
        
        // Short message is displayed when question is answered correctly or incorrectly
        document.getElementById('msg').innerHTML = 'Wrong';
        setTimeout(function () {
            document.getElementById('msg').innerHTML = '';
        }, 2000);
        
        // quiz is over when all questions are answered
        if (i === myQuestions.length) {
            
            scoreInput()
        } else {
            
            showQuestions()
        }
    }
    
})

answer4El.addEventListener('click', function () {
    // Following question is presented when question is answered correctly or incorrectly
    if (myQuestions[i].correctOption === 'optionD') {
        i++;
        
        // Short message is displayed when question is answered correctly or incorrectly
        document.getElementById('msg').innerHTML = 'Correct';
        setTimeout(function () {
            document.getElementById('msg').innerHTML = '';
        }, 2000);
        
        // quiz is over when all questions are answered
        if (i === myQuestions.length) {
            
            scoreInput()
        } else {
            
            showQuestions()
        }
    } else {
        i++;
        // Timer decreases by 10 seconds when incorrect answer is selected.
        timerCount = timerCount - 10;
        
        // Short message is displayed when question is answered correctly or incorrectly
        document.getElementById('msg').innerHTML = 'Wrong';
        setTimeout(function () {
            document.getElementById('msg').innerHTML = '';
        }, 2000);
        
        // quiz is over when all questions are answered
        if (i === myQuestions.length) {
            scoreInput()
        } else {
            
            showQuestions()
        }
    }
    
})

// quizContainer.innterHTML = output.join('');
startBtn.addEventListener('click', startQuiz);

// At end of quiz, score (time) is saved with initials
function scoreInput() {
    
    scoreEl.style = 'display:inline-flex'
    
    questionEl.style = "display:none";
    answer1El.style = "display:none"
    answer2El.style = "display:none"
    answer3El.style = "display:none"
    answer4El.style = "display:none"
    
    timeScoreEl.textContent = 'Score: ' + timerCount
    clearInterval(timerInterval);
}

clearBtn.addEventListener('click', function () {
    localStorage.clear();
    highscoreEl.textContent = ''
})

function displayHighscore() {
    startQuizEl.style = "display:none";
    quizboxEl.style = "display:none";
    displayScoreEl.style = "display:flex";
    scoreEl.style = "display:none";
    timerEl.textContent = 'Time: ';
    clearInterval(timerInterval);
}

// When 'View Highscores' is clicked, stored highscores are displayed
highscoreBtn.addEventListener('click', displayHighscore);

function displaySubmitted() {
    initials = localStorage.getItem('initials')
    timerCount = localStorage.getItem('timerCount')
    
        let tagLi = document.createElement('li')
        tagLi.textContent = initials + '     ' + timerCount
        document.querySelector('#highscores').append(tagLi)

}

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

initials = document.querySelector('#initials').value;
var errorEl = document.querySelector('#error')
if (initials === "") {
    
    errorEl.textContent = "You must add your initials!"
} else {
    localStorage.setItem('initials', initials);
    localStorage.setItem('timerCount', timerCount)
    errorEl.textContent = ''
    displayScoreEl.style = "display:inline-flex"
    scoreEl.style = "display:none"
    displaySubmitted();
}
})

homeBtn.addEventListener('click', function() {
    startQuizEl.style = "display:flex";
    displayScoreEl.style = "display:none";
    scoreEl.style = "display:none";
    timerEl.textContent = 'Time:';
    errorEl.textContent = ''
})
