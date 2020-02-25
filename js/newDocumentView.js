let idNumber = 0;
function showNewDocument() {
model.screen.current = "customerscreen";
if (model.screen.current = 'customerScreen') {
    document.getElementById('content').innerHTML = `
<div class="w3-main">

<div class="col-md-6 well">
<h2>New Document</h2>
<label>Create Question Form</label>
<hr>
<h3>Select Module</h3>
<select onclick="selectModule(this)">
<option value="Module 1">Module 1</option>
<option value="Module 2">Module 2</option>
<option value="Module 3">Module 3</option>
</select><br><br>
<div id="question${idNumber}">
<button class="w3-button w3-teal" onclick="addQuestion()">+</button>
<button class="w3-button w3-teal" onclick="sendDocument()">Send</button>
    `
}
}
function selectModule(selectedModule) {
  model.registeredUsers.module = selectedModule.value;
}

function addQuestion() {
    idNumber++;
    document.getElementById('content').innerHTML += `
    <div class="w3-main">
<div class="col-md-3"></div>
<div class="col-md-6 well">
<input id="question${idNumber}" type="text"></input>`;
} 
function sendDocument() {
let questionObj = [];
for(i = 1; i < idNumber; i++){
  let singleQ =  document.getElementById("question"+i).value;
  questionObj.push(singleQ);
} model.question.questions = []

model.question.questions.push(...questionObj);
console.log(questionObj,"send dok");

}


