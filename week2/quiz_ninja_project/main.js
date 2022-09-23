// This adds a box on the website that you answer (just like when it warns you are leaving a site and makes sure you want to)
//const question = "What is Superman's real name?";
//const answer = prompt(question);
//alert(`You answered ${answer}`);

//creating a nested array
const quiz = new Map([
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
]);

let score = 0;
//for-of loop to get values of the array
for(const [question,answer] of quiz.entries()){
    //get answer from user
    const response = prompt(question);
    //check if answer is correct
    if(response === answer){
        alert('Correct!');
        //increase score by 1
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}.`);
    }
} 

//end of game, report the player's score
alert(`Game Over, you scored ${score} point${score > 1 ? 's' : ''}`);
//ternary operator (?) used at the end of this code - instead of a nother if/else statement