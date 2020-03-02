function checklogin() {
    let username = document.getElementById("uname");
    let pass = document.getElementById("pass");
    let correctPassword = null;
for(user of model.registeredUsers){
    if(username.value == user.username){
        correctPassword = user.password;
        console.log(correctPassword, user)
    }
}
    if (pass.value != correctPassword) {
        model.session.user = null;
        model.session.loginError = 'Ugyldig brukernavn/passord.';
        showLogin();
        return;
    }


    if (username.value == "admin" && pass.value == "admin") {
        //window.location.href = "AdminKontrollPanel\adminoversiktView.js"
        model.session.user = {
            name: 'admin',
          
        };
        model.session.loginError = null;
        model.session.isAdmin = "block";
        for(users of model.registeredUsers){
            if(user.username == model.session.user.name){
                model.session.currentUserID = user.id;
            }

        }
        showDashboard();
        showMenu();
    } else {
        model.session.user = {
            name: username.value,
            isAdmin: false
        };
console.log(user.username)
    for(users of model.registeredUsers){
            if(users.username == model.session.user.name){
                 model.session.currentUserID = users.id;}
    }
        console.log(model.session.currentUserID)
        showQuestion();
    }
}

let output = document.getElementById('')
let html = '';

function display() {
    let none = '';
    page.innerHTML = `  
    `
}