document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const message = document.getElementById("formMessage");
  message.textContent = "Mesajınız başarıyla gönderildi. Teşekkür ederiz!";
  message.style.color = "green";

  this.reset();

  setTimeout(() => {
    message.textContent = "";
  }, 3000);
});
