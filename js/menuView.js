function showMenu() {
    document.getElementById('header').innerHTML = `
    Meny:
    <a href="javascript:showLogin()">Login</a>
    <a href="javascript:showAdmin()">Admin</a>
    <a href="javascript:showQuestion()">Spørsmål</a>    
    `;
}