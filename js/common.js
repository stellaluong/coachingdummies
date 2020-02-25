function getCurrentWeekNo() {
    let now = new Date();
    let onejan = new Date(now.getFullYear(), 0, 1);
    return Math.ceil((((now - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

function getCurrentAnswers() {
    const currentWeekNo = getCurrentWeekNo();
    const weekLabel = 'week' + currentWeekNo;
    let answers = model.answers[weekLabel];
    if (!answers) {
        answers = model.answers[weekLabel] = [];
    }
    return answers;
}
function toggleCustomerProfile(userID) {
    let user = model.registeredUsers[userID];
    user.showCustomer = true;

    showCustomer()
    user.showCustomer = false;
}