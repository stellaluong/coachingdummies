function showConversationLogPage() {
    const latestLog = getLatestConversationLog();
    document.getElementById('content').innerHTML = `
    <div class="w3-main">   
        <div class="w3-row">
        <div class="w3-col m3">
        <div class="w3-card w3-round w3-white">
             <h4 class="w3-center">${model.registeredUsers[0].firstname} ${model.registeredUsers[0].lastname}</h4>
             <p class="w3-center"><img src="avatar3.png" class="w3-circle" style="height:106px;width:106px" alt="Avatar"></p>
             <hr>
             <p><i class="fas fa-building fa-fw w3-margin-right w3-text-theme"></i>${model.registeredUsers[0].company}</p>
             <p><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>${model.registeredUsers[0].birthday}</p>
             <p><i class="fas fa-mobile-alt fa-fw w3-margin-right w3-text-theme"></i>${model.registeredUsers[0].contactno}</p>
             <p><i class="fa fa-fw fa-envelope fa-fw w3-margin-right w3-text-theme"></i>${model.registeredUsers[0].email}</p>
             <p><i class="fas fa-user-friends fa-fw w3-margin-right w3-text-theme"></i> Mentor: Per Eftang</p>
             </div>
             </div>
        <br>
        <div class="w3-col m7">
        <div class="w3-row-padding">
        <div class="w3-col m12">
        <div class="w3-card w3-round w3-white">
        <div class="w3-container w3-padding">
        <h2>Conversation log</h2>
        Navn: ${model.registeredUsers[0].firstname} ${model.registeredUsers[0].lastname}<br/>
        Dato: ${latestLog.date}<br/>
        <p oninput="updateLogText(this.value)" class="editor1">${latestLog.text}</p>
        </div>
        </div>
        `;
    }
