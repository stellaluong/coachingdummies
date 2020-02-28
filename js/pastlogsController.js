let logText;
let convolog = '';
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

function pastlogs() {
    convolog = '';
    const currentUser = model.session.currentUserID;
    for (l of model.registeredUsers[currentUser].conversationLog) {
    convolog += `<h4><span class="w3-tag w3-teal w3-round">${l.date}</span></h4> ${l.text}<hr>` }
    showConversationLog();
        } 

function postLogButton(){
    const currentUser = model.session.currentUserID;
    for(user of model.registeredUsers){
        if(user.id == currentUser){
            model.registeredUsers[currentUser].conversationLog.push({
                date: new Date().toLocaleDateString(),
                text: logText,
           

      });}   
    }
    showConversationLogPage();
}
