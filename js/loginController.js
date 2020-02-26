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
            isAdmin: true
        };
        model.session.loginError = null;
        for(users of model.registeredUsers){
            if(user.username == model.session.user.name){
                model.session.currentUserID = user.id;
            }

        }
        showDashboard();
        console.log("du er admin!")
    } else {
        model.session.user = {
            name: username.value,
            isAdmin: false
        };
                        for(users of model.registeredUsers){
                            if(user.username == model.session.user.name){
                                model.session.currentUserID = user.id;
                            }
                        }
        console.log(model.session.currentUserID)
        showQuestion();
        console.log("du er ikke admin din dust")
    }
console.log(model.session);
}

let output = document.getElementById('')
let html = '';

function display() {
    let none = '';
    page.innerHTML = `  
    `
}