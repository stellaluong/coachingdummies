var register = document.getElementById('content');
function submitButton() {
let firstname = document.getElementById('fname').value;
let lastname = document.getElementById('lname').value;
let username = document.getElementById('uname').value;
//**** alle dissa */
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
});
showRegister();
}