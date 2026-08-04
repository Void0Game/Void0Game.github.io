import "@fontsource/orbitron/latin-500.css";
import "@fontsource/rajdhani/latin-400.css";
import "@fontsource/rajdhani/latin-500.css";
import "@fontsource/rajdhani/latin-600.css";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "./style.css";
import "./news.css";

function initializeNewsHeader() {
  const header = document.querySelector("[data-header]");
  const update = () => header.classList.toggle("is-scrolled", scrollY > 48);
  update();
  addEventListener("scroll", update, { passive: true });
}

function initializeNewsReveals() {
  const elements = document.querySelectorAll(".news-reveal");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );
  elements.forEach((element) => observer.observe(element));
}

function initializeNewsLightbox() {
  const dialog = document.querySelector("[data-news-lightbox-dialog]");
  const image = dialog.querySelector("[data-news-lightbox-image]");

  document.querySelectorAll("[data-news-lightbox]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const source = trigger.querySelector("img");
      image.src = source.currentSrc;
      image.alt = source.alt;
      dialog.showModal();
    });
  });

  dialog.querySelector("[data-news-lightbox-close]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

initializeNewsHeader();
initializeNewsReveals();
initializeNewsLightbox();
