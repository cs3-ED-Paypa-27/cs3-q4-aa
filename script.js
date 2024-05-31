function showSignupPopup() {
    document.querySelector('.popup-container.signup').classList.add('show');
}

function showLoginPopup() {
    document.querySelector('.popup-container.login').classList.add('show');
}

function hideSignupPopup() {
    document.querySelector('.popup-container.signup').classList.remove('show');
}

function hideLoginPopup() {
    document.querySelector('.popup-container.login').classList.remove('show');
}

window.onclick = function(event) {
    if (event.target.classList.contains('popup-container')) {
        hideSignupPopup();
        hideLoginPopup();
    }
}

function validateSignupForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const preferredUsername = document.getElementById('preferredUsername').value;
    const pwd = document.getElementById('pwd').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    if (!name || !preferredUsername || !pwd || !email || !address) {
        alert('Please fill out all required fields.');
        return;
    }

    hideSignupPopup();
    alert('Signup successful!');
}

function validateLoginForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const loginPwd = document.getElementById('loginPwd').value;

    if (!username || !loginPwd) {
        alert('Please enter your username and password.');
        return;
    }

    hideLoginPopup();
    alert('Login successful!');
    window.location.href = 'about.html';
}