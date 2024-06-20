document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const serviceSelect = document.getElementById('service');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const nextButton = document.getElementById('next-button');

    const userDetailsForm = document.getElementById('user-details-form');
    const nameInput = document.getElementById('name');
    const sexSelect = document.getElementById('sex');
    const contactInput = document.getElementById('contact');
    const animalTypeInput = document.getElementById('animal-type');
    const doneButton = document.getElementById('done-button');

    const finalDataDiv = document.getElementById('final-data');
    const confirmButton = document.getElementById('confirm-button');

    const scheduleAppointmentHeading = document.querySelector('.container h1');

    function validateTaskForm() {
        const serviceValid = serviceSelect.value !== '';
        const dateValid = dateInput.value !== '';
        const timeValid = timeInput.value !== '';
        const formValid = serviceValid && dateValid && timeValid;
        
        nextButton.disabled = !formValid;
    }

    function validateUserDetailsForm() {
        const nameValid = nameInput.value.trim() !== '';
        const sexValid = sexSelect.value !== '';
        const contactValid = /^\d{11}$/.test(contactInput.value);
        const animalTypeValid = animalTypeInput.value.trim() !== '';
        const formValid = nameValid && sexValid && contactValid && animalTypeValid;

        doneButton.disabled = !formValid;
    }

    taskForm.addEventListener('input', validateTaskForm);
    userDetailsForm.addEventListener('input', validateUserDetailsForm);

    nextButton.addEventListener('click', function() {
        taskForm.style.display = 'none';
        nextButton.style.display = 'none';
        userDetailsForm.style.display = 'block';
        scheduleAppointmentHeading.style.display = 'none';
    });

    userDetailsForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = nameInput.value;
        const sex = sexSelect.value;
        const contact = contactInput.value;
        const animalType = animalTypeInput.value;
        const service = serviceSelect.value;
        const date = dateInput.value;
        const time = timeInput.value;

        const userDetails = {
            name,
            sex,
            contact,
            animalType,
            service,
            date,
            time
        };

        // Save the user details to local storage
        localStorage.setItem('userDetails', JSON.stringify(userDetails));

        // Display the final data
        userDetailsForm.style.display = 'none';
        finalDataDiv.style.display = 'block';
        scheduleAppointmentHeading.style.display = 'none';

        document.getElementById('display-name').innerText = `Name: ${name}`;
        document.getElementById('display-sex').innerText = `Sex: ${sex}`;
        document.getElementById('display-contact').innerText = `Contact Number: ${contact}`;
        document.getElementById('display-animal-type').innerText = `Animal Type: ${animalType}`;
        document.getElementById('display-service').innerText = `Service: ${service}`;
        document.getElementById('display-date').innerText = `Date: ${date}`;
        document.getElementById('display-time').innerText = `Time: ${time}`;
    });

    confirmButton.addEventListener('click', function() {
        window.location.href = 'UserDashboard.html';
    });

    // Load the user details from local storage if available
    window.addEventListener('load', function() {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (userDetails) {
            serviceSelect.value = userDetails.service;
            dateInput.value = userDetails.date;
            timeInput.value = userDetails.time;
            validateTaskForm();
        }
    });
});
