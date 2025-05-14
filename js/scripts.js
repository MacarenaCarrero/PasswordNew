const rangeElement = document.getElementById('range');
const passwordElement = document.getElementById('password');
const lengthPassElement = document.getElementById('lengthPass');
const passwordContent =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/</>';
const buttonPasswordElement = document.getElementById('buttonPassword');

let passwordLength = 0;
const lengthPass = event => {
  console.log(event.target.value);
  passwordLength = event.target.value;
  lengthPassElement.textContent = 'Length : ' + event.target.value;
};

const generatePassword = () => {
  let newPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * passwordContent.length);
    const randomCharacter = passwordContent.charAt(randomNumber);
    newPassword = newPassword + randomCharacter;
  }
  passwordElement.textContent = newPassword;
};

rangeElement.addEventListener('input', lengthPass);
buttonPasswordElement.addEventListener('click', generatePassword);
