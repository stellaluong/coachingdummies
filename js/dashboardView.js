
function showDashboard() {
    document.getElementById('content').innerHTML = `
    <div class="w3-main">
    <header class="w3-container" style="padding-top:22px">
    <h5><b><i class="fa fa-dashboard"></i> My Dashboard</b></h5>
  </header>
  <div class="w3-row-padding w3-margin-bottom">
    <div class="w3-quarter">
      <div class="w3-container w3-red w3-padding-16">
      <a href="javascript:void(0)" onclick="showAllUsers()">
        <div class="w3-left"><i class="far fa-address-book w3-xxxlarge"></i></div>
        <div class="w3-clear"></div>
        <h4>Members</h4>
      </div>
    </div>
    
        <div class="w3-quarter">
          <div class="w3-container w3-blue w3-padding-16">
          <a href="javascript:void(0)" onclick="showUsers()">
            <div class="w3-left"><i class="fas fa-city w3-xxxlarge"></i></div>
            <div class="w3-clear"></div>
            <h4>Modules</h4>
          </div>
        </div>

    <div class="w3-quarter">
      <div class="w3-container w3-green w3-padding-16">
      <a href="javascript:void(0)" onclick="showNewDocument()">
        <div class="w3-left"><i class="fas fa-pen-square w3-xxxlarge"></i></div>
        <div class="w3-clear"></div>
        <h4>New Document</h4>
      </div>
    </div>
    
    `

}
function showUsers() {
  document.getElementById('content').innerHTML = `
  <div class="w3-main">
  <div class="col-md-2"></div>
  <div class="w3-row-padding w3-center w3-margin-top">

  <div class="w3-third">
    <div class="w3-card w3-container" style="min-height:300px">
    <h3>Module 1</h3><br>

    <a href="javascript:showUserTable(event, 'moduleNum');" id="modul1"><i class="fas fa-home w3-margin-bottom w3-text-theme" style="font-size:120px"></i></a>
    </div>
    </div>
    
  <div class="w3-third">
    <div class="w3-card w3-container" style="min-height:300px">
    <h3>Module 2</h3><br>
    <a href="javascript:showModule2(event, 'moduleNum');" id="modul2"><i class="fas fa-building w3-margin-bottom w3-text-theme" style="font-size:120px"></i></a>
    </div>
  </div>
  
  <div class="w3-third">
    <div class="w3-card w3-container" style="min-height:300px">
    <h3>Module 3</h3><br>
    <a href="javascript:showModule3(event, 'moduleNum');" id="modul3">   <i class="fab fa-fort-awesome w3-margin-bottom w3-text-theme" style="font-size:120px"></i></a>
    </div>
  </div>
  </div>
</div>

  `
  
}