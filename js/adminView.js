let tasksTable = document.getElementById("content");

function UserShow() {
    let html = `<table>
                        <tr> <th>Navn</th>
                              <th>comment</th>
                              <th>dato</th>
                         </tr>`;
    for (let i = 0; i < model.admin.tasks.length; i++) {
        html += createHtmlRow(i);
    }
    tasksTable.innerHTML = html;
}

function createHtmlRow(i) {
    const task = model.admin.tasks[i];
    const checkedHtml = task.isDone ? 'checked="checked"' : "";
    if (!task.editMode) {
        const date = !task.dato ? '' : new Date(task.dato).toLocaleDateString();
        return `<tr>
                    <td>${task.name}</td>                              
                    <td>${task.comment}</td>
                    <td>${date}</td>
                    <td>
                        <button onclick="deleteTask(${i})">Slett</button>
                        <button onclick="editTask(${i})">Rediger</button>
                    </td>
                                </tr>
                                `;
    }
    return `<tr>
                                  <td><input id="editDescription${i}" type="text" value="${task.description}"/></td>
                                  <td><input id="taskname{i}" type="text" value="${task.name}"/></td>
                                   <td><input id="taskcomment{i}" type="text" value="${task.comment}"/></td> 
                                   <td><input id="{i}" type="text" value="${task.dato}"/></td>
                                   <td>
                                       <button onclick="updateTask(${i})">Lagre</button>
                                   </td>
                                </tr>
                                `;
}

function changeIsDone(checkbox, index) {
    tasks[index].isDone = checkbox.checked;
    tasks[index].dato = new Date().toISOString().substr(0, 10);
    userShow();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    userShow();
}

function editTask(index) {
    tasks[index].editMode = true;
    Usershow();
}

function updateTask(index) {
    const id = `editDescription${index}`;
    const inputTag = document.getElementById(id);
    const task = tasks[index];

    task.description = inputTag.value;
    task.name = inputTag.value;
    task.comment = inputTag.value;
    task.editMode = false;

    UserShow();

    function add(inputTag) {
        let tasks = {
            name: inputTag.value(),
            description: inputTag.value(),
            date: new Date(),
            frist: new Date()
        };
        taskCollection.add(tasks);
    }
}