//приховання кнопки "ПОЧАТОК ГРИ" та відображення контейнера при натисненні кнопки 
document.getElementById("btn-start").addEventListener("click", toShowContainer);
function toShowContainer(){
    document.getElementById('container').style.display = "block";
    document.getElementById('btn-start').style.display = "none";
}

//набір довільних слів (змінити на базу)
const words = ["кіт", "пес"];

//рандомний вибір слова із масиву (бази)
let randomNumber = Math.floor(Math.random() * words.length);
let randomWord = words[randomNumber];

//заміна літер у слові на нижнє підкреслення та виведення на сторінку
let coverWord = "";
for (let i = 0; i < randomWord.length; i++) {
    coverWord += "_";
}
let exWord = document.querySelector('p');
exWord.textContent = coverWord;

//порівняння літер користувача із літерами рандомного слова
document.getElementById("btn").addEventListener("click", compareValueBtnWithLetterInRandomWord);

function compareValueBtnWithLetterInRandomWord(){
    const btnValue = document.activeElement.textContent;
    let coverWordNew = "";
    for (let i = 0; i < randomWord.length; i++) {
        if (btnValue === randomWord[i]) {
            coverWordNew += btnValue;
        } else if (document.querySelector("p").innerText[i] === "_"){
             coverWordNew += "_";
        } else {
           coverWordNew += randomWord[i];
        }
    }
    exWord.textContent = coverWordNew;
    //дезактивує натиснуту кнопку:
    document.activeElement.disabled = true;
} 
//підрахунок кількості спроб (5) та завершення гри
document.getElementById("btn").addEventListener("click", counter);
   
let count = 9;
function counter(){
    if (count >= 0) {
        document.getElementById("counter").textContent = count;
    }
        count--;
    if (document.getElementById("counter").innerText === "0"){
        $("#exampleModalCenter").modal("show");
        document.getElementById("modalText").textContent = "Грайте далі і все вийде";
    }
    if (document.querySelector("p").innerText === randomWord){
        $("#exampleModalCenter").modal("show");
        document.getElementById("modalText").textContent = "Вітання! Ви справжній ерудит";
    }
}
