//приховання кнопки "ПОЧАТОК ГРИ" та відображення контейнера при натисненні кнопки 
document.getElementById("btn-start").addEventListener("click", toShowContainer);
function toShowContainer(){
    document.getElementById('container').style.display = "block";
    document.getElementById('btn-start').style.display = "none";
}
//набір довільних слів (змінити на базу)
const words = ["кіт", "кінь", "пес", "півень"];

//рандомний вибір слова із масиву (бази)
const randomNumber = Math.floor(Math.random() * words.length);
let randomWord = words[randomNumber];
const countLetter = randomWord.length;
let count = 5;
document.getElementById("counter").textContent = count;
//заміна літер у слові на нижнє підкреслення та виведення на сторінку
let coverWord = [];
for (let i = 0; i < countLetter; i++) {
    coverWord[i] = ["_"];
}
let exWord = document.querySelector('p');
exWord.textContent = coverWord.join(" ");

//порівняння літер користувача із літерами рандомного слова
document.getElementById("btn").addEventListener("click", compareValueBtnWithLetterInRandomWord);
function compareValueBtnWithLetterInRandomWord(){
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
    //умова при відгадування слова
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

document.getElementById("button-play-more").addEventListener("click", reloadgame);
function reloadgame(){
    document.querySelector("p").innerText = "";
    $("#exampleModalCenter").modal("hide");
    $("[name]").prop("disabled",false);
}