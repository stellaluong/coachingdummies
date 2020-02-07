function checklogin() {
    let Username = document.getElementById("uname");
    let pass = document.getElementById("pass");

    if (pass.value == "wrong") {
        model.session.user = null;
        model.session.loginError = 'Ugyldig brukernavn/passord.';
        showLogin();
        return;
    }


    if (Username.value == "admin" && pass.value == "admin") {
        //window.location.href = "AdminKontrollPanel\adminoversiktView.js"
        model.session.user = {
            name: 'admin',
            isAdmin: true
        };
        model.session.loginError = null;
        UserShow();
        console.log("du er admin!")
    } else {
        model.session.user = {
            name: Username.value,
            isAdmin: false
        };
        questionShow();
        console.log("du er ikke admin din dust")
    }

}


let output = document.getElementById('')
let html = '';





function display() {
    let none = '';
    page.innerHTML = `  
    `
}