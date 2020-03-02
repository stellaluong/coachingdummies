function showLogin() {
  if (model.screen.current = 'loginScreen') {
    document.getElementById('content').innerHTML = `
    <div class="w3-col m3 containerOfLogin">
        <div class="w3-card-4 w3-panel w3-round-large w3-padding-16" style="width:100%" >
        <h3>Login</h3>

   
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="Username" id="uname">
    </div>
    </div>
    <div class="form-group">
    <div class="input-group">
      <div class="input-group-prepend">
      <span class="input-group-text"><i class="fa fa-key"></i></span>
      </div>
    <input class="form-control" type="password" placeholder="Enter Password" id="pass" >
    </div>
    </div>

    <button type="submit" onclick="checklogin()" style="float:right" class="loginButton">Login</button>
    <button type="submit" onclick="showRegister()" style="float:right &nbsp;" class="registerButton">Register</button>
    <br>
    <br>
    <div style="color: red">
        ${model.session.loginError || ''}
    </div>
</div>

        `;
  }
}