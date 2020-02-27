let questionLog = '';
function historyQuestions() {
    questionLog = '';
    for (j of model.registeredUsers) {
        console.log("er inlogget user riktig? " + j.id , model.session.currentUserID)
        if (j.id == model.session.currentUserID){
            //objekter med arrays inni- unpack disse! men! behold overskriften (week1 osv)
            for(week in j.answerLog){
                const comments = j.answerLog[week].map(ting => ting.commentText).join(' ');
                const ratings = j.answerLog[week].map(ting => ting.rating).join(' ');
                questionLog += `<li>${week}:</li>Rating:<br> ${ratings} <br> Comment: <br>${comments}<br><br> `;
                }
            //loope mellom hvert week array
    }
    }

    showPastquestionlogs();
}

