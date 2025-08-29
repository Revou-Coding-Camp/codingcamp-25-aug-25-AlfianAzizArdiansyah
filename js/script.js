// Menampilkan nama user di Home
let username = prompt("Masukkan nama Anda:");
if (username) {
  document.getElementById("username").innerText = username;
}

// Validasi Form Message Us
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let msg = document.getElementById("messageText").value;

  // Validasi sederhana
  if (name === "" || email === "" || phone === "" || msg === "") {
    alert("Semua field harus diisi!");
    return;
  }

  // Tampilkan output
  document.getElementById("outName").innerText = name;
  document.getElementById("outEmail").innerText = email;
  document.getElementById("outPhone").innerText = phone;
  document.getElementById("outMsg").innerText = msg;

  // Reset form
  document.getElementById("messageForm").reset();
});
