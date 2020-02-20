let questionLog = '';

function historyQuestions() {
    const answers = getCurrentAnswers();
   console.log(answers, "hei! her er answer§!");
    for (answer of answers) {
     
        questionLog += answers;
    }
    console.log(questionLog);

    showCustomer();
}

