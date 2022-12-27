const form = document.querySelector('.login-form');
const submitFormBtn = document.querySelector('button');

form.addEventListener("submit",onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const {
        elements: {email, password}} = event.currentTarget;
    
    if (email.value === "" || password.value ==="") {
        alert("All fields must be filled in!");
    } else {
        const authorizationData = {
            email: email.value,
            password: password.value
        }
        console.log(authorizationData);
        event.currentTarget.reset();
    };
}
