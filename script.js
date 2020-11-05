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
  }
  if(email.value.length > 40){
    messages.push("Email is to long");
  }
  if (password.value.length <= 6){
    messages.push("Password must be longer than 6 characters");
  }
  if (password.value.length > 20){
    messages.push("Password must be shorter than 20 characters");
  }
  if (password.value != passwordAuth.value){
    messages.push("The passwords don´t match");
  }
  if (securityQuestion.value === "Choose..."){
    messages.push("Please select a security question");
  }
  if (checkbutton.checked === false){
    messages.push("Please accept the terms and conditions of the page");
  }
  if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(". ")
  }
})