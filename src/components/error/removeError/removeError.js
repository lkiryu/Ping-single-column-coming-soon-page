function removeError(){
    const email = document.querySelector('.emailInput')
    const error = document.querySelector('.error-mensage')
    const validEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.value.match(validEmail)) {
        email.classList.remove('error')
        error.innerHTML = ''
    }
}

export default removeError