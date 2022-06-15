const wordContainer = document.getElementById('wordContainer');
const startButton = document.getElementById('startButton');
const usedLettersElement = document.getElementById('usedLetters');

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width = 0;
ctx.canvas.height = 0;

const bodyParts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [3,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
]

let selectedWord;
let usedLetters;
let mistakes;
let hits;

const cleanHistory = () => {
    usedLetters = [];
    mistakes = 0;
    hits = 0;
    wordContainer.innerHTML= '';
    usedLettersElement.innerHTML = '';
    startButton.style.display = 'none';
} 

const startGame = () => {
    cleanHistory();
    drawHangman();
}


startButton.addEventListener('click', startGame);