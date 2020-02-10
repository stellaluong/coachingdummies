function showMenu() {
    document.getElementById('header').innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="sidebar">
    <a href="#dashboard"><i class="fa fa-align-justify"></i> DASHBOARD</a>
      <a href="#admin"><i class="fa fa-fw fa-user"></i> ADMIN</a>
      <a href="javascript:showUsers()"><i class="fas fa-address-book"></i> USERS</a>
      <a href="javascript:showQuestion()"><i class="fa fa-fw fa-envelope"></i> Forms</a>
      <a href="javascript:showRegister()"><i class="fa fa-fw fa-envelope"></i> Registration</a>
    </div>;
    Meny:
    <div class="main" </div>
    <a href="javascript:showLogin()" > Login </a> 
    <a href="javascript:showUsers()" > Admin </a> 
    <a href="javascript:showQuestion()" > Spørsmål </a>    
    `;
    
}