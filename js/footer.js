export function createFooter(creator) {
  return {
    creator,
    render(containerId) {
      // Footer
      const FOOTER = document.createElement("footer");
      FOOTER.className = "footer mt-auto py-3 bg-light";

      // Container
      const CONTAINER = document.createElement("div");
      CONTAINER.className = "container text-center";

      // Span
      const brandName = document.createElement("span");
      brandName.className = "navbar-brand";
      brandName.textContent = this.creator;

      // place
      CONTAINER.appendChild(brandName);
      FOOTER.appendChild(CONTAINER);

      // Append the footer to the DOM
      const renderContainer = document.getElementById(containerId);
      if (renderContainer) {
        renderContainer.appendChild(FOOTER);
      } else {
        console.error(`Container with id "${containerId}" not found!`);
      }
    },
  };
}
