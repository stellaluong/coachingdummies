function showProfile(x) {
  console.log(x) 
  for( user of model.registeredUsers){
    if(user.id == x){
      user.showCustomer = true;

    }
  }
showCustomer(x);
}

function edit(userId, selectedModule){
  const user = getById(model.registeredUsers, userId);
  user.module = selectedModule;
    showUserTable();
}

function deleteButon(indexOfUser) {
model.registeredUsers.splice(indexOfUser, 1);
showUserTable();
}

function getById(list, id){
  return list.filter(x=>x.id==id)[0];
}