registerForm = document.getElementById('content');

function showRegister() {
    if (model.screen.current = 'registerScreen') {
    registerForm.innerHTML = `
    <div class="w3-main">
    <div class="col-md-3"></div>
    <div class="col-md-6 well">
    <h2>Registration</h2>
    <label>First Name :</label>
    <input id="fname" name="name" placeholder="First Name" type="text">
    <br>
    <label>Last Name :</label>
    <input id="lname" name="name" placeholder="Last Name" type="text">
    <br>
    <label>Username :</label>
    <input id="uname" name="name" placeholder="Username" type="text">
    <br>
    <label>Password :</label>
    <input id="password" name="name" placeholder="Password" type="text">
    <br>
    <label>Company :</label>
    <input id="company" name="company" placeholder="Company Name" type="text">
    <br>
    <label>Email :</label>
    <input id="email" name="email" placeholder="Valid Email" type="text">
    <br>
    <label>Birthday :</label>
    <input id="birthday" type="date" name="bday">
    <br>
    <label>Gender :</label>
    <input id="male" name="gender" type="radio" value="Male">
    <label>Male</label>
    <input id="female" name="gender" type="radio" value="Female">
    <label>Female</label>
    <br>
    <label>Contact No</label>
    <input id="contactno" name="contact" placeholder="Contact No." type="text">
    <br>
    <br>
    <button type="submit" id="submitRegister" onclick="submitButton()" class="w3-button w3-border w3-teal w3-round-large">Submit</button>
    </div>
    </div>
    </div>
    
    ` ;
    }
    else {commentInput = ''}
    console.log(model.screen.current)
    }
