```javascript
document.addEventListener("DOMContentLoaded", () => {

  /*
    PROFILE DATA
    Replace the image URLs with your own images later.
    Set featured: true for the 6 profiles you want
    displayed on the homepage.
  */

  const profiles = [

    {
      id: 1,
      name: "Sophia",
      age: 24,
      location: "Andheri, Mumbai",
      category: "Model",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
      description: "Professional independent talent available for private enquiries and legitimate bookings.",
      services: "Private appointments · Events · Social appearances",
      phone: "+91 90000 00001",
      featured: true
    },

    {
      id: 2,
      name: "Isabella",
      age: 26,
      location: "Andheri, Mumbai",
      category: "Creator",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
      description: "Professional talent offering a discreet and polished booking experience.",
      services: "Events · Lifestyle appearances · Private enquiries",
      phone: "+91 90000 00002",
      featured: true
    },

    {
      id: 3,
      name: "Emma",
      age: 25,
      location: "Mumbai",
      category: "Model",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85",
      description: "Independent professional talent available for selected bookings and enquiries.",
      services: "Fashion · Events · Social appearances",
      phone: "+91 90000 00003",
      featured: true
    },

    {
      id: 4,
      name: "Olivia",
      age: 27,
      location: "Andheri, Mumbai",
      category: "Artist",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
      description: "Creative professional available for appointments and event-related bookings.",
      services: "Events · Creative projects · Private enquiries",
      phone: "+91 90000 00004",
      featured: true
    },

    {
      id: 5,
      name: "Mia",
      age: 23,
      location: "Mumbai",
      category: "Creator",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=85",
      description: "Independent creator offering a professional and discreet enquiry experience.",
      services: "Lifestyle · Events · Appearances",
      phone: "+91 90000 00005",
      featured: true
    },

    {
      id: 6,
      name: "Ava",
      age: 28,
      location: "Andheri, Mumbai",
      category: "Model",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85",
      description: "Professional model available for selected private and commercial enquiries.",
      services: "Modeling · Events · Commercial work",
      phone: "+91 90000 00006",
      featured: true
    },

    /*
      ADDITIONAL PROFILES
      These will appear on profiles.html but not
      on the homepage unless featured is changed to true.
    */

    {
      id: 7,
      name: "Charlotte",
      age: 25,
      location: "Mumbai",
      category: "Model",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
      description: "Professional talent available for selected bookings.",
      services: "Events · Modeling · Appearances",
      phone: "+91 90000 00007",
      featured: false
    },

    {
      id: 8,
      name: "Amelia",
      age: 26,
      location: "Mumbai",
      category: "Creator",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
      description: "Independent professional talent available for enquiries.",
      services: "Events · Creative work · Appearances",
      phone: "+91 90000 00008",
      featured: false
    }

  ];


  /* =================================
     PROFILE CARD
  ================================= */

  function createProfileCard(profile) {

    return `
      <article class="profile-card reveal"
        data-category="${profile.category}">

        <div class="profile-image">

          <img
            src="${profile.image}"
            alt="${profile.name}"
            loading="lazy"
          >

          <div class="profile-number">
            #${String(profile.id).padStart(2, "0")}
          </div>

        </div>

        <div class="profile-info">

          <p class="profile-category">
            ${profile.category}
          </p>

          <h3 class="profile-name">
            ${profile.name}
          </h3>

          <p class="profile-meta">
            ${profile.age} · ${profile.location}
          </p>

          <p class="profile-description">
            ${profile.description}
          </p>

          <div class="profile-actions">

            <button
              class="gold-btn profile-details"
              data-id="${profile.id}">
              View Profile
            </button>

            <a
              href="tel:${profile.phone.replace(/\s/g, "")}"
              class="outline-btn">
              Call
            </a>

          </div>

        </div>

      </article>
    `;
  }


  /* =================================
     HOMEPAGE — SIX FEATURED PROFILES
  ================================= */

  const featuredContainer =
    document.getElementById("featuredProfiles");

  if (featuredContainer) {

    const featuredProfiles =
      profiles.filter(profile => profile.featured).slice(0, 6);

    featuredContainer.innerHTML =
      featuredProfiles
        .map(createProfileCard)
        .join("");

  }


  /* =================================
     PROFILES PAGE — ALL PROFILES
  ================================= */

  const allProfilesContainer =
    document.getElementById("allProfiles");

  if (allProfilesContainer) {

    allProfilesContainer.innerHTML =
      profiles
        .map(createProfileCard)
        .join("");

  }


  /* =================================
     PROFILE DETAILS MODAL
  ================================= */

  const modal =
    document.createElement("div");

  modal.className = "profile-modal";

  modal.innerHTML = `
    <div class="profile-modal-overlay"></div>

    <div class="profile-modal-box">

      <button
        class="profile-modal-close"
        aria-label="Close">
        ×
      </button>

      <img
        class="profile-modal-image"
        src=""
        alt=""
      >

      <div class="profile-modal-content">

        <p class="profile-modal-category"></p>

        <h2 class="profile-modal-name"></h2>

        <p class="profile-modal-meta"></p>

        <p class="profile-modal-description"></p>

        <div class="profile-modal-services">
          <strong>Services</strong>
          <p></p>
        </div>

        <div class="profile-modal-actions">

          <a
            class="gold-btn profile-call"
            href="#">
            Call for Enquiry
          </a>

          <a
            class="outline-btn profile-whatsapp"
            href="#"
            target="_blank">
            WhatsApp
          </a>

        </div>

      </div>

    </div>
  `;

  document.body.appendChild(modal);


  /* =================================
     OPEN PROFILE
  ================================= */

  document.addEventListener("click", event => {

    const button =
      event.target.closest(".profile-details");

    if (!button) return;

    const profileId =
      Number(button.dataset.id);

    const profile =
      profiles.find(item =>
        item.id === profileId
      );

    if (!profile) return;


    const image =
      modal.querySelector(".profile-modal-image");

    const category =
      modal.querySelector(".profile-modal-category");

    const name =
      modal.querySelector(".profile-modal-name");

    const meta =
      modal.querySelector(".profile-modal-meta");

    const description =
      modal.querySelector(".profile-modal-description");

    const services =
      modal.querySelector(".profile-modal-services p");

    const call =
      modal.querySelector(".profile-call");

    const whatsapp =
      modal.querySelector(".profile-whatsapp");


    image.src = profile.image;
    image.alt = profile.name;

    category.textContent =
      profile.category;

    name.textContent =
      profile.name;

    meta.textContent =
      `${profile.age} · ${profile.location}`;

    description.textContent =
      profile.description;

    services.textContent =
      profile.services;


    const cleanPhone =
      profile.phone.replace(/\D/g, "");

    call.href =
      `tel:+${cleanPhone}`;

    const message =
      encodeURIComponent(
        `Hello, I would like to enquire about ${profile.name}.`
      );

    whatsapp.href =
      `https://wa.me/${cleanPhone}?text=${message}`;


    modal.classList.add("active");

    document.body.style.overflow =
      "hidden";

  });


  /* =================================
     CLOSE MODAL
  ================================= */

  function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow =
      "";

  }


  modal
    .querySelector(".profile-modal-close")
    .addEventListener(
      "click",
      closeModal
    );


  modal
    .querySelector(".profile-modal-overlay")
    .addEventListener(
      "click",
      closeModal
    );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        modal.classList.contains("active")
      ) {
        closeModal();
      }

    }
  );


});
```
