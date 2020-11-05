const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordAuth = document.getElementById("passwordAuth");
const securityQuestion = document.getElementById("securityQuestion");
const answer = document.getElementById("answer");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const checkbutton = document.getElementById("conditionscheck");

form.addEventListener("submit",(e)=> {
  let messages = []
  if(username.value.length < 5 || username.value.length > 15){
    messages.push("Username must be between 5 and 15 characters long");
    username.classList.add("is-invalid");
    let usererror = document.getElementById("usererror");
    usererror.innerText = "Username must be between 5 and 15 characters long";
    e.preventDefault();
  }
  if(email.value.length > 40){
    messages.push("Email is to long");
    email.classList.add("is-invalid");
    let emailerror = document.getElementById("emailerror");
    emailerror.innerText = "Email is to long";
    e.preventDefault();
  }
  if (password.value.length <= 6){
    messages.push("Password must be longer than 6 characters");
    password.classList.add("is-invalid");
    let passworderror = document.getElementById("passworderror");
    passworderror.innerText = "Password must be longer than 6 characters";
    e.preventDefault();
  }
  if (password.value.length > 20){
    messages.push("Password must be shorter than 20 characters");
    password.classList.add("is-invalid");
    let passworderror = document.getElementById("passworderror");
    passworderror.innerText = "Password must be shorter than 20 characters";
    e.preventDefault();
  }
  if (password.value != passwordAuth.value){
    messages.push("The passwords don´t match");
    password.classList.add("is-invalid");
    passwordAuth.classList.add("is-invalid");
    let passwordautherror = document.getElementById("passwordautherror");
    passwordautherror.innerText = "The passwords don´t match";
    e.preventDefault();
  }
  if (securityQuestion.value === "Choose..."){
    messages.push("Please select a security question");
    securityQuestion.classList.add("is-invalid");
    let securityquestionerror = document.getElementById("securityquestionerror");
    securityquestionerror.innerText = "Please select a security question";
    e.preventDefault();
  }
  if (checkbutton.checked === false){
    messages.push("Please accept the terms and conditions of the page");
    checkbutton.classList.add("is-invalid");
    e.preventDefault();
  }
  if(messages.length > 0){
    e.preventDefault();
    errorElement.innerText = messages.join(". ")
  }
})