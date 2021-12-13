function newNameChecker() {
  const newName = document.getElementById("nameBox").value;
  document.querySelector(".greeting").innerHTML = "Hello, " + newName;

  const inputBox = document.getElementById("nameBox");
  const newAttr = document.createAttribute("class");
  inputBox.setAttributeNode(newAttr);

  if (newAttr.value === "") {
    newAttr.value = "make-hide";
  } else if (newAttr.value === "make-hide") {
    newAttr.value = "";
    document.querySelector("button").innerText = "check out!";
  }
}
