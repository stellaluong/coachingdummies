
function clickRating(value) {
    model.question.moodRating = value === model.question.moodRating ? 0 : value;
    showQuestion(); 
}
function next() {
    let commentText = document.getElementById("comment").value;
    let week = getCurrentWeekNo();
    const answers = getCurrentAnswers();
    answers.push({week, rating: model.question.moodRating, commentText});
    console.log(answers.length, model.question.questions.length)
    if(model.question.questions.length > answers.length)
        showQuestion();
}

function submit() {
let submitted = getCurrentAnswers();
submitted.push({answers})
}

