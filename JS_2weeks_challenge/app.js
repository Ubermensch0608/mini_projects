function newNameChecker() {
  const newName = document.getElementById("nameBox").value;
  document.querySelector(".greeting").innerHTML = "Hello, " + newName;
}
