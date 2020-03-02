
function showMenu() {
    document.getElementById('header').innerHTML = `
    <div style="display: ${model.session.isAdmin}">
    <nav class="w3-sidebar w3-collapse w3-white w3-animate-left w3-top" style="z-index:4; width:200px;" id="mySidebar"><br>
    <div class="w3-container w3-row">
    <div class="w3-col s4">
      <img src="logo1.png" class="w3-circle w3-margin-right" style="width:150px; position: center;">
    </div>
    <div class="w3-col s8 w3-bar">
    </div>
    </div>
    <hr>
    <div class="w3-container">
      <h5>Dashboard</h5>
    </div>
<div class="w3-bar-block">
      <a href="javascript:showDashboard()" class="w3-bar-item w3-button w3-padding"><i class="far fa-user"></i> DASHBOARD</a>
      <a href="javascript:showUsers()" class="w3-bar-item w3-button w3-padding"><i class="fas fa-list-ol"></i> MODULES</a>
      <a href="javascript:showAllUsers()" class="w3-bar-item w3-button w3-padding"><i class="far fa-address-card"></i> USERS</a>
      <a href="javascript:showNewDocument()" class="w3-bar-item w3-button w3-padding"><i class="far fa-address-book"></i> New Document</a>

    </div>
    </div>
    </nav>
  </header></div>
    `;
    
}