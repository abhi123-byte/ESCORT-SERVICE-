```javascript
document.addEventListener("DOMContentLoaded", function () {

  const profiles = [

    {
      id: 1,
      name: "Sophia",
      age: 24,
      location: "Andheri, Mumbai",
      category: "Model",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
      description: "Professional independent talent available for enquiries and legitimate bookings.",
      services: "Events · Social appearances · Modeling",
      phone: "+919000000001",
      featured: true
    },

    {
      id: 2,
      name: "Isabella",
      age: 26,
      location: "Andheri, Mumbai",
      category: "Creator",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
      description: "Professional talent available for selected enquiries and bookings.",
      services: "Events · Lifestyle · Creative projects",
      phone: "+919000000002",
      featured: true
    },

    {
      id: 3,
      name: "Emma",
      age: 25,
      location: "Mumbai",
      category: "Model",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85",
      description: "Independent professional talent available for selected bookings.",
      services: "Fashion · Events · Commercial work",
      phone: "+919000000003",
      featured: true
    },

    {
      id: 4,
      name: "Olivia",
      age: 27,
      location: "Andheri, Mumbai",
      category: "Artist",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
      description: "Creative professional available for appointments and event-related enquiries.",
      services: "Events · Creative projects · Visual work",
      phone: "+919000000004",
      featured: true
    },

    {
      id: 5,
      name: "Mia",
      age: 23,
      location: "Mumbai",
      category: "Creator",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=85",
      description: "Independent creator available for professional enquiries.",
      services: "Lifestyle · Events · Appearances",
      phone: "+919000000005",
      featured: true
    },

    {
      id: 6,
      name: "Ava",
      age: 28,
      location: "Andheri, Mumbai",
      category: "Model",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
      description: "Professional model available for selected commercial enquiries.",
      services: "Modeling · Events · Commercial work",
      phone: "+919000000006",
      featured: true
    },

    {
      id: 7,
      name: "Charlotte",
      age: 25,
      location: "Mumbai",
      category: "Model",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
      description: "Professional talent available for selected bookings.",
      services: "Events · Modeling · Appearances",
      phone: "+919000000007",
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
      phone: "+919000000008",
      featured: false
    }

  ];


  /* =========================================
     CREATE PROFILE CARD
  ========================================= */

  function createProfileCard(profile) {

    return `
      <article
        class="profile-card"
        data-category="${profile.category}"
        data-location="${profile.location}">

        <img
          src="${profile.image}"
          alt="${profile.name}"
          loading="lazy"
        >

        <span class="profile-number">
          ${String(profile.id).padStart(2, "0")}
        </span>

        <div class="profile-card-content">

          <p>${profile.category}</p>

          <h3>${profile.name}</h3>

          <p>
            ${profile.age} · ${profile.location}
          </p>

          <button
            type="button"
            class="gold-btn profile-view-btn"
            data-profile-id="${profile.id}">
            View Profile
          </button>

        </div>

      </article>
    `;
  }


  /* =========================================
     HOMEPAGE — ONLY 6 FEATURED PROFILES
  ========================================= */

  const featuredContainer =
    document.getElementById("featuredProfiles");

  if (featuredContainer) {

    const featuredProfiles =
      profiles.filter(function (profile) {
        return profile.featured === true;
      }).slice(0, 6);

    featuredContainer.innerHTML =
      featuredProfiles
        .map(createProfileCard)
        .join("");

    console.log(
      "Featured profiles loaded:",
      featuredProfiles.length
    );
  }


  /* =========================================
     ALL PROFILES PAGE
  ========================================= */

  const allProfilesContainer =
    document.getElementById("allProfiles");

  const search =
    document.getElementById("profileSearch");

  const category =
    document.getElementById("categoryFilter");

  const location =
    document.getElementById("locationFilter");


  function showAllProfiles() {

    if (!allProfilesContainer) return;

    const searchValue =
      search
        ? search.value.toLowerCase().trim()
        : "";

    const categoryValue =
      category
        ? category.value
        : "";

    const locationValue =
      location
        ? location.value
        : "";


    const results =
      profiles.filter(function (profile) {

        const text =
          (
            profile.name +
            " " +
            profile.category +
            " " +
            profile.location
          ).toLowerCase();

        const matchesSearch =
          !searchValue ||
          text.includes(searchValue);

        const matchesCategory =
          !categoryValue ||
          profile.category === categoryValue;

        const matchesLocation =
          !locationValue ||
          profile.location.includes(locationValue);

        return (
          matchesSearch &&
          matchesCategory &&
          matchesLocation
        );

      });


    if (results.length === 0) {

      allProfilesContainer.innerHTML = `
        <div class="no-profiles">
          <h3>No profiles found</h3>
          <p>Try another search or filter.</p>
        </div>
      `;

      return;
    }


    allProfilesContainer.innerHTML =
      results
        .map(createProfileCard)
        .join("");
  }


  if (allProfilesContainer) {

    showAllProfiles();

    if (search) {
      search.addEventListener(
        "input",
        showAllProfiles
      );
    }

    if (category) {
      category.addEventListener(
        "change",
        showAllProfiles
      );
    }

    if (location) {
      location.addEventListener(
        "change",
        showAllProfiles
      );
    }

  }


  /* =========================================
     PROFILE DETAILS
  ========================================= */

  const modal =
    document.createElement("div");

  modal.className = "profile-modal";

  modal.innerHTML = `
    <div class="profile-modal-overlay"></div>

    <div class="profile-modal-box">

      <button
        type="button"
        class="profile-modal-close">
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

        <div class="profile-modal-line"></div>

        <h4>About</h4>

        <p class="profile-modal-description"></p>

        <h4>Services</h4>

        <p class="profile-modal-services"></p>

        <div class="profile-modal-buttons">

          <a
            class="gold-btn profile-call"
            href="#">
            Call / Enquire
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


  /* =========================================
     OPEN PROFILE
  ========================================= */

  document.addEventListener("click", function (event) {

    const button =
      event.target.closest(".profile-view-btn");

    if (!button) return;

    const id =
      Number(button.dataset.profileId);

    const profile =
      profiles.find(function (item) {
        return item.id === id;
      });

    if (!profile) return;


    modal.querySelector(
      ".profile-modal-image"
    ).src = profile.image;

    modal.querySelector(
      ".profile-modal-image"
    ).alt = profile.name;

    modal.querySelector(
      ".profile-modal-category"
    ).textContent =
      profile.category;

    modal.querySelector(
      ".profile-modal-name"
    ).textContent =
      profile.name;

    modal.querySelector(
      ".profile-modal-meta"
    ).textContent =
      `${profile.age} · ${profile.location}`;

    modal.querySelector(
      ".profile-modal-description"
    ).textContent =
      profile.description;

    modal.querySelector(
      ".profile-modal-services"
    ).textContent =
      profile.services;

    modal.querySelector(
      ".profile-call"
    ).href =
      `tel:${profile.phone}`;


    const whatsappMessage =
      encodeURIComponent(
        `Hello, I would like to enquire about ${profile.name}.`
      );

    modal.querySelector(
      ".profile-whatsapp"
    ).href =
      `https://wa.me/${profile.phone.replace(/\D/g, "")}?text=${whatsappMessage}`;


    modal.classList.add("active");

    document.body.style.overflow =
      "hidden";

  });


  /* =========================================
     CLOSE PROFILE
  ========================================= */

  function closeProfile() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

  }


  modal.querySelector(
    ".profile-modal-close"
  ).addEventListener(
    "click",
    closeProfile
  );


  modal.querySelector(
    ".profile-modal-overlay"
  ).addEventListener(
    "click",
    closeProfile
  );


  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        modal.classList.contains("active")
      ) {
        closeProfile();
      }

    }
  );

});
```

