const loginForm = document.querySelector('form');
const showError = document.querySelector('#show-error');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');


loginForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (
        checkIsNotEmpty(emailInput, "Email cannot be empty")
        &&
        checkIsNotEmpty(passwordInput, "Password cannot be empty")
        ){
        window.location.href = '/dashboard.html';
        }
});

function checkIsNotEmpty(domInput, errorMessage) {
    showError.innerHTML = ""
    if (domInput.value === "") {
        console.log(errorMessage);

    const div = document.createElement('div');
    div.innerHTML = `<p class="bg-red-400 text white"> ${errorMessage}</p>`;

    showError.appendChild(div);

    return false;
    }
    return true;
}





