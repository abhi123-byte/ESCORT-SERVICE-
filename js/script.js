document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.getElementById("navbar");
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  /* NAVBAR */

  const updateNavbar = () => {
    if (navbar) {
      navbar.classList.toggle(
        "scrolled",
        window.scrollY > 35
      );
    }
  };

  updateNavbar();

  window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
  );


  /* MOBILE MENU */

  if (menuBtn && navLinks) {

    menuBtn.setAttribute(
      "aria-expanded",
      "false"
    );

    menuBtn.addEventListener("click", () => {

      navLinks.classList.toggle("open");

      const isOpen =
        navLinks.classList.contains("open");

      menuBtn.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuBtn.textContent =
        isOpen ? "×" : "☰";
    });


    navLinks
      .querySelectorAll("a")
      .forEach(link => {

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


  /* SCROLL REVEAL */

  const revealItems =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries, obs) => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              obs.unobserve(
                entry.target
              );
            }

          });

        },
        {
          threshold:0.12
        }
      );

    revealItems.forEach(
      (item, index) => {

        item.style.transitionDelay =
          `${Math.min(index * 60, 300)}ms`;

        observer.observe(item);
      }
    );

  } else {

    revealItems.forEach(
      item =>
        item.classList.add("visible")
    );

  }


  /* SMOOTH ANCHOR LINKS */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

      anchor.addEventListener(
        "click",
        event => {

          const targetId =
            anchor.getAttribute("href");

          const target =
            document.querySelector(targetId);

          if (target) {

            event.preventDefault();

            target.scrollIntoView({
              behavior:"smooth",
              block:"start"
            });

          }

        }
      );

    });

});
