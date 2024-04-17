import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "Galerie", "/pages/galerie.html", "/js/galerie.js"),
  new Route("/carte", "La carte", "/pages/carte.html"),
  new Route(
    "/reservation",
    "Vos réservations",
    "/pages/reservations/allResa.html"
  ),
  new Route("/compte", "Mon compte", "/pages/auth/compte.html"),
  new Route("/signin", "Connexion", "/pages/auth/signin.html"),
  new Route("/signup", "Inscription", "/pages/auth/signup.html"),
  new Route(
    "/editPassword",
    "Modifier le password",
    "/pages/auth/editPassword.html"
  ),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
