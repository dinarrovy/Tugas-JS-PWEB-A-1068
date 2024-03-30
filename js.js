const content = document.querySelector(".content");
const title = document.querySelector(".title");
const title_text = document.querySelector(".title-text");
const box = document.querySelector(".box");
const img = document.querySelector("img");
const button_true = document.querySelector(".button-true");
const button_false = document.querySelector(".button-false");

button_true.addEventListener('click', ()=> {
  title.innerHTML = "Anda Berbohong!";
  title_text.innerHTML = "Anda adalah seorang Teknisi";
  box.style.backgroundColor = "#E12E2E";
  img.src = "Assets/teknisi.svg";
  button_true.style.display = 'none';
  button_false.style.display = 'none';
  content.classList.add("getar");
});

button_false.addEventListener('click', ()=> {
  title.innerHTML = "Anda Benar!";
  title_text.innerHTML = "Anda adalah seorang Mahasiswa";
  box.style.backgroundColor = "#6FD240";
  img.src = "Assets/mahasiswa.svg";
  button_true.style.display = 'none';
  button_false.style.display = 'none';
  content.classList.add("naikturun");
});
