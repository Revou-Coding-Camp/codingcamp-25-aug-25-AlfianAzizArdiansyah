let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (slides.length > 0 && dots.length > 0) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade");
    dots[slideIndex - 1].className += " active";
  }
}

function kirim() {
  const nama = document.forms["message-form"]["nama"].value;
  const ttl = document.forms["message-form"]["ttl"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const pesan = document.forms["message-form"]["pesan"].value;

  if (nama === "" || ttl === "" || gender === "" || pesan === "") {
    alert("Semua input form tidak boleh kosong!");
    return false;
  }
  const date = new Date();
  const waktuIni = date.toLocaleString("id-ID", {
    dateStyle: "full",
    timeStyle: "short",
  });
  document.getElementById("waktu").innerText = waktuIni;
  document.getElementById("nama2").innerText = nama;
  document.getElementById("ttl2").innerText = ttl;
  document.getElementById("gender2").innerText = gender;
  document.getElementById("pesan2").innerText = pesan;

  event.preventDefault();
}

document.addEventListener("DOMContentLoaded", function () {
  const usernameSpan = document.getElementById("username");
  if (usernameSpan) {
    const newName = prompt("Selamat datang! Silakan masukkan nama Anda:");
    if (newName && newName.trim() !== "") {
      usernameSpan.textContent = newName;
    } else {
      usernameSpan.textContent = "";
    }
  }
  showSlides(slideIndex);

  // Tambahkan di dalam document.addEventListener("DOMContentLoaded", ... );

  // 4. Logika untuk Menu Hamburger Mobile
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelectorAll(".nav-link");

  // Tampilkan menu saat ikon hamburger di-klik
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");
    });
  }

  // Sembunyikan menu saat salah satu link di-klik
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("show-menu")) {
        navMenu.classList.remove("show-menu");
      }
    });
  });
});
