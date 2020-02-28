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
            ${model.registeredUsers.map((user,index)=> (user.module == "Module 1" ) ?`
            <tr>
              <td><a href="javascript:showProfile(${user.id})" id="member">${user.firstname} ${user.lastname}</td>
              <td>${user.company}</td>
              <td>
                ${user.module}
                <select class="theme-pink selected" size="1" oninput="edit(${user.id}, this.value)">
                  <option value="module1"></option>
                  ${model.modules.map(m=>`
                  <option value="${m}" ${user.module==m?'selected':''} >${m}</option>
                  `).join('')}
                </select>
              </td>
              <td>
                <input type="button" value="Delete" class="delete" onclick="deleteButon(${index})">
              </td>
            </tr>
            `: '').join('')}
    </tbody>
    </table>
    </div>

`;
}
function showModule2() {
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
          ${model.registeredUsers.map((user,index)=> (user.module == "Module 2" ) ? `
          
          <tr>
            <td><a href="javascript:showProfile(${user.id})" id="member">${user.firstname} ${user.lastname}</td>
            <td>${user.company}</td>
            <td>
              ${user.module}
              <select class="theme-pink selected" size="1" oninput="edit(${user.id}, this.value)">
                <option value="module1"></option>
                ${model.modules.map(m=>`
                <option value="${m}" ${user.module==m?'selected':''} >${m}</option>
                `).join('')}
              </select>
            </td>
            <td>
              <input type="button" value="Delete" class="delete" onclick="deleteButon(${index})">
            </td>
          </tr>
          `: '').join('')
        }
  </tbody>
  </table>
  </div>

`;
}
function showModule3() {
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
          ${model.registeredUsers.map((user,index)=> (user.module == "Module 3" ) ?`
          <tr>
            <td><a href="javascript:showProfile(${user.id})" id="member">${user.firstname} ${user.lastname}</td>
            <td>${user.company}</td>
            <td>
              ${user.module}
              <select class="theme-pink selected" size="1" oninput="edit(${user.id}, this.value)">
                <option value="module1"></option>
                ${model.modules.map(m=>`
                <option value="${m}" ${user.module==m?'selected':''} >${m}</option>
                `).join('')}
              </select>
            </td>
            <td>
              <input type="button" value="Delete" class="delete" onclick="deleteButon(${index})">
            </td>
          </tr>
          `: '').join('')}
  </tbody>
  </table>
  </div>

`;
}
