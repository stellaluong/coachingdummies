function showNewDocument() {
model.screen.current = "customerscreen";
if (model.screen.current = 'customerScreen') {
    document.getElementById('content').innerHTML = `
<div class="w3-main">
<div class="col-md-3"></div>
<div class="col-md-6 well">
<h2>Registration</h2>
<label>First Name :</label>
<input id="fname" name="name" placeholder="First Name" type="text">
    <br>
    <button onclick="addQuestion()">+</button>
    <button onclick="sendDocument()">Send</button>
    `
}
}
function addQuestion() {
    document.getElementById('content').innerHTML += `
    <div class="w3-main">
<div class="col-md-3"></div>
<div class="col-md-6 well">
    <label>First Name :</label>
<input id="fname" name="name" placeholder="First Name" type="text">`
console.log(content.innerHTML)
} 

