var gameStats = {
    usersAnswers: [],
    currentAnswer: undefined,
    level: 0,
    correct: 0
};

var startButton = document.getElementById('start');
var nextButton = document.createElement("button");

function startGame(){
    var parent = this.parentNode;
    parent.removeChild(this);
    var div = composeQuestion();
    parent.insertBefore( div, document.scripts[0] );
}

function composeQuestion(){
    var qu = Questions;
    var questionBox = document.createElement("div");
    questionBox.id = "question";
    qu.insertTitleInto(questionBox, gameStats.level);
    qu.insertChoicesInto(questionBox, gameStats.level);
    return questionBox;
}

function listenForSelection(here){
    here.addEventListener("click", function(event){
        if(event.target.name === "choices"){
            checkValue(this);
            if(!gameStats.nextActivated){ addNextButton(); }
        }
    }, false)}

function addNextButton(){
    var questionBox = document.getElementById("question").parentNode;
    questionBox.appendChild(nextButton);
    gameStats.nextActivated = true;
}

function refreshStats(){
    gameStats.usersAnswers[gameStats.level] = gameStats.currentAnswer;
    gameStats.currentAnswer = undefined;
    gameStats.nextActivated = false;
    console.log(gameStats.usersAnswers);
    gameStats.level++;
}

function checkValue(here){
    var allChoices = here.getElementsByTagName("input");
    for(var i = 0; i < allChoices.length; i++){
        if (allChoices[i].checked){
            gameStats.currentAnswer = allChoices[i].value;
        }
    }
}

function composeResult(){
    var resultBox = document.createElement("div");
    resultBox.id = "result";
    resultBox.appendChild(document.createTextNode("Success! You have finished the test with: "+ gameStats.correct));
    return resultBox;
}

function checkScore(){
    for(var i = 0; i < gameStats.usersAnswers.length; i++){
        if(gameStats.usersAnswers[i] == triviaQuestions[i].correct){
            gameStats.correct++;
            }
    }
}

startButton.addEventListener("click", startGame, false);

if(gameStats.level < triviaQuestions.length) {
    listenForSelection(document);
    nextButton.appendChild(document.createTextNode(" Next "));
    nextButton.addEventListener("click", function () {
        refreshStats();
        var parent = this.parentNode;
        parent.removeChild(this);
        parent.removeChild(document.getElementById('question'));

        if(gameStats.level < triviaQuestions.length){
            parent.insertBefore(composeQuestion(), document.scripts[0]);
        } else {
            checkScore();
            parent.insertBefore(composeResult(), document.scripts[0]);
        }
    }, false);
}