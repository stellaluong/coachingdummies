function clickRating(value) {
    model.question.moodRating = value === model.question.moodRating ? 0 : value;
    showQuestion();
}

function next() {
    let commentText = document.getElementById("comment").value
    const answers = getCurrentAnswers();
    answers.push({ rating: model.question.moodRating, comment: commentText, });
    console.log(answers)
    showQuestion();
}
