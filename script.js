const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

const validateForm = () => {
    // Using Contraint API
    isValid = form.checkValidity();
    // Style main message for error
    if (!isValid) {
        message.textContent = 'Fill out all fields';
        message.style.color= 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check passwords match
    if (password1.value === password2.value) {
        passwordsMatch = true;
        password1.style.borderColor = 'green';
        password2.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure that passwords match';
        message.style.color= 'red';
        messageContainer.style.borderColor = 'red';
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Success';
        message.style.color= 'green';
        messageContainer.style.borderColor = 'green';
    }
}

const storeFromData = () => {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        password: form.password2.value 
    };
    console.log(user);
}

const processFormData = (e) => {
    e.preventDefault();
    // Validate form
    validateForm();
    // Submit Data if valid
    if (isValid && passwordsMatch) {
        storeFromData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);