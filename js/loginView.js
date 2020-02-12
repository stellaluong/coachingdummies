function showLogin() {
  if (model.screen.current = 'loginScreen') {
    document.getElementById('content').innerHTML = `
    <div class="w3-main">
    <div class="container" id="container">
    <label for="uname"><b>Username</b></label>
    <input id="uname" placeholder="Enter Username" name="uname" required>
    <br>
    <label for="psw"><b>Password</b></label>
    <input id="pass" type="password" placeholder="Enter Password" name="psw" required>
    <button type="submit" onclick="checklogin()" class="btn">Login</button>
    <label> 
    <input type="checkbox" checked="checked " name="remember"> Remember me
      </label>
    <button type="button" class="btn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
    <div style="color: red">
        ${model.session.loginError || ''}
    </div>
</div>

        `;
  }
}