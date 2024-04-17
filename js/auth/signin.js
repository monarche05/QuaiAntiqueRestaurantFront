const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btn-signin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
  // ici, il faudra appeler l'API pour vérifier les crédentials en BDD

  if (mailInput.value == "test@mail.com" && passwordInput.value == "123") {
    // il faudra récupérer le vrai token
    const token = "kjhdfkdsjhfskjdfhskdjfhsdkjhxcx";
    setToken(token);
    // placer ce token en cookie
    setCookie("role", "admin", 7);

    window.location.replace("/");
  } else {
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
}
