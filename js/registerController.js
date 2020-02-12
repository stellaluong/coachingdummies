var register = document.getElementById('content');

function submitButton() {
let firstname = document.getElementById('fname').value;
let lastname = document.getElementById('lname').value;
let username = document.getElementById('uname').value;
let password = document.getElementById('password').value;
let company = document.getElementById('company').value;
let email = document.getElementById('email').value;
let male = document.getElementById('male').value;
let female = document.getElementById('female').value;
let contact = document.getElementById('contact').value;

let id = 0;
for(let i =0; i < model.registeredUsers.length; i++){
    id = i+1;
    console.log(model.screen.current)
}
model.registeredUsers.push({
    id: id,
    firsName: firstname,
    lastName: lastname,
    userName: username,
    password: password,
    company: company,
    email: email,
    genderMale: male,
    genderFemale: female,
    contact: contact,
});
showRegister();
}