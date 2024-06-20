document.addEventListener('DOMContentLoaded', function() {
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const editProfileForm = document.getElementById('edit-profile-form');
    const profileInfo = document.getElementById('profile-info');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const saveChangesBtn = document.querySelector('#edit-profile-form button[type="submit"]');
    const cancelBtn = document.getElementById('cancel-btn');
    const logoutBtn = document.getElementById('logout-btn');

    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const profilePassword = document.getElementById('profile-password');

    function toggleEditProfileForm() {
        profileInfo.style.display = 'none';
        editProfileForm.style.display = 'block';
    }

    function toggleProfileInfo() {
        profileInfo.style.display = 'block';
        editProfileForm.style.display = 'none';
    }

    editProfileBtn.addEventListener('click', function() {
        toggleEditProfileForm();

        nameInput.value = profileName.textContent;
        emailInput.value = profileEmail.textContent;
        passwordInput.value = profilePassword.textContent === '*********' ? '' : profilePassword.textContent;
    });

    editProfileForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const newName = nameInput.value.trim();
        const newEmail = emailInput.value.trim();
        const newPassword = passwordInput.value.trim();

        profileName.textContent = newName;
        profileEmail.textContent = newEmail;
        profilePassword.textContent = newPassword ? '*********' : profilePassword.textContent;

        toggleProfileInfo();
    });

    cancelBtn.addEventListener('click', function() {
        toggleProfileInfo();
    });

    logoutBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
