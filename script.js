const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm_password');
const form = document.querySelector('form');
const passwordHint = document.createElement('span');
passwordHint.textContent="*Passwords do not match";
const submitInput = document.querySelector('#submitButton');


submitInput.addEventListener('click', () => {
    if(password!==passwordConfirm){
        console.log("test");
    } 
});

