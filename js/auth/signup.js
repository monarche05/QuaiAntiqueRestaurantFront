const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");
const inputValidationPassword = document.getElementById(
  "ValidatePasswordInput"
);
const formInscription = document.getElementById("FormulaireInscription");

inputNom.addEventListener("keyup", valideForm);
inputPrenom.addEventListener("keyup", valideForm);
inputEmail.addEventListener("keyup", valideForm);
inputPassword.addEventListener("keyup", valideForm);
inputValidationPassword.addEventListener("keyup", valideForm);
btnValidation.addEventListener("click", updateUserSubscrib);

// Fonction pour valider tout les formulaires
function valideForm() {
  const nomOk = validateRequired(inputNom);
  const prenomOk = validateRequired(inputPrenom);
  const mailOk = validateMail(inputEmail);
  const passwordOk = validatePassword(inputPassword);
  const passwordConfirmOk = validateConfirmationPassword(
    inputPassword,
    inputValidationPassword
  );
  // Condition pour activer ou non le btn validation
  if (nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk) {
    btnValidation.disabled = false;
  } else {
    btnValidation.disabled = true;
  }
}

// Fonction de validation des requirements
function validateRequired(input) {
  if (input.value != "") {
    // c'est ok
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    //C'est pas ok
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

// Fonction de validation des Emails
function validateMail(input) {
  //Définir mon regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if (mailUser.match(emailRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

// Fonction de validation des mot de passe
function validatePassword(input) {
  //Définir mon regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const passwordUser = input.value;
  if (passwordUser.match(passwordRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

// Fonction qui vérifie que le mot de passe est confirmé
function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
  if (inputPwd.value === inputConfirmPwd.value) {
    inputConfirmPwd.classList.add("is-valid");
    inputConfirmPwd.classList.remove("is-invalid");
    return true;
  } else {
    inputConfirmPwd.classList.add("is-invalid");
    inputConfirmPwd.classList.remove("is-valid");
    return false;
  }
}

function updateUserSubscrib() {
  let dataForm = new FormData(formInscription);

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    firstName: dataForm.get("Nom"),
    lastName: dataForm.get("Prenom"),
    email: dataForm.get("Email"),
    password: dataForm.get("Password"),
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(apiUrl + "registration", requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("erreur lors de l'inscritpion");
      }
      return response.json();
    })
    .then((result) => {
      document.location.href = "/signin";
      console.log(result);
    })
    .catch((error) => console.log("error", error));
}
