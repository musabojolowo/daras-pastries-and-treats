const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navigation");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  toggle.textContent = isOpen ? "×" : "☰";
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    if (toggle) {
      toggle.textContent = "☰";
      toggle.setAttribute("aria-label", "Open navigation");
    }
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.dataset.filter;
    document.querySelectorAll(".product-card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

document.querySelectorAll(".ask-link").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product || "a product";
    const message = `Hello Dara’s Pastries and Treats, please I'd like to enquire about ${product}. Kindly share the available options and prices.`;
    window.open(`https://wa.me/2347047232978?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
