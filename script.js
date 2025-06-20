function login() {
  const name = document.getElementById("name").value;
  const passcode = document.getElementById("passcode").value;

  let users = JSON.parse(localStorage.getItem("loggedUsers") || "[]");
  if (!users.includes(name)) {
    users.push(name);
    localStorage.setItem("loggedUsers", JSON.stringify(users));
  }

  if (passcode === "admin123") {
    window.location.href = "admin.html";
  } else if (["class2025", "homeworknow"].includes(passcode)) {
    window.location.href = "student.html";
  } else if (passcode === "mod999") {
    window.location.href = "moderator.html";
  } else {
    alert("Incorrect passcode!");
  }
}