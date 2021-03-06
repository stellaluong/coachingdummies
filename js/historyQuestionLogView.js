function showPastquestionlogs() {
  const currentUser = model.session.currentUserID;
  let modelUserPath = model.registeredUsers[currentUser];
    document.getElementById('content').innerHTML = ` 
  <div class="w3-main"> 
        <div class="w3-row-padding">
          <div class="w3-third">
              <div class="w3-white w3-text-grey w3-card-4">
                  <div class="w3-display-container">
                      <h4 class="w3-center">${modelUserPath.firstname} ${modelUserPath.lastname}</h4>
                      <p class="w3-center"><img src="avatar3.png" class="w3-circle" style="height:106px;width:106px" alt="Avatar"></p>
                  </div>
                      <p class="w3-container w3-margin-bottom"><i class="fas fa-building fa-fw w3-margin-right w3-text-theme"></i>${modelUserPath.company}</p>
                      <p class="w3-container w3-margin-bottom"><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>${modelUserPath.birthday}</p>
                      <p class="w3-container w3-margin-bottom"><i class="fas fa-mobile-alt fa-fw w3-margin-right w3-text-theme"></i>${modelUserPath.contactno}</p>
                      <p class="w3-container w3-margin-bottom"><i class="fa fa-fw fa-envelope fa-fw w3-margin-right w3-text-theme"></i>${modelUserPath.email}</p>
                      <p class="w3-container w3-margin-bottom"><i class="fas fa-user-friends fa-fw w3-margin-right w3-text-theme"></i> Mentor: Per Eftang</p> 
                  <hr>
                      <div class="w3-display-container">
                            <button onclick="pastlogs()" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-history fa-fw"></i> </i> Conversation Log</button>
                            <button onclick="historyQuestions()" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-history fa-fw"></i> Question Log</button>
                      </div>
              
           </div>
         </div>
         <div class="w3-content marginbody" style="max-width:1150px;">
         <div class="w3-twothird">
         <div class="w3-container w3-card w3-white w3-margin-bottom">
         <h2 class="w3-text-grey w3-padding-16">QUESTION LOGS</h2>
                ${questionLog}
            </div>
       </div>
  </div>
`;
}
