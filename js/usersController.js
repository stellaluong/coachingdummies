function showProfile() {
showCustomer();
  }

function edit(selectedModule){
    console.log(selectedModule.value);
    model.registeredUsers[0].module = selectedModule.value;
    showUserTable();
}

function deleteButon(selectedUserId) {
console.log(selectedUserId.id)
model.registeredUsers.splice(selectedUserId.id)
showUserTable();
}