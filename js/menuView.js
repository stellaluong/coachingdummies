function showMenu() {
    document.getElementById('header').innerHTML = `
    <nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:200px;" id="mySidebar"><br>
    <div class="w3-container w3-row">
    <div class="w3-col s4">
      <img src="avatar2.png" class="w3-circle w3-margin-right" style="width:46px">
    </div>
    <div class="w3-col s8 w3-bar">
    </div>
    </div>
    <hr>
    <div class="w3-container">
      <h5>Dashboard</h5>
    </div>
<div class="w3-bar-block">
    <a href="javascript:showLogin()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-align-justify"></i> DASHBOARD</a>
      <a href="#admin" class="w3-bar-item w3-button w3-padding"><i class="fa fa-fw fa-user"></i> ADMIN</a>
      <a href="javascript:showCustomer()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-fw fa-user"></i> CUSTOMER</a>
      <a href="javascript:showUsers()" class="w3-bar-item w3-button w3-padding><i class="fas fa-address-book"></i> USERS</a>
      <a href="javascript:showQuestion()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-fw fa-envelope"></i> Forms</a>
      <a href="javascript:showRegister()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-fw fa-envelope"></i> Registration</a>
    </div>
    </div>
    </nav>
    <div class="w3-main" style="margin-left:300px;margin-top:43px;">
    <header class="w3-container" style="padding-top:22px">
    <h5><b><i class="fa fa-dashboard"></i> My Dashboard</b></h5>
  </header>
    `;
    
}