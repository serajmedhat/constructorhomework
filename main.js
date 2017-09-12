var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
console.log(firstPresident.front); 
console.log(firstPresident.back); 






var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
console.log(firstPresidentCloze.partial());
console.log(firstPresidentCloze.fullText);
console.log(firstPresidentCloze.cloze);
