// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6XZ4Ooh5cyXZuuWMa273ATOsch45F9Ok",
    authDomain: "fedefarma-trivia.firebaseapp.com",
    databaseURL: "https://fedefarma-trivia-default-rtdb.firebaseio.com",
    projectId: "fedefarma-trivia",
    storageBucket: "fedefarma-trivia.firebasestorage.app",
    messagingSenderId: "836932838278",
    appId: "1:836932838278:web:895e677ffeff8360c00207"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Opció B: Crypto getRandomValues per més compatibilitat
// Utilitzar crypto.getRandomValues en lloc de Math.seedrandom()
// Aquesta funció és més robusta i compatible amb tots els navegadors
if (typeof crypto.getRandomValues !== 'undefined') {
    shuffleArray = function(array) {
        const values = crypto.getRandomValues(new Uint8Array(array.length));
        const shuffled = [];
        for (let i = 0; i < array.length; i++) {
            shuffled.push(array[values[i]]);
        }
        return shuffled;
    };
}

function getRandomQuestions(count, seed) {
    if (seed) {
        // Utilitzar semilla de la sessió per aleatorietat consistent
        Math.seedrandom(seed);
        const seededShuffled = shuffleArray(allQuestions);
        return seededShuffled.slice(0, count);
    }
    
    // Si no hi ha semilla de sessió, utilitzar aleatorietat pura
    const shuffled = shuffleArray(allQuestions);
    return shuffled.slice(0, count);
}

// Game state
let questions = [];
let currentQuestion = 0;
let score = 0;
let playerName = '';

// DOM Elements - Screens
const nameScreen = document.getElementById('name-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const rankingScreen = document.getElementById('ranking-screen');

// DOM Elements - Name screen
const playerNameInput = document.getElementById('player-name');
const nameError = document.getElementById('name-error');
const startGameBtn = document.getElementById('start-game-btn');
const viewRankingBtn = document.getElementById('view-ranking-btn');

// DOM Elements - Quiz screen
const currentPlayerEl = document.getElementById('current-player');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const questionNumberEl = document.getElementById('question-number');
const scoreEl = document.getElementById('score');
const progressEl = document.getElementById('progress');

// DOM Elements - Result screen
const resultEmoji = document.getElementById('result-emoji');
const resultTitle = document.getElementById('result-title');
const resultScore = document.getElementById('result-score');
const resultMessage = document.getElementById('result-message');
const savingIndicator = document.getElementById('saving-indicator');
const restartBtn = document.getElementById('restart-btn');
const rankingBtn = document.getElementById('ranking-btn');

// DOM Elements - Ranking screen
const rankingList = document.getElementById('ranking-list');
const playBtn = document.getElementById('play-btn');
const backBtn = document.getElementById('back-btn');

// Helper functions
function showScreen(screen) {
    [nameScreen, quizScreen, resultScreen, rankingScreen].forEach(s => {
        if (s) s.classList.remove('active');
    });
    if (screen) screen.classList.add('active');
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
}

// Firebase functions
async function saveScore(name, points) {
    try {
        const scoresRef = database.ref('scores');
        await scoresRef.push({
            name: name,
            score: points,
            date: Date.now()
        });
        return true;
    } catch (error) {
        console.error('Error saving score:', error);
        return false;
    }
}

async function getTopScores(limit = 10) {
    try {
        const scoresRef = database.ref('scores');
        const snapshot = await scoresRef.orderByChild('score').limitToLast(limit).once('value');
        const scores = [];
        const playerBestScore = localStorage.getItem('playerBestScore') || 0;
        
        snapshot.forEach(child => {
            scores.push({
                id: child.key,
                ...child.val()
            });
        });
        // Sort descending by score
        return scores.sort((a, b) => b.score - a.score);
    } catch (error) {
        console.error('Error getting scores:', error);
        return [];
    }
}

async function displayRanking() {
    rankingList.innerHTML = '<div class="loading">Carregant ranking...</div>';
    
    const scores = await getTopScores();
    
    if (scores.length === 0) {
        rankingList.innerHTML = '<div class="no-scores">Encara no hi ha puntuacions.<br>Sigues el primer a jugar! 🎮</div>';
        return;
    }
    
    rankingList.innerHTML = scores.map((entry, index) => {
        let positionClass = '';
        let medal = '';
        if (index === 0) { positionClass = 'gold'; medal = '🥇'; }
        else if (index === 1) { positionClass = 'silver'; medal = '🥈'; }
        else if (index === 2) { positionClass = 'bronze'; medal = '🥉'; }
        
        return `
            <div class="ranking-item">
                <span class="ranking-position ${positionClass}">${medal}</span>
                <span class="ranking-name">${entry.name}</span>
                <span class="ranking-score">${entry.score}/25</span>
                <span class="ranking-date">${formatDate(entry.date)}</span>
            </div>
        `;
    }).join('');
}

// Game functions
function validateName() {
    const name = playerNameInput.value.trim();
    if (name.length < 2) {
        nameError.textContent = 'El nom ha de tenir almenys 2 caràcters';
        return false;
    }
    if (name.length > 20) {
        nameError.textContent = 'El nom no pot tenir més de 20 caràcters';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function startGame() {
    if (!validateName()) return;
    
    playerName = playerNameInput.value.trim();
    
    // Opció B: Generar nova semilla de sessió per evitar memorització
    const newSessionSeed = Date.now().toString();
    localStorage.setItem('sessionSeed', newSessionSeed);
    
    questions = getRandomQuestions(25, newSessionSeed);
    currentQuestion = 0;
    score = 0;
    
    currentPlayerEl.textContent = playerName;
    showScreen(quizScreen);
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    questionNumberEl.textContent = `Pregunta ${currentQuestion + 1}/${questions.length}`;
    scoreEl.textContent = `Punts: ${score}`;
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

async function showResults() {
    progressEl.style.width = '100%';
    
    const percentage = (score / questions.length) * 100;
    
    // Load and update personal best score from localStorage
    const playerBestScore = parseInt(localStorage.getItem('playerBestScore')) || 0;
    const isNewBestScore = score > playerBestScore;
    if (isNewBestScore) {
        localStorage.setItem('playerBestScore', score.toString());
    }
    
    let message = '';
    if (percentage === 100) {
        resultEmoji.textContent = '🏆';
        resultTitle.textContent = 'Expert en Fedefarma!';
        message = `${playerName}, coneixes a fons el Grup Fedefarma!`;
    } else if (percentage >= 70) {
        resultEmoji.textContent = '💊';
        resultTitle.textContent = 'Molt bé!';
        message = `${playerName}, tens excel·lents coneixements sobre Fedefarma!`;
    } else if (percentage >= 50) {
        resultEmoji.textContent = '👍';
        resultTitle.textContent = 'Ben fet!';
        message = `${playerName}, vas pel bon camí, segueix aprenent!`;
    } else {
        resultEmoji.textContent = '📚';
        resultTitle.textContent = 'A estudiar!';
        message = `${playerName}, visita grupfedefarma.com per saber-ne més.`;
    }
    
    // Show score with /25
    resultScore.textContent = `${score} de ${questions.length} correctes`;
    
    // Show personal best score
    const bestScoreDiv = document.createElement('div');
    bestScoreDiv.style.marginTop = '10px';
    bestScoreDiv.style.padding = '10px';
    bestScoreDiv.style.background = '#fef0f6';
    bestScoreDiv.style.borderRadius = '10px';
    bestScoreDiv.style.color = '#e6007e';
    bestScoreDiv.innerHTML = `<strong>La teva millor puntuació: ${playerBestScore}/25</strong>`;
    resultScore.appendChild(bestScoreDiv);
    
    showScreen(resultScreen);
    
    // Save score to Firebase
    savingIndicator.classList.add('visible');
    const saved = await saveScore(playerName, score);
    savingIndicator.classList.remove('visible');
    
    if (!saved) {
        savingIndicator.textContent = 'No s\'ha pogut guardar la puntuació';
        savingIndicator.classList.add('visible');
    }
}

function goToNameScreen() {
    showScreen(nameScreen);
}

async function goToRanking() {
    showScreen(rankingScreen);
    await displayRanking();
}

// Event listeners
startGameBtn.addEventListener('click', startGame);
viewRankingBtn.addEventListener('click', goToRanking);
restartBtn.addEventListener('click', goToNameScreen);
rankingBtn.addEventListener('click', goToRanking);
playBtn.addEventListener('click', startGame);
backBtn.addEventListener('click', goToNameScreen);

playerNameInput.addEventListener('input', () => {
    nameError.textContent = '';
});

playerNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        startGame();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showScreen(nameScreen);
});
