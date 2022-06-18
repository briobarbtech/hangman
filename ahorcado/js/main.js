import { crearElementosSociales } from "./functions/functions/createSocial.js";
import { words } from "./env/words.js";

const wordContainer = document.getElementById('wordContainer');
const startButton = document.getElementById('startButton');
const usedLettersElement = document.getElementById('usedLetters');
const inputLetters = document.getElementById('input');
const submit = document.getElementById('submit');
const finPartida = document.getElementById('end-game');
const tryAgain = document.getElementById('try-again');
const wordcorrect = document.getElementById('word-correct');
const finPartidaText = document.getElementById('end-game-text');
const addWordButton = document.getElementById('submit-word');

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width = 0;
ctx.canvas.height = 0;

const bodyParts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
]

let selectedWord;
let usedLetters;
let mistakes;
let hits;

const addWordToList = () => {
    let word = document.getElementById('add-word-input').value;
    words.push(word);
}

const winGame = () => {
    document.removeEventListener('keydown', letterEvent);
    finPartidaText.innerHTML = "¡Ganaste!"
    submit.style.display = 'none'
    finPartida.style.display = 'flex'
    wordcorrect.innerHTML = selectedWord.toString();
}
const reintentar = () => {
    startGame();
    finPartida.style.display = 'none'
}

const alertarError = (error, letraerronea) => {
    const spanAlertas = document.getElementById('alertas');
    if(error) {
        spanAlertas.innerHTML =`La letra \"${letraerronea.toUpperCase()}\" ya la usaste`;
        spanAlertas.classList.toggle('hidden')
    }else{
        spanAlertas.innerHTML = `La letra \"${letraerronea.toUpperCase()}\" no está permitida`;
        spanAlertas.classList.toggle('hidden')
    }
    setTimeout(()=>{
        spanAlertas.classList.toggle('hidden');
    }, 3000)
}

const addLetter = letter => {
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter.toUpperCase();
    usedLettersElement.appendChild(letterElement);
}

const addBodyPart = bodypart => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(...bodypart)
}

const wrongLetter = () => {
    addBodyPart(bodyParts[mistakes]);
    mistakes++
    if (mistakes === bodyParts.length) endGame();
}

const endGame = () => {
    document.removeEventListener('keydown', letterEvent);
    finPartidaText.innerHTML = "¡Perdiste! :("
    submit.style.display = 'none'
    finPartida.style.display = 'flex'
    wordcorrect.innerHTML = selectedWord.toString();
}

const correctLetter = letter => {
    const { children } =wordContainer;
    for(let i = 0; i < children.length; i++) {
        if(children[i].innerHTML === letter) {
            children[i].classList.toggle('hidden');
            hits++
        }
    }
    if (hits === selectedWord.length) winGame();
}

const letterInput = letter => {
    if(selectedWord.includes(letter)) {
        correctLetter(letter);
    }else {
        wrongLetter();
    }
    addLetter(letter);
    usedLetters.push(letter);
}

const letterEvent = () => {
    inputLetters.focus();
    let newLetter = inputLetters.value.toUpperCase();
    if(newLetter.match(/^[a-zñ]$/i) && !usedLetters.includes(newLetter)) {
        letterInput(newLetter);
    }else{
       if (newLetter.match(/^[a-zñ]$/i)){
        alertarError(true, inputLetters.value);
       }else{
        alertarError(false, inputLetters.value)
       }
    }
    inputLetters.value = '';
}

const drawWord = () => {
    selectedWord.forEach(letter => {
        const letterElement = document.createElement('span');
        letterElement.innerHTML = letter.toUpperCase();
        letterElement.classList.add('letter');
        letterElement.classList.add('hidden');
        wordContainer.appendChild(letterElement);
    })
}

const selectRandomWord = () => {
    const word = words[Math.floor((Math.random() * words.length))].toUpperCase();
    console.log(word)
    selectedWord = word.split('');
}

const drawHangman = () => {
    ctx.canvas.width = 120;
    ctx.canvas.height = 160;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d95d39';
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
}


const startGame = () => {
    usedLetters = [];
    mistakes = 0;
    hits = 0;
    wordContainer.innerHTML= '';
    usedLettersElement.innerHTML = '';
    startButton.style.display = 'none';
    inputLetters.style.display = 'block';
    inputLetters.style.display = 'block';
    submit.style.display = 'block';
    wordcorrect.innerHTML = '';


    drawHangman();
    selectRandomWord();
    drawWord();
    submit.addEventListener('click', letterEvent);
}


inputLetters.style.display = 'none';
submit.style.display = 'none';
finPartida.style.display = 'none';

tryAgain.addEventListener('click', reintentar);
startButton.addEventListener('click', startGame);
addWordButton.addEventListener('click', addWordToList)
crearElementosSociales()