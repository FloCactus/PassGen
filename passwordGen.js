let passwordEl = document.getElementById('password');
let copyEl = document.getElementById('copy');
let lengthEl = document.getElementById('length');
let upperEl = document.getElementById('upper');
let lowerEl = document.getElementById('lower');
let numberEl = document.getElementById('number');
let symbolEl = document.getElementById('symbol');
let generateEl = document.getElementById('generate');

let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '!@#$%^&*()_+=`~';

function getUppercase(){
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getLowercase(){
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol(){
  return symbols[Math.floor(Math.random() * symbols.length)];
}
function generatePassword(){
  let length = lengthEl.value;
  let password = '';

  if(upperEl.checked){
    password += getUppercase();
  }
  if(lowerEl.checked){
      password += getLowercase();
  }
  if(numberEl.checked){
    password += getNumber();
  }
  if(symbolEl.checked){
    password += getSymbol();
  }

  for(let i =password.length; i<length; i++){
    let passElement = generatePassElement();
    password += passElement;
  }

  passwordEl.innerText = password;
}

function generatePassElement() {
  let elementArray = [];
  if(upperEl.checked){
    elementArray.push(getUppercase());
  }
  if(lowerEl.checked){
      elementArray.push(getLowercase());
  }
  if(numberEl.checked){
    elementArray.push(getNumber());
  }
  if(symbolEl.checked){
    elementArray.push(getSymbol());
  }
  if(elementArray.length === 0) return '';

  return elementArray[Math.floor(Math.random() * elementArray.length)];
}

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', () => {
  let textarea = document.createElement('textarea');
  let password = passwordEl.innerText;

  if(!password){return;}

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password is copied');
});
