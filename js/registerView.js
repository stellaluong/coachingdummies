registerForm = document.getElementById('content');

function showRegister() {
    if (model.screen.current = 'registerScreen') {
    registerForm.innerHTML = `
    <div class="w3-main">
    <div class="col-md-3"></div>
    <div class="col-md-6 well">
    <h2>Registration</h2>
    <label>First Name :</label>
    <input class="form-control" id="fname" name="name" placeholder="First Name" type="text">
    <br>
    <label>Last Name :</label>
    <input class="form-control" id="lname" name="name" placeholder="Last Name" type="text">
    <br>
    <label>Username :</label>
    <input class="form-control" id="uname" name="name" placeholder="Username" type="text">
    <br>
    <label>Password :</label>
    <input class="form-control" id="password" name="name" placeholder="Password" type="text">
    <br>
    <label>Company :</label>
    <input class="form-control" id="company" name="company" placeholder="Company Name" type="text">
    <br>
    <label>Email :</label>
    <input class="form-control" id="email" name="email" placeholder="Valid Email" type="text">
    <br>
    <label>Contact No</label>
    <input class="form-control" id="contactno" name="contact" placeholder="Contact No." type="text">
    <br>
    <button type="submit" id="submitRegister" onclick="submitButton()" class="w3-button w3-border w3-teal w3-round-large">Submit</button>
    </div>
    </div>
    </div>
    
    ` ;
    
}

    }
