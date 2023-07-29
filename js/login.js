var emailInput = document.getElementById("loginEmail");
var passwordInput = document.getElementById("loginPassword");
var users = [];
if (localStorage.getItem("user") != null) {
  users = JSON.parse(localStorage.getItem("user"));
}
function isLogged() {
  for (var i = 0; i < users.length; i++) {
    if (
      emailInput.value.toLowerCase() == users[i].userName.toLowerCase() &&
      passwordInput.value == users[i].password
    ) {
        setLoggedUserData(users[i])
      return true;
    }
  }
  return false;
}
function setLoggedUserData(user){
    localStorage.setItem("loggedUser",JSON.stringify(user))
}

function handelSubmit() {
  if (emailInput.value == "" || passwordInput.value == "") {
    document.getElementById("erorMessage").innerHTML =
      "All inputs are required";
  } else if (isLogged()) {
    window.location = "./home.html";
  } else {
    document.getElementById("erorMessage").innerHTML =
      "You intered incorrect Email or password";
  }
  clr();
}
function clr() {
  emailInput.value = "";
  passwordInput.value = "";
}
