let logText;
let historyLog = '';
function getLatestConversationLog() {
    const currentUser = getCurrentUserObject();
    const logs = currentUser.conversationLog;
    const latestLog = logs[logs.length - 1];
    return latestLog;
}

function updateLogText(txt) {
    logText = txt;
    
}

function getCurrentUserObject() {
    return model.registeredUsers[0];
}

function newConversationLog(){
    const currentUser = getCurrentUserObject();
    currentUser.conversationLog.push({
        date: new Date().toLocaleDateString(),
        text: logText,
    });
    showConversationLogPage();
}
function pastlogs() {

 for(log of model.registeredUsers[0].conversationLog) {
    historyLog += log.date + ' ' + log.text + '<br>'
 }
    showCustomer();

}