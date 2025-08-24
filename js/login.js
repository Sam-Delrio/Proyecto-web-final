const CORREO = "retro@admin.com";
const PASSWORD = "1234";

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let mensaje = document.getElementById("mensaje");

  if (email === CORREO && password === PASSWORD) {
    mensaje.textContent = "Acceso concedido...";
    mensaje.classList.remove("text-warning");
    mensaje.classList.add("text-success");

    setTimeout(() => {
      window.location.href = "../modules/dashboard.html";
    }, 1000);
  } else {
    mensaje.textContent = "Correo o contraseña incorrectos";
    mensaje.classList.remove("text-success");
    mensaje.classList.add("text-warning");
  }
});
