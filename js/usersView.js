function showUserTable() {
    document.getElementById('content').innerHTML = `
    <div class="w3-main"> 
    <div class="w3-content w3-margin-top" style="max-width:1400px;">
 <div class="w3-twothird">
<div class="w3-responsive w3-card-4">
<table class="w3-table w3-striped w3-bordered">
<table id="memberList">
<thead>
<tr class="w3-theme">
    <th>Members</th>
    <th>Company</th>
    <th>Module</th>
    <th>Edit</th>
    </tr>
    </thead>
    <tbody>
    
  <tr>
    <td><a href="javascript:showProfile()" id="member">${model.registeredUsers[0].firstname} ${model.registeredUsers[0].lastname}</td>
    <td>${model.registeredUsers[0].company}</td>
    <td>${model.registeredUsers[0].module}
    <select class="theme-pink selected" size="1" id="selectModule" oninput="edit(this)">
    <option value="module1"></option>
    <option value="Module 1">Module 1</option>
    <option value="Module 2">Module 2</option>
    <option value="Module 3">Module 3</option>
    </select></td>
    <td>
<input type="button" id="${model.registeredUsers[0].id}" value="Delete" class="delete" onclick="deleteButon(this)">
</td>
  </tr>
  <td>${model.registeredUsers[1].firstname} ${model.registeredUsers[1].lastname}</td>
  <td>${model.registeredUsers[1].company}</td>
  <td>${model.module.module1}</td>
  <td>
</tr>
  <tr>
  <td>${model.registeredUsers[0].firstname} ${model.registeredUsers[0].lastname}</td>
  <td>${model.registeredUsers[0].company}</td>
  <td>${model.module.module1}</td>
    </tr>
    </tbody>
    </table>
    </div>

`;
}