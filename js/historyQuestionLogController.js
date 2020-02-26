let questionLog = '';
let qText;
function historyQuestions() {
    let currentUser = model.session.currentUserID;
     
        // console.log(pastAnswersLog, 'hehehe')
        for (let i =0; i<model.registeredUsers[currentUser].answerLog.week1.length; i++){
            console.log("test" ,  model.registeredUsers[currentUser].answerLog.week1[i])
            
        }
function updateQText(qHistory) {
qText = qHistory;
}

    
    showCustomer();
}

