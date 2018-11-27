const currentGame = {
    startGame: " ",
    generateWord: " ",
    attempCounter: " ",
    coverLetter: " ",
    compareValue: " ",
    gameResult: " ",
    reloadGame: " ",
}


//приховання кнопки "ПОЧАТОК ГРИ" та відображення контейнера при натисненні кнопки 
document.getElementById("btn-start").addEventListener("click", startGame);
function startGame(){
    document.getElementById('container').style.display = "block";
    document.getElementById('btn-start').style.display = "none";
}
//генератор випадкового слова
function generateWord(){
const words = ["кіт", "кінь", "пес", "півень"];
const randomNumber = Math.floor(Math.random() * words.length);
let randomWord = words[randomNumber];    
}
//лічильник спроб
function attemptСounter(){
const countLetter = randomWord.length;
let count = 5;
document.getElementById("counter").textContent = count;
}
//заміна літер на "_" у згенерованому слові
function coverLetter(){
let coverWord = [];
for (let i = 0; i < countLetter; i++) {
    coverWord[i] = ["_"];
}
let exWord = document.querySelector('p');
exWord.textContent = coverWord.join(" ");
}
//порівняння літер користувача із літерами рандомного слова
document.getElementById("btn").addEventListener("click", compareValue);
function compareValue(){
    const btnValue = document.activeElement.textContent;
   // let coverWordNew = "";
    for (let i = 0; i < countLetter; i++) {
        if (btnValue === randomWord[i]) {
            coverWord[i] = [btnValue];
            exWord.textContent = coverWord.join(" ");
            //деактивує активну кнопку
            document.activeElement.disabled = true;
        } else {
            document.activeElement.disabled = true;
        } 
    } 
}
//умова при відгадування слова
function gameResult(){
    if (coverWord.join("") === randomWord) {
       $("#exampleModalCenter").modal("show");
        document.getElementById("modalText").textContent = "Вітання! Ви справжній ерудит";
    }
    if (count === 1) {
        $("#exampleModalCenter").modal("show");
        document.getElementById("modalText").textContent = "Грайте далі і все вийде";
    }
    count--;
    document.getElementById("counter").textContent = count;
}
//перезавантаження гри
document.getElementById("button-play-more").addEventListener("click", reloadGame);
function reloadGame(){
    document.querySelector("p").innerText = "";
    $("#exampleModalCenter").modal("hide");
    $("[name]").prop("disabled",false);
}