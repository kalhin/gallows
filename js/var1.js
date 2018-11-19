//створюємо масив
const words = ["корова", "мавпа", "свиня"];

//обираємо випадкове слово
const randomWord = words[Math.floor(Math.random() * words.length)];
const countLetters = randomWord.length;
//встановлюємо масив відповідей
let answerArr = [];
for (let i = 0; i < randomWord.length; i++) {
    answerArr[i] = ["_"];
}

//ігровий цикл
while (countLetters > 0) {
    //показуємо гравцю його прогрес
    alert(answerArr.join(" "));
    //отримуємо варіанти від гравця
    let userLetter = prompt("Вгадайте літеру, або натисніть Cansel, щоб вийти");
    if (userLetter === null) {
        //виходимо із ігрового циклу
        break;
    } else if (userLetter !== 1) {
        alert("Будь ласка введіть одну літеру");
    } else {
        //оновлюємо стан гри
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === userLetter) {
                answerArr[i] = userLetter;
                countLetters--;
            }
        }
    }
}
//показуємо відповідь
alert(answerArr.join(" "));
alert("Гарна робота! твоє слово: " + randomWord);