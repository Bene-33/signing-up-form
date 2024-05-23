const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm_password');
const main = document.querySelector('main');
const passwordNotValid = document.createElement('div');
passwordNotValid.setAttribute("id","passwordNotValid");
passwordNotValid.textContent="* Passwords do not match";
main.appendChild(passwordNotValid); 

passwordConfirm.addEventListener('keyup', () => {
    if(password.value === passwordConfirm.value){
        passwordNotValid.textContent="";
    };
});
