document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signUpBtn = document.getElementById('signUpBtn');
    const signInBtn = document.getElementById('signInBtn');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    signUpBtn.addEventListener('click', (event) => { 
        // Assuming you have validation before this
        const email = document.querySelector('.sign-up input[type="email"]').value;
        const password = document.querySelector('.sign-up input[type="password"]').value;
        if (email === 'admin' && password === 'admin') {
            window.location.href = "AdminDashboard.html";
        } else {
            window.location.href = "UserDashboard.html";
        }
    });

    signInBtn.addEventListener('click', (event) => {
        // Assuming you have validation before this
        const email = document.querySelector('.sign-in input[type="email"]').value;
        const password = document.querySelector('.sign-in input[type="password"]').value;
        if (email === 'admin' && password === 'admin') {
            window.location.href = "AdminDashboard.html";
        } else {
            window.location.href = "UserDashboard.html";
        }
    });
});
