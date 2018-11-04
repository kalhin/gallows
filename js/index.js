//набір довільних слів (змінити на базу)
const words = ["курча", "кат", "собака"];

//рандомний вибір слова із масиву (бази)
let randomNumber = Math.floor(Math.random() * words.length);
let randomWord = words[randomNumber];

//виведення вибраного слова 
//document.write(randomWord);

//заміна літер у слові на нижнє підкреслення та виведення на сторінку
let coverWord = [];
for (let i = 0; i < randomWord.length; i++) {
    coverWord += "_ ";
}
document.write(coverWord);

//порівняння літери користувача із літерами рандомного слова
document.getElementById("btn").addEventListener("click", compareValueBtnWithLetterInRandomWord);

function compareValueBtnWithLetterInRandomWord(){
    let coverWordChange = [];
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === "a") { //замість "а" потрібно вибрати value кнопки btn
            coverWordChange += "a "; //замість "а" потрібно вибрати value кнопки btn
        } else {
            coverWordChange += "_ ";
        }
    }
    document.write(coverWordChange);
}




