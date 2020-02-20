function showProfile() {
showCustomer();
  }

function edit(selectedModule){
    console.log(selectedModule.value);
    model.registeredUsers[0].module = selectedModule.value;
    showUserTable();
}

function deleteButon(selectedUserId) {
console.log(model.registeredUsers)
model.registeredUsers.splice(selectedUserId.id, 1);
showUserTable();
}