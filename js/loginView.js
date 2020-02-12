function showLogin() {
  if (model.screen.current = 'loginScreen') {
    document.getElementById('content').innerHTML = `
    <div class="w3-main w3-white">
        <div class="w3-col m3">
        <div class="w3-card-4" style="width:70%">
        <header class="w3-container w3-light-gray">
        <h3>Login</h3>
        </header>
  
  <div class="w3-container w3-white" id="container">
    <label for="uname"><b>Username</b></label>
    <input id="uname" placeholder="Enter Username" name="uname" required>
    <br>
    <label for="psw"><b>Password</b></label>
    <input id="pass" type="password" placeholder="Enter Password" name="psw" required><br>
    <button type="submit" onclick="checklogin()" class="w3-button w3-border w3-teal w3-round-large">Login</button>
    <label> 
    <br>
    <input type="checkbox" checked="checked " name="remember"> Remember me
    </label><br>
    <span class="psw">Forgot <a href="#">password?</a></span>
    <div style="color: red">
        ${model.session.loginError || ''}
    </div>
</div>

        `;
  }
}