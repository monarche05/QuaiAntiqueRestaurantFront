import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html", []),
  new Route("/galerie", "Galerie", "/pages/galerie.html", [], "/js/galerie.js"),
  new Route("/carte", "La carte", "/pages/carte.html", []),
  new Route(
    "/reservation",
    "Vos réservations",
    "/pages/reservations/allResa.html",
    ["ROLE_USER"]
  ),
  new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", [
    "ROLE_USER",
  ]),
  new Route("/compte", "Mon compte", "/pages/auth/compte.html", [
    "ROLE_USER",
    "admin",
  ]),
  new Route(
    "/signin",
    "Connexion",
    "/pages/auth/signin.html",
    ["disconnected"],
    "js/auth/signin.js"
  ),
  new Route(
    "/signup",
    "Inscription",
    "/pages/auth/signup.html",
    ["disconnected"],
    "js/auth/signup.js"
  ),
  new Route(
    "/editPassword",
    "Modifier le password",
    "/pages/auth/editPassword.html",
    ["ROLE_USER", "admin"]
  ),
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
