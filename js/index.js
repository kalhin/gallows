//приховання кнопки "ПОЧАТОК ГРИ" та відображення контейнера при натисненні кнопки 
document.getElementById("btn-start").addEventListener("click", toShowContainer);
function toShowContainer(){
    document.getElementById('container').style.display = "block";
    document.getElementById('btn-start').style.display = "none";
}

//набір довільних слів (змінити на базу)
const words = ["сад", "кат", "ара"];

//рандомний вибір слова із масиву (бази)
let randomNumber = Math.floor(Math.random() * words.length);
let randomWord = words[randomNumber];

//початок гри
document.getElementById("btn-start").addEventListener("click", startGame);
function startGame(){

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
            } else if(document.querySelector("p").innerText[i] === "_"){
                 coverWordNew += "_";
            } else {
               coverWordNew += randomWord[i];
            }
        }
        exWord.textContent = coverWordNew;
        //дезактивує натиснуту кнопку:
        document.activeElement.disabled = true;
    } 

    ////завершення гри
    //if (document.querySelector("p").innerText === randomWord) {
    //    alert("вітаю з перемогою")
    //    //виклик вікна "вітаю з перемогою" та пропозиція зіграти ще
    //} else {
    //    alert("ви програли")
    //    //виклик вікна "ви програли" та пропозиція зіграти ще
    //}
}

