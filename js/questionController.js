function clickRating(value) {
    model.question.moodRating = value === model.question.moodRating ? 0 : value;
    showQuestion(); 
}
function next() {
    let commentText = document.getElementById("comment").value;
    let week = getCurrentWeekNo();
    const answers = getCurrentAnswers();
    answers.push({week, rating: model.question.moodRating, commentText});
    if(model.question.questions.length > answers.length)
    showQuestion();
}

function submit() {
let currentUser = model.session.currentUserID;
let submitted = getCurrentAnswers();
model.registeredUsers[currentUser].answerLog["week "+ getCurrentWeekNo()] = submitted;

}

