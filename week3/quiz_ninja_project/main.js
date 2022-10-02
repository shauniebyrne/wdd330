// This adds a box on the website that you answer (just like when it warns you are leaving a site and makes sure you want to)
//const question = "What is Superman's real name?";
//const answer = prompt(question);
//alert(`You answered ${answer}`);

//creating an object inside an array
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];

const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    render(target, content, attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element) {
        //adding css in js
        element.style.display = 'block';
    },
    hide(element) {
        element.style.display = 'none';
    }
};

//main object
const game = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;
        // main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }
        view.hide(view.start);
        // end of main game loop
        this.gameOver();
    },
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        const response =  prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result, 'Correct!', {'class':'correct'});
            alert('Correct!');
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer was ${answer}`, {"class":"wrong"});
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.show(view.start);
    }
}


//invoke start() function with quiz map as argument, needed to run the function and start the quiz
game.start(quiz);
view.start.addEventListener('click', () => game.start(quiz), false);