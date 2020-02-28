var register = document.getElementById('content');

function submitButton() {
let firstname = document.getElementById('fname').value;
let lastname = document.getElementById('lname').value;
let username = document.getElementById('uname').value;
let password = document.getElementById('password').value;
let company = document.getElementById('company').value;
let email = document.getElementById('email').value;
let contactno = document.getElementById('contactno').value;

let id = 0;
for(let i =0; i < model.registeredUsers.length; i++){
    id = i+1;
    console.log(model.screen.current)
}
model.registeredUsers.push({
    id: id,
    firstname: firstname,
    lastname: lastname,
    username: username,
    password: password,
    company: company,
    email: email,
    contactno: contactno,
    answerLog: {},
    module: "Module 1",
});
registerForm.innerHTML = 'You have registrated, You can login now.'
setTimeout(function() {showLogin()}, 3000); 
}