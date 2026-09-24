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

});document.addEventListener("DOMContentLoaded", function () {

const profiles = [
{
name: "Alina",
location: "Mumbai · Fashion Model",
image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
about: "Professional fashion model available for approved commercial, editorial and promotional projects.",
services: [
"Fashion Shoots",
"Editorial",
"Brand Campaigns",
"Promotional Events"
],
phone: "+91 90000 00001"
},

```
{
  name: "Sofia",
  location: "Delhi · Editorial Model",
  image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
  about: "Professional model experienced in editorial photography and commercial campaigns.",
  services: [
    "Editorial Shoots",
    "Fashion",
    "Brand Campaigns",
    "Photography"
  ],
  phone: "+91 90000 00002"
},

{
  name: "Kiara",
  location: "Bangalore · Commercial Model",
  image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85",
  about: "Commercial and lifestyle model available for professional photography and promotional projects.",
  services: [
    "Lifestyle",
    "Commercial",
    "Fashion Shoots",
    "Promotional Events"
  ],
  phone: "+91 90000 00003"
},

{
  name: "Arjun",
  location: "Mumbai · Fashion Model",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
  about: "Professional male model working across fashion, editorial and commercial photography.",
  services: [
    "Fashion",
    "Editorial",
    "Commercial",
    "Brand Shoots"
  ],
  phone: "+91 90000 00004"
},

{
  name: "Ryan",
  location: "Delhi · Commercial Model",
  image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=85",
  about: "Commercial model available for professional advertising and lifestyle campaigns.",
  services: [
    "Advertising",
    "Lifestyle",
    "Commercial",
    "Brand Campaigns"
  ],
  phone: "+91 90000 00005"
},

{
  name: "Maya",
  location: "Hyderabad · Editorial Model",
  image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=85",
  about: "Editorial and fashion model experienced in professional photography projects.",
  services: [
    "Editorial",
    "Fashion",
    "Photography",
    "Promotional Events"
  ],
  phone: "+91 90000 00006"
}
```

];

const cards = document.querySelectorAll(".profile-card");
const overlay = document.getElementById("profileOverlay");
const closeButton = document.getElementById("profileClose");

const detailImage = document.getElementById("detailImage");
const detailName = document.getElementById("detailName");
const detailLocation = document.getElementById("detailLocation");
const detailAbout = document.getElementById("detailAbout");
const detailServices = document.getElementById("detailServices");
const detailPhone = document.getElementById("detailPhone");
const detailContact = document.getElementById("detailContact");

function openProfile(index) {

```
const profile = profiles[index];

if (!profile) return;

detailImage.src = profile.image;
detailImage.alt = profile.name;

detailName.textContent = profile.name;
detailLocation.textContent = profile.location;
detailAbout.textContent = profile.about;
detailPhone.textContent = profile.phone;

detailServices.innerHTML = "";

profile.services.forEach(function(service) {

  const span = document.createElement("span");

  span.textContent = service;

  detailServices.appendChild(span);

});

/*
  Replace the number below with your own WhatsApp number.
  Use country code without + or spaces.
*/

const enquiryMessage =
  "Hello, I would like to make an enquiry regarding " +
  profile.name +
  ".";

detailContact.href =
  "https://wa.me/919000000000?text=" +
  encodeURIComponent(enquiryMessage);

overlay.classList.add("active");

document.body.style.overflow = "hidden";
```

}

function closeProfile() {

```
overlay.classList.remove("active");

document.body.style.overflow = "";
```

}

cards.forEach(function(card) {

```
card.addEventListener("click", function(event) {

  event.stopPropagation();

  const index = Number(card.dataset.profile);

  openProfile(index);

});
```

});

closeButton.addEventListener("click", closeProfile);

overlay.addEventListener("click", function(event) {

```
if (event.target === overlay) {
  closeProfile();
}
```

});

document.addEventListener("keydown", function(event) {

```
if (event.key === "Escape") {
  closeProfile();
}
```

});

});



