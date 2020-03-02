function showLogin() {
  if (model.screen.current = 'loginScreen') {
    document.getElementById('content').innerHTML = `
    <div class="w3-col m3 containerOfLogin">
        <div class="w3-card-4 w3-panel w3-round-large w3-padding-16" style="width:100%" >
        <h3>Login</h3>
    <div class="w3-container w3-white  w3-round-medium" id="container">
    <label for="uname"><b>Username</b></label>
    <input id="uname" style="width: 200px"placeholder="Enter Username" name="uname" required>
    <br>
    <label for="psw"><b>Password</b></label>
    <input id="pass" type="password" placeholder="Enter Password" name="psw" required><br>
    <br>
    <button type="submit" onclick="checklogin()" style="float:right" class="w3-button w3-border w3-teal w3-round w3-small">Login</button>
    <button type="submit" onclick="showRegister()" style="float:right" class="w3-button w3-border w3-teal w3-round w3-small">Register</button>
    <br>
    <br>
    <div style="color: red">
        ${model.session.loginError || ''}
    </div>
</div>
        `;
  }
}