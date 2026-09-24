```javascript
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE NAVIGATION
  ========================= */

  const navbar = document.getElementById("navbar");
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
      });
    });
  }


  /* =========================
     NAVBAR SCROLL EFFECT
  ========================= */

  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });


  /* =========================
     SMOOTH SCROLL
  ========================= */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  /* =========================
     PROFILE FILTER
  ========================= */

  const filterButtons = document.querySelectorAll(".filter-btn");
  const profiles = document.querySelectorAll(".profile-card");

  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      profiles.forEach(profile => {

        const category = profile.getAttribute("data-category");

        if (filter === "all" || filter === category) {
          profile.style.display = "block";

          setTimeout(() => {
            profile.style.opacity = "1";
            profile.style.transform = "translateY(0)";
          }, 50);

        } else {
          profile.style.opacity = "0";
          profile.style.transform = "translateY(15px)";

          setTimeout(() => {
            profile.style.display = "none";
          }, 250);
        }

      });

    });

  });


  /* =========================
     PROFILE MODAL
  ========================= */

  const modal = document.getElementById("profileModal");
  const modalClose = document.getElementById("modalClose");

  const modalImage = document.getElementById("modalImage");
  const modalName = document.getElementById("modalName");
  const modalAge = document.getElementById("modalAge");
  const modalLocation = document.getElementById("modalLocation");
  const modalDescription = document.getElementById("modalDescription");

  document.querySelectorAll(".profile-view").forEach(button => {

    button.addEventListener("click", () => {

      const card = button.closest(".profile-card");

      if (!card || !modal) return;

      const image = card.querySelector("img");
      const name = card.querySelector(".profile-name");
      const age = card.querySelector(".profile-age");
      const location = card.querySelector(".profile-location");
      const description = card.querySelector(".profile-description");

      if (modalImage && image) {
        modalImage.src = image.src;
      }

      if (modalName && name) {
        modalName.textContent = name.textContent;
      }

      if (modalAge && age) {
        modalAge.textContent = age.textContent;
      }

      if (modalLocation && location) {
        modalLocation.textContent = location.textContent;
      }

      if (modalDescription && description) {
        modalDescription.textContent = description.textContent;
      }

      modal.classList.add("active");
      document.body.classList.add("modal-open");

    });

  });


  if (modalClose && modal) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.classList.remove("modal-open");
    });
  }


  if (modal) {
    modal.addEventListener("click", (e) => {

      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
      }

    });
  }


  /* =========================
     ESC KEY CLOSE MODAL
  ========================= */

  document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && modal) {
      modal.classList.remove("active");
      document.body.classList.remove("modal-open");
    }

  });


  /* =========================
     IMAGE LAZY LOADING
  ========================= */

  const images = document.querySelectorAll("img");

  images.forEach(img => {

    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }

  });


  /* =========================
     CONTACT BUTTONS
  ========================= */

  document.querySelectorAll("[data-whatsapp]").forEach(button => {

    button.addEventListener("click", () => {

      const number = button.getAttribute("data-whatsapp");

      if (!number) return;

      const message = encodeURIComponent(
        "Hello, I would like to make an enquiry."
      );

      window.open(
        `https://wa.me/${number}?text=${message}`,
        "_blank"
      );

    });

  });


  /* =========================
     BOOKING FORM
  ========================= */

  const bookingForm = document.getElementById("bookingForm");

  if (bookingForm) {

    bookingForm.addEventListener("submit", (e) => {

      e.preventDefault();

      const name = document.getElementById("bookingName")?.value || "";
      const phone = document.getElementById("bookingPhone")?.value || "";
      const date = document.getElementById("bookingDate")?.value || "";
      const message = document.getElementById("bookingMessage")?.value || "";

      const whatsappNumber = bookingForm.getAttribute(
        "data-whatsapp-number"
      );

      if (!whatsappNumber) {
        alert("Please configure the WhatsApp number.");
        return;
      }

      const text = `
New Enquiry

Name: ${name}
Phone: ${phone}
Date: ${date}

Message:
${message}
      `;

      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

      window.open(whatsappURL, "_blank");

    });

  }


  /* =========================
     CURRENT YEAR
  ========================= */

  const yearElements = document.querySelectorAll(".current-year");

  yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
  });


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealElements = document.querySelectorAll(
    ".reveal, .profile-card, .service-card, .gallery-item"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* =========================
     HERO IMAGE SLIDESHOW
  ========================= */

  const hero = document.querySelector(".hero");

  const heroImages = [
    "images/hero-1.jpg",
    "images/hero-2.jpg",
    "images/hero-3.jpg",
    "images/hero-4.jpg",
    "images/hero-5.jpg",
    "images/hero-6.jpg"
  ];

  if (hero && heroImages.length > 0) {

    let currentHero = 0;

    hero.style.backgroundImage =
      `linear-gradient(90deg, rgba(0,0,0,.84), rgba(0,0,0,.25)), url("${heroImages[0]}")`;

    setInterval(() => {

      currentHero =
        (currentHero + 1) % heroImages.length;

      hero.style.backgroundImage =
        `linear-gradient(90deg, rgba(0,0,0,.84), rgba(0,0,0,.25)), url("${heroImages[currentHero]}")`;

    }, 5000);

  }


  /* =========================
     GALLERY LIGHTBOX
  ========================= */

  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach(item => {

    item.addEventListener("click", () => {

      const image = item.querySelector("img");

      if (!image) return;

      const lightbox = document.createElement("div");

      lightbox.className = "image-lightbox";

      lightbox.innerHTML = `
        <div class="lightbox-overlay"></div>

        <button class="lightbox-close" aria-label="Close">
          &times;
        </button>

        <img src="${image.src}" alt="${image.alt || ""}">
      `;

      document.body.appendChild(lightbox);

      setTimeout(() => {
        lightbox.classList.add("active");
      }, 20);

      const closeLightbox = () => {

        lightbox.classList.remove("active");

        setTimeout(() => {
          lightbox.remove();
        }, 250);

      };

      lightbox
        .querySelector(".lightbox-close")
        .addEventListener("click", closeLightbox);

      lightbox
        .querySelector(".lightbox-overlay")
        .addEventListener("click", closeLightbox);

    });

  });


  /* =========================
     PRELOADER
  ========================= */

  const preloader = document.getElementById("preloader");

  if (preloader) {

    window.addEventListener("load", () => {

      setTimeout(() => {
        preloader.classList.add("hide");
      }, 500);

    });

  }


  /* =========================
     ACTIVE NAVIGATION LINK
  ========================= */

  const sections = document.querySelectorAll("section[id]");
  const navigationLinks = document.querySelectorAll(
    '.nav-link[href^="#"]'
  );

  window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

      const sectionTop = section.offsetTop - 160;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }

    });

    navigationLinks.forEach(link => {

      link.classList.remove("active");

      if (
        link.getAttribute("href") === `#${currentSection}`
      ) {
        link.classList.add("active");
      }

    });

  });


  /* =========================
     CONSOLE MESSAGE
  ========================= */

  console.log(
    "Premium website loaded successfully."
  );

});
```


