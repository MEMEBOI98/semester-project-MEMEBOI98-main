// Menu structure
const menuItems = [
  { name: "Home", link: "index.html" },
  { name: "FAQ", link: "faq.html" },
  { name: "Book a Room", link: "booking.html" },
  { name: "Contact", link: "contact.html" },
];

// Function to generate the menu
function generateMenu() {
  const nav = document.createElement("nav");
  nav.className = "navbar";

  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  logoDiv.textContent = "UH Sugar Land";

  // Create the hamburger menu button
  const menuToggle = document.createElement("button");
  menuToggle.className = "menu-toggle";
  menuToggle.innerHTML = "☰";

  const ul = document.createElement("ul");
  ul.className = "nav-links";

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.name;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(logoDiv);
  nav.appendChild(menuToggle);
  nav.appendChild(ul);

  // Inject the menu into the placeholder
  const menuPlaceholder = document.getElementById("menu-placeholder");
  if (menuPlaceholder) {
    menuPlaceholder.appendChild(nav);
  }

  // Add event listener for toggling the menu
  menuToggle.addEventListener("click", () => {
    ul.classList.toggle("active");
  });
}

// Call the function to generate the menu
generateMenu();