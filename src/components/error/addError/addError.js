function addError(){
    const email = document.querySelector('.emailInput')
    const error = document.querySelector('.error-mensage')
    const validEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.value.length === 0 || !email.value.match(validEmail)) {
        email.classList.add('error')
        error.innerHTML = 'Please provide a valid email address'
        return
    }
}

export default addError