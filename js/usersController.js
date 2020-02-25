function showProfile() {
showCustomer();
  }

function edit(userId, selectedModule){
  const user = getById(model.registeredUsers, userId);
  user.module = selectedModule;
    // console.log(selectedModule.value);|
    // model.registeredUsers[0].module = selectedModule.value;
    showUserTable();
}

function deleteButon(indexOfUser) {
// console.log(selectedUserId.id)
model.registeredUsers.splice(indexOfUser, 1);
showUserTable();
}

function getById(list, id){
  return list.filter(x=>x.id==id)[0];
}