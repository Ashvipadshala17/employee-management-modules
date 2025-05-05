document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simple hardcoded credentials (demo purpose)
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'index.html';
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});
