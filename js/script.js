```javascript
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


  /* FEATURED MODELS */

  const featuredProfiles =
    document.getElementById("featuredProfiles");

  const models = [

    {
      name: "Sofia",
      location: "Andheri West, Mumbai",
      image: "images/model1.jpg",
      services: "Dinner • Events • Social Companionship",
      phone: "+91 98765 43210",
      profile: "model1.html"
    },

    {
      name: "Alina",
      location: "Andheri East, Mumbai",
      image: "images/model2.jpg",
      services: "Dinner • Events • Social Companionship",
      phone: "+91 98765 43211",
      profile: "model2.html"
    },

    {
      name: "Mia",
      location: "Andheri West, Mumbai",
      image: "images/model3.jpg",
      services: "Dinner • Events • Social Companionship",
      phone: "+91 98765 43212",
      profile: "model3.html"
    },

    {
      name: "Emma",
      location: "Andheri, Mumbai",
      image: "images/model4.jpg",
      services: "Dinner • Events • Social Companionship",
      phone: "+91 98765 43213",
      profile: "model4.html"
    },

    {
      name: "Sara",
      location: "Andheri West, Mumbai",
      image: "images/model5.jpg",
      services: "Dinner • Events • Social Companionship",
      phone: "+91 98765 43214",
      profile: "model5.html"
    },

    {
      name: "Riya",
      location: "Andheri East, Mumbai",
      image: "images/model6.jpg",
      services: "Dinner • Events • Social Companionship",
      phone: "+91 98765 43215",
      profile: "model6.html"
    }

  ];


  if (featuredProfiles) {

    featuredProfiles.innerHTML =
      models.map(model => `

        <article class="profile-card">

          <a
            href="${model.profile}"
            class="profile-image-link"
          >

            <div class="profile-image">

              <img
                src="${model.image}"
                alt="${model.name}"
                loading="lazy"
              >

              <span class="profile-status">
                Available
              </span>

            </div>

          </a>


          <div class="profile-content">

            <h3>
              ${model.name}
            </h3>

            <p class="profile-location">
              📍 ${model.location}
            </p>

            <p class="profile-services">
              ${model.services}
            </p>

            <p class="profile-phone">
              📞 ${model.phone}
            </p>


            <div class="profile-actions">

              <a
                href="${model.profile}"
                class="profile-view-btn"
              >
                View Profile
              </a>

              <a
                href="tel:${model.phone.replace(/\s/g, '')}"
                class="profile-book-btn"
              >
                Book Now
              </a>

            </div>

          </div>

        </article>

      `).join("");

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
          threshold: 0.12
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
              behavior: "smooth",
              block: "start"
            });

          }

        }
      );

    });

});
```

