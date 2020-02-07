function showMenu() {
    document.getElementById('header').innerHTML = `
    Meny:
    <a href="javascript:showLogin()">Login</a>
    <a href="javascript:UserShow()">Admin</a>
    <a href="javascript:questionShow()">Spørsmål</a>    
    `;
}