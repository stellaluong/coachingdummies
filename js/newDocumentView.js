let idNumber = 0;
function showNewDocument() {
model.screen.current = "customerscreen";
if (model.screen.current = 'customerScreen') {
    document.getElementById('content').innerHTML = `
<div class="w3-main">
<div class="col-md-3"></div>
<div class="col-md-6 well">
<h2>New Document</h2>
<label>Create Question Form</label>
<input id="question${idNumber}" name="name" placeholder="Type Your Questions" type="text">
    <br>
    <button onclick="addQuestion()">+</button>
    <button onclick="sendDocument()">Send</button>
    `
}
}
function addQuestion() {
    idNumber++;
    document.getElementById('content').innerHTML += `
    <div class="w3-main">
<div class="col-md-3"></div>
<div class="col-md-6 well">
<input id="question${idNumber}" name="name" placeholder="First Name" type="text">`
console.log(content.innerHTML)
} 
function sendDocument() {
let questionObj = [];
for(i = 0; i < idNumber; i++){
  let singleQ =  document.getElementById("question"+i).value;
  questionObj.push(singleQ);
}
model.newDocument.newQuestion.push(questionObj);
  console.log(questionObj);
}

