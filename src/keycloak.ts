import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "empresa-teste",
  clientId: "empresa-web-app",
});

try {
  const authenticated = await keycloak.init({
    onLoad: "login-required",
  });
  console.log(
    `User is ${authenticated ? "authenticated" : "not authenticated"}`
  );
  console.log(keycloak.token);
} catch (error) {
  console.error("Failed to initialize adapter:", error);
}
