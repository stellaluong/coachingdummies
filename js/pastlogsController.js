let logText;
let historyLog = '';
function getLatestConversationLog() {
    const currentUser = model.session.currentUserID;
    const logs = model.registeredUsers[currentUser].conversationLog;
    const latestLogIndex = logs.length -1;
    let latestLog = logs[latestLogIndex];
    return latestLog;
}

function updateLogText(txt) {
    logText = txt;
    
}

function postLogButton(){
    const currentUser = model.session.currentUserID;
    console.log("newConvLog: ", currentUser, " current user <-   -> model stien: " , model.registeredUsers );
    for(user of model.registeredUsers){
        if(user.id == currentUser){
            model.registeredUsers[currentUser].conversationLog.push({
                date: new Date().toLocaleDateString(),
                text: logText,
           

      });}   
    }
    showConversationLogPage();
}
