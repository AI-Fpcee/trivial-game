const questions = [
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        answers: ["Marte", "Júpiter", "Saturno", "Neptuno"],
        correct: 1
    },
    {
        question: "¿En qué año llegó el hombre a la Luna?",
        answers: ["1965", "1969", "1972", "1959"],
        correct: 1
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        answers: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
        correct: 1
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        answers: ["Miguel Ángel", "Rafael", "Leonardo da Vinci", "Botticelli"],
        correct: 2
    },
    {
        question: "¿Cuál es el elemento químico más abundante en el universo?",
        answers: ["Oxígeno", "Carbono", "Helio", "Hidrógeno"],
        correct: 3
    },
    {
        question: "¿En qué país se encuentra la Torre Eiffel?",
        answers: ["Italia", "España", "Francia", "Alemania"],
        correct: 2
    },
    {
        question: "¿Cuántos huesos tiene el cuerpo humano adulto?",
        answers: ["186", "206", "226", "196"],
        correct: 1
    },
    {
        question: "¿Quién escribió 'Don Quijote de la Mancha'?",
        answers: ["Lope de Vega", "Calderón de la Barca", "Miguel de Cervantes", "Francisco de Quevedo"],
        correct: 2
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        answers: ["Atlántico", "Índico", "Ártico", "Pacífico"],
        correct: 3
    },
    {
        question: "¿En qué año comenzó la Segunda Guerra Mundial?",
        answers: ["1936", "1939", "1941", "1938"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const questionNumberEl = document.getElementById('question-number');
const scoreEl = document.getElementById('score');
const progressEl = document.getElementById('progress');
const resultEmoji = document.getElementById('result-emoji');
const resultTitle = document.getElementById('result-title');
const resultScore = document.getElementById('result-score');
const resultMessage = document.getElementById('result-message');

function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function startGame() {
    currentQuestion = 0;
    score = 0;
    showScreen(quizScreen);
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    questionNumberEl.textContent = `Pregunta ${currentQuestion + 1}/${questions.length}`;
    scoreEl.textContent = `Puntos: ${score}`;
    progressEl.style.width = `${((currentQuestion) / questions.length) * 100}%`;
    
    answersEl.innerHTML = '';
    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.addEventListener('click', () => selectAnswer(index));
        answersEl.appendChild(btn);
    });
}

function selectAnswer(index) {
    const q = questions[currentQuestion];
    const buttons = answersEl.querySelectorAll('.answer-btn');
    
    buttons.forEach(btn => btn.disabled = true);
    
    if (index === q.correct) {
        buttons[index].classList.add('correct');
        score++;
    } else {
        buttons[index].classList.add('incorrect');
        buttons[q.correct].classList.add('correct');
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    progressEl.style.width = '100%';
    
    const percentage = (score / questions.length) * 100;
    
    if (percentage === 100) {
        resultEmoji.textContent = '🏆';
        resultTitle.textContent = '¡Perfecto!';
        resultMessage.textContent = '¡Eres un genio de la cultura general!';
    } else if (percentage >= 70) {
        resultEmoji.textContent = '🌟';
        resultTitle.textContent = '¡Excelente!';
        resultMessage.textContent = '¡Tienes muy buenos conocimientos!';
    } else if (percentage >= 50) {
        resultEmoji.textContent = '👍';
        resultTitle.textContent = '¡Bien hecho!';
        resultMessage.textContent = 'Nada mal, ¡sigue practicando!';
    } else {
        resultEmoji.textContent = '📚';
        resultTitle.textContent = '¡Sigue intentando!';
        resultMessage.textContent = 'Lee un poco más y vuelve a intentarlo.';
    }
    
    resultScore.textContent = `${score} de ${questions.length} correctas`;
    
    showScreen(resultScreen);
}

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
