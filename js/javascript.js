// Navbar
import { createNavbar } from "./navbar.js";
// Footer
import { createFooter } from "./footer.js";

// Create a navbar instance
const myNavBar = createNavbar("Tic Tac Toe");
// Render the navbar inside an existing element with ID 'headerSection'
myNavBar.render("headerSection");

// Create Footer Instance
const creationFooter = createFooter("2025 Gilmore");
creationFooter.render("footerSection");
