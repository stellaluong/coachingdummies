function pastlogs() {
    for(log of model.registeredUsers[0].conversationLog) {
        historyLog += log.date + '<br>' + ' ' + log.text + '<br>' 
     }
    document.getElementById('content').innerHTML = ` 
    <div class="w3-main"> 
    <div class="w3-content w3-margin-top" style="max-width:1400px;">
    <div class="w3-row-padding">
    <div class="w3-third">
    <div class="w3-white w3-text-grey w3-card-4">
            <div class="w3-display-container">
            <h4 class="w3-center">${model.registeredUsers[0].firstname} ${model.registeredUsers[0].lastname}</h4>
            <p class="w3-center"><img src="avatar3.png" class="w3-circle" style="height:106px;width:106px" alt="Avatar"></p>
            <hr>
            <p class="w3-container w3-margin-bottom"><i class="fas fa-building fa-fw w3-margin-right w3-text-theme"></i>${model.registeredUsers[0].company}</p>
                    <p class="w3-container w3-margin-bottom"><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>${model.registeredUsers[0].birthday}</p>
                    <p class="w3-container w3-margin-bottom"><i class="fas fa-mobile-alt fa-fw w3-margin-right w3-text-theme"></i>${model.registeredUsers[0].contactno}</p>
                    <p class="w3-container w3-margin-bottom"><i class="fa fa-fw fa-envelope fa-fw w3-margin-right w3-text-theme"></i>${model.registeredUsers[0].email}</p>
                    <p class="w3-container w3-margin-bottom"><i class="fas fa-user-friends fa-fw w3-margin-right w3-text-theme"></i> Mentor: Per Eftang</p>
        </div>
        <hr>
            <div class="w3-third">
             <div class="w3-white w3-text-grey w3-card-4">
              <div class="w3-display-container">
            <button onclick="pastlogs()" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i>History Log</button>
    </div>
    </div>
    </div>
    </div>
</div>
<div class="w3-main"> 
<div class="w3-twothird">
<div class="w3-container w3-card w3-white w3-margin-bottom">
     <div class="w3-container w3-padding">
     <h2 class="w3-text-grey w3-padding-16">HISTORY LOGS</h2>
     <hr>
     <div id="content">${historyLog}</div>
       </div>
</div>
</div>
</div>
`;
}
