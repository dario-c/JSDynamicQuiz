var Questions = {
    questionBox: { div: document.createElement('div'), id:"question" },

    insertTitleInto: function(parent) {
        var questionTitle = document.createElement("h2");
        var textNode = document.createTextNode(triviaQuestions[0].question);
        questionTitle.appendChild(textNode);
        parent.appendChild(questionTitle);
    },

    insertChoicesInto: function(parent){
        var all = triviaQuestions[0].choices;
        for(var i = 0; i < all.length; i++){
            parent.appendChild(Questions.createEachChoice(all[i], i));}},


    createEachChoice: function(choice, i){
        var newNode = document.createElement("label");
        var input = document.createElement("input");
        input.type = "radio";
        input.name = "choices";
        input.value = i;
        newNode.appendChild(input);
        newNode.appendChild(document.createTextNode(choice));
        return newNode;
    }
};
