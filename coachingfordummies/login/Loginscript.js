let Username = document.getElementById("uname");

let pass = document.getElementById("pass");

function checklogin() {
    if (Username.value == "admin" && pass.value == "admin") {
        window.location.href = "AdminKontrollPanel\adminoversiktView.js"
        console.log("du er admin!")

    } else {
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