```javascript
document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     PROFILE DATABASE
     Replace the Unsplash URLs with your own photos later.
  ===================================================== */

  const profiles = [

    {
      id: 1,
      name: "Sophia",
      age: 24,
      location: "Andheri, Mumbai",
      category: "Model",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
      description: "Professional independent talent available for private enquiries, events and legitimate bookings.",
      services: "Events · Social appearances · Modeling · Private enquiries",
      phone: "+919000000001",
      featured: true
    },

    {
      id: 2,
      name: "Isabella",
      age: 26,
      location: "Andheri, Mumbai",
      category: "Creator",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
      description: "Professional talent offering a discreet and polished booking experience.",
      services: "Events · Lifestyle appearances · Creative projects",
      phone: "+919000000002",
      featured: true
    },

    {
      id: 3,
      name: "Emma",
      age: 25,
      location: "Mumbai",
      category: "Model",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1000&q=85",
      description: "Independent professional talent available for selected bookings and enquiries.",
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
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=85",
      description: "Creative professional available for appointments and event-related bookings.",
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
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1000&q=85",
      description: "Independent creator offering a professional and discreet enquiry experience.",
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
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      description: "Professional model available for selected private and commercial enquiries.",
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
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85",
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
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85",
      description: "Independent professional talent available for enquiries.",
      services: "Events · Creative work · Appearances",
      phone: "+919000000008",
      featured: false
    },

    {
      id: 9,
      name: "Charlotte",
      age: 24,
      location: "Delhi",
      category: "Artist",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=85",
      description: "Creative professional available for selected appointments.",
      services: "Events · Creative work · Studio projects",
      phone: "+919000000009",
      featured: false
    },

    {
      id: 10,
      name: "Grace",
      age: 27,
      location: "Bengaluru",
      category: "Model",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      description: "Professional independent talent available for enquiries.",
      services: "Fashion · Events · Commercial work",
      phone: "+919000000010",
      featured: false
    }

  ];


  /* =====================================================
     CREATE PROFILE CARD
  ===================================================== */

  function createCard(profile) {

    return `
      <article
        class="profile-card reveal"
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
            class="gold-btn profile-view-btn"
            data-profile-id="${profile.id}">
            View Profile
          </button>

        </div>

      </article>
    `;
  }


  /* =====================================================
     HOMEPAGE
     ONLY SIX FEATURED PROFILES
  ===================================================== */

  const featuredContainer =
    document.getElementById("featuredProfiles");

  if (featuredContainer) {

    const featured =
      profiles
        .filter(profile => profile.featured)
        .slice(0, 6);

    featuredContainer.innerHTML =
      featured.map(createCard).join("");

  }


  /* =====================================================
     PROFILES PAGE
     ALL PROFILES
  ===================================================== */

  const allProfiles =
    document.getElementById("allProfiles");

  const searchInput =
    document.getElementById("profileSearch");

  const categoryFilter =
    document.getElementById("categoryFilter");

  const locationFilter =
    document.getElementById("locationFilter");


  function displayAllProfiles() {

    if (!allProfiles) return;

    const search =
      searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const category =
      categoryFilter
        ? categoryFilter.value
        : "";

    const location =
      locationFilter
        ? locationFilter.value
        : "";


    const filtered =
      profiles.filter(profile => {

        const searchable =
          `${profile.name}
           ${profile.category}
           ${profile.location}`
            .toLowerCase();

        const matchesSearch =
          !search ||
          searchable.includes(search);

        const matchesCategory =
          !category ||
          profile.category === category;

        const matchesLocation =
          !location ||
          profile.location.includes(location);

        return (
          matchesSearch &&
          matchesCategory &&
          matchesLocation
        );

      });


    if (filtered.length === 0) {

      allProfiles.innerHTML = `
        <div class="no-profiles">
          <h3>No profiles found</h3>
          <p>Try another search or filter.</p>
        </div>
      `;

      return;
    }


    allProfiles.innerHTML =
      filtered.map(createCard).join("");

  }


  if (allProfiles) {

    displayAllProfiles();

    if (searchInput) {
      searchInput.addEventListener(
        "input",
        displayAllProfiles
      );
    }

    if (categoryFilter) {
      categoryFilter.addEventListener(
        "change",
        displayAllProfiles
      );
    }

    if (locationFilter) {
      locationFilter.addEventListener(
        "change",
        displayAllProfiles
      );
    }

  }


  /* =====================================================
     PROFILE DETAIL MODAL
  ===================================================== */

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

      <div class="profile-modal-image-wrap">

        <img
          class="profile-modal-image"
          src=""
          alt=""
        >

      </div>

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
            href="#"
            class="gold-btn profile-call">
            Call / Enquire
          </a>

          <a
            href="#"
            target="_blank"
            class="outline-btn profile-whatsapp">
            WhatsApp
          </a>

        </div>

      </div>

    </div>
  `;

  document.body.appendChild(modal);


  /* =====================================================
     OPEN PROFILE
  ===================================================== */

  document.addEventListener("click", event => {

    const button =
      event.target.closest(".profile-view-btn");

    if (!button) return;

    const id =
      Number(button.dataset.profileId);

    const profile =
      profiles.find(item => item.id === id);

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


    const callButton =
      modal.querySelector(".profile-call");

    callButton.href =
      `tel:${profile.phone}`;


    const whatsapp =
      modal.querySelector(".profile-whatsapp");

    const message =
      encodeURIComponent(
        `Hello, I would like to enquire about ${profile.name} (Profile ${String(profile.id).padStart(2, "0")}).`
      );

    whatsapp.href =
      `https://wa.me/${profile.phone.replace(/\D/g, "")}?text=${message}`;


    modal.classList.add("active");

    document.body.style.overflow =
      "hidden";

  });


  /* =====================================================
     CLOSE MODAL
  ===================================================== */

  function closeProfile() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

  }


  modal
    .querySelector(".profile-modal-close")
    .addEventListener(
      "click",
      closeProfile
    );


  modal
    .querySelector(".profile-modal-overlay")
    .addEventListener(
      "click",
      closeProfile
    );


  document.addEventListener(
    "keydown",
    event => {

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
