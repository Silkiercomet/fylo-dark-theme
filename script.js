let error = document.querySelector(".error");
let btn = document.querySelector('#email-button')
let mail = document.querySelector('#email')

const emailIsValid = (email) => {
    email = mail.value;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

const fullValidator = () => {
    if(emailIsValid(mail)==false){;
        error.style.display = 'flex';
    }else if(emailIsValid(mail)==true){
        error.style.display = 'none';
    }
}
btn.addEventListener('click', fullValidator)