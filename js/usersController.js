function showProfile(x) {
  model.session.currentUserID = x;
  for (user of model.registeredUsers){
    if(user.id == x){
      user.showCustomer = true;
    }
  }
showCustomer();
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
function deleteButton2(indexOfUser) {
  model.registeredUsers.splice(indexOfUser, 1);
   showModule2();
  }
  function deleteButton3(indexOfUser) {
    model.registeredUsers.splice(indexOfUser, 1);
     showModule3();
   }

function getById(list, id){
  return list.filter(x=>x.id==id)[0];
}