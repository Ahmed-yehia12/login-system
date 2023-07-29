if (localStorage != null) {
  var user = JSON.parse(localStorage.getItem("loggedUser"));
  if (user == null) {
    window.location = "../signup.html";
  } else {
    document.getElementById("welcomeText").innerHTML = `Welcome ${user.name}`;
  }
}
document.getElementById('btn').addEventListener("click",function () { 
    localStorage.setItem("loggedUser", null)
    window.location ="./index.html"
 })