
function showDashboard() {
    document.getElementById('content').innerHTML = `
   
    <div class="w3-main"> 
    <header class="w3-container" style="padding-top:22px">
    <h5><b><i class="fa fa-dashboard"></i> My Dashboard</b></h5>
  </header>

  <div class="w3-row-padding w3-margin-bottom">
    <div class="w3-quarter">
      <div class="w3-container w3-red w3-padding-16">
      <a href="javascript:void(0)" onclick="showUserTable()">
        <div class="w3-left"><i class="far fa-address-book w3-xxxlarge"></i></div>
        <div class="w3-clear"></div>
        <h4>Members</h4>
      </div>
    </div>

    <div class="w3-quarter">
      <div class="w3-container w3-blue w3-padding-16">
        <div class="w3-left"><i class="fas fa-pen-square w3-xxxlarge"></i></div>
        <div class="w3-clear"></div>
        <h4>New Document</h4>
      </div>
    </div>

    <div class="w3-quarter">
      <div class="w3-container w3-blue w3-padding-16">
      <a href="javascript:void(0)" onclick="showUsers()">
        <div class="w3-left"><i class="fas fa-pen-square w3-xxxlarge"></i></div>
        <div class="w3-clear"></div>
        <h4>Modules</h4>
      </div>
    </div>
    `

}
function showUsers() {
  document.getElementById('content').innerHTML = `
  <div class="w3-main">
  <div class="col-md-2"></div>
  <div class="col-md-11 well">
  <div class="w3-row-padding w3-center w3-margin-top">
  <div class="w3-third">
    <div class="w3-card w3-container" style="min-height:460px">
    <h3>Module 1</h3><br>
    <i class="fas fa-home w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
    <a href="javascript:void(0)" onclick="showUserTable(event, 'moduleNum');" id="myLink">
    <div class=" tablink w3-padding-large w3-hover-red">Module 1</div>
    </div>
  </div>
  
  <div class="w3-third">
    <div class="w3-card w3-container" style="min-height:460px">
    <h3>Module 2</h3><br>
    <i class="fas fa-building w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
    <a href="javascript:void(0)" onclick="showUserTable(event, 'moduleNum');" id="myLink">
    <div class=" tablink w3-padding-large w3-hover-red">Module 2</div>
    </div>
  </div>
  
  <div class="w3-third">
    <div class="w3-card w3-container" style="min-height:460px">
    <h3>Module 3</h3><br>
    <i class="fab fa-fort-awesome w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
    <a href="javascript:void(0)" onclick="showUserTable(event, 'moduleNum');" id="myLink">
    <div class=" tablink w3-padding-large w3-hover-red">Module 3</div>
    </div>
  </div>
  </div>
  </div>
  `
}