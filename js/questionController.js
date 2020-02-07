function clickRating(value) {
    model.question.moodRating = value === model.question.moodRating ? 0 : value;
    showQuestion();
}

function next(submit) {
    const answers = getCurrentAnswers();
    answers.push({ rating: model.question.moodRating, comment: 'no comment' });
    model.question.moodRating = 0;
    showQuestion();
}