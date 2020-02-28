let questionLog = '';
function historyQuestions() {
    questionLog = '';
    for (j of model.registeredUsers) {
        if (j.id == model.session.currentUserID){
            for(week in j.answerLog){
                const comments = j.answerLog[week].map(ting => ting.commentText).join(' ');
                const ratings = j.answerLog[week].map(ting => ting.rating).join(' ');
                questionLog += `<h4><span class="w3-tag w3-teal w3-round">${week}</span></h4><h5 class="w3-text-teal">Rating:</h5>${ratings}<br><h5 class="w3-text-teal">Comment:</h5>${comments}<br><br><hr> `;
                }
    }
    }

    showPastquestionlogs();
}

