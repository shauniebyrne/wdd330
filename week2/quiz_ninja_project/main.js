// This adds a box on the website that you answer (just like when it warns you are leaving a site and makes sure you want to)
//const question = "What is Superman's real name?";
//const answer = prompt(question);
//alert(`You answered ${answer}`);

//creating a nested map
const quiz = new Map([
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
]);

//main game function
function start(quiz) {
    let score = 0;

    //main game loop
    //for-of loop to get values of the array
    for(const [question,answer] of quiz.entries()){
        //get answer from user
        const response = ask(question);
        check(response,answer);
    }

    //call gameOver function
    gameOver();

    //these other functions need to be in the main start function
    //because they use the same varibles as teh start(quiz) function
    //function declaration
    function ask(question){
        return prompt(question);
    }

    function check(response,answer){
    //check if answer is correct
        if(response === answer){
            alert('Correct!');
            //increase score by 1
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}.`);
        }
    } 

    function gameOver(){
        alert(`Game Over, you scored ${score} point${score > 1 ? 's' : ''}`);
    }
}

//invoke start() function with quiz map as argument, needed to run the function and start the quiz
start(quiz);