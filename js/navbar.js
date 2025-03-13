export function createNavbar(brandName, navLinks) {
  return {
    brandName,
    navLinks,
    render(containerId) {
      // Navbar
      const navbar = document.createElement("nav");
      navbar.className = "navbar bg-light";

      // Container
      const containerNav = document.createElement("div");
      containerNav.className = "container";

      // Brand Name
      const brandSpan = document.createElement("span");
      brandSpan.className = "navbar-brand order-1";
      brandSpan.textContent = this.brandName;

      // place the Brand Name and add the container to the navbar
      containerNav.appendChild(brandSpan);
      navbar.appendChild(containerNav);

      // Render to the provided container
      const renderContainer = document.getElementById(containerId);
      if (renderContainer) {
        renderContainer.appendChild(navbar);
      } else {
        console.error(`Container with id (${containerId}) not found!`);
      }
    },
  };
}
