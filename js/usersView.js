function showUserTable() {
    document.getElementById('content').innerHTML = `
    <div class="w3-main"> 
    <table class="w3-table">
    <tr>
<th>Members</th>
<th>Company</th>
<th>Module</th>
<th>Edit</th>
</tr>     
`;

    for(registeredUser of model.registeredUsers) {
        document.getElementById('content').innerHTML += ` 
        <div class="w3-main"> 
        <tr> 
        <td>${registeredUser.firstname} ${registeredUser.lastname}</td>
        <td>${registeredUser.company}</td>
        <td>${registeredUser.module}</td>
        <select id="selectModule" oninput="edit(this)">
        <option value="module1"></option>
        <option value="Module 1">Module 1</option>
        <option value="Module 2">Module 2</option>
        <option value="Module 3">Module 3</option>
        </select></td>
        <td><button>asdsa</button>
        </tr>
        </div>
        `;
    }
    
    
    document.getElementById('content').innerHTML += `
      </tbody>
      </table>
      </div>
      `
}