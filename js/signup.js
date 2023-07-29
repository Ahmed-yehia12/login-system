var nameInput = document.getElementById("signupName");
var emailInput = document.getElementById("signupEmail");
var passwordInput = document.getElementById("signupPassword");
var users = [];
if (localStorage.getItem("user") != null) {
  users = JSON.parse(localStorage.getItem("user"));
}
function addUser() {
  var userInput = {
    name: nameInput.value,
    userName: emailInput.value,
    password: passwordInput.value,
  };

  users.push(userInput);
  setLoggedUserData(userInput)
  setLocal();
  clr();
}
function clr() {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}
function setLocal() {
  localStorage.setItem("user", JSON.stringify(users));
}
function setLoggedUserData(user){
    localStorage.setItem("loggedUser",JSON.stringify(user))

}
function isSigned() {
  for (var i = 0; i < users.length; i++) {
    if (emailInput.value.toLowerCase() == users[i].userName.toLowerCase()) {
      return true;
    }
  }
  return false;
}
function handelSubmit() {
  if (
    emailInput.value == "" ||
    nameInput.value == "" ||
    passwordInput.value == ""
  ) {
    document.getElementById("erorMessage").innerHTML =
      "All inputs are required";
  } else if (isSigned()) {
    document.getElementById("erorMessage").innerHTML = "Already signed";
  } else {
    addUser();
    window.location = './index.html'

  }
}
