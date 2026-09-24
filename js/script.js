document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     NAVBAR
  ========================= */

  const navbar = document.getElementById("navbar");
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  const updateNavbar = () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 35);
    }
  };

  updateNavbar();

  window.addEventListener("scroll", updateNavbar, { passive: true });


  /* =========================
     MOBILE MENU
  ========================= */

  if (menuBtn && navLinks) {

    menuBtn.setAttribute("aria-expanded", "false");

    menuBtn.addEventListener("click", () => {

      navLinks.classList.toggle("open");

      const isOpen = navLinks.classList.contains("open");

      menuBtn.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuBtn.textContent = isOpen ? "×" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );

        menuBtn.textContent = "☰";
      });

    });
  }


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealItems =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, obs) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            obs.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealItems.forEach((item, index) => {

      item.style.transitionDelay =
        `${Math.min(index * 60, 300)}ms`;

      observer.observe(item);
    });

  } else {

    revealItems.forEach(item => {
      item.classList.add("visible");
    });

  }


  /* =========================
     SMOOTH ANCHOR LINKS
  ========================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

      anchor.addEventListener("click", event => {

        const targetId =
          anchor.getAttribute("href");

        if (!targetId || targetId === "#") {
          return;
        }

        const target =
          document.querySelector(targetId);

        if (target) {

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      });

    });


  /* =========================
     FEATURED PROFILES
  ========================= */

  const cards =
    document.querySelectorAll(".profile-card");

  const overlay =
    document.getElementById("profileOverlay");

  const closeButton =
    document.getElementById("profileClose");

  const detailImage =
    document.getElementById("detailImage");

  const detailName =
    document.getElementById("detailName");

  const detailLocation =
    document.getElementById("detailLocation");

  const detailAbout =
    document.getElementById("detailAbout");

  const detailServices =
    document.getElementById("detailServices");

  const detailPhone =
    document.getElementById("detailPhone");

  const detailContact =
    document.getElementById("detailContact");


  /* Check that profile system exists */

  if (
    !cards.length ||
    !overlay ||
    !closeButton
  ) {
    return;
  }


  /* =========================
     OPEN PROFILE
  ========================= */

  function openProfile(index) {

    const profile = profiles[index];

    if (!profile) {
      console.error("Profile not found:", index);
      return;
    }

    detailImage.src = profile.image;
    detailImage.alt = profile.name;

    detailName.textContent =
      profile.name;

    detailLocation.textContent =
      profile.location;

    detailAbout.textContent =
      profile.about;

    detailPhone.textContent =
      profile.phone;


    /* Services */

    detailServices.innerHTML = "";

    profile.services.forEach(service => {

      const span =
        document.createElement("span");

      span.textContent = service;

      detailServices.appendChild(span);

    });


    /* Enquiry */

    const message =
      `Hello, I would like to make an enquiry regarding ${profile.name}.`;

    detailContact.href =
      "https://wa.me/919000000000?text=" +
      encodeURIComponent(message);


    /* Show popup */

    overlay.classList.add("active");

    document.body.style.overflow = "hidden";
  }


  /* =========================
     CLOSE PROFILE
  ========================= */

  function closeProfile() {

    overlay.classList.remove("active");

    document.body.style.overflow = "";
  }


  /* =========================
     CARD CLICK
  ========================= */

  cards.forEach(card => {

    card.addEventListener("click", () => {

      const index =
        Number(card.dataset.profile);

      openProfile(index);

    });

  });


  /* Close button */

  closeButton.addEventListener(
    "click",
    closeProfile
  );


  /* Click outside popup */

  overlay.addEventListener("click", event => {

    if (event.target === overlay) {
      closeProfile();
    }

  });


  /* Escape key */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeProfile();
    }

  });

});
