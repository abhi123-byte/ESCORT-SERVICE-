```javascript
document.addEventListener("DOMContentLoaded", function () {

  const profiles = [
    {
      id: 1,
      name: "Aarohi",
      category: "Model",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
      about: "Professional model available for fashion, editorial and commercial assignments.",
      services: ["Fashion shoots", "Editorial", "Commercial campaigns"]
    },
    {
      id: 2,
      name: "Kiara",
      category: "Creator",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
      about: "Digital creator available for lifestyle and promotional campaigns.",
      services: ["Content creation", "Brand campaigns", "Lifestyle shoots"]
    },
    {
      id: 3,
      name: "Meera",
      category: "Artist",
      location: "Bengaluru",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85",
      about: "Creative artist available for studio and visual projects.",
      services: ["Creative projects", "Studio work", "Visual campaigns"]
    },
    {
      id: 4,
      name: "Riya",
      category: "Model",
      location: "Kolkata",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
      about: "Professional talent for fashion and commercial projects.",
      services: ["Fashion", "Commercial", "Photography"]
    },
    {
      id: 5,
      name: "Ananya",
      category: "Creator",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
      about: "Lifestyle creator available for digital campaigns and collaborations.",
      services: ["Social campaigns", "Lifestyle", "Brand promotion"]
    },
    {
      id: 6,
      name: "Tara",
      category: "Artist",
      location: "Ranchi",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=85",
      about: "Creative professional available for photography and visual campaigns.",
      services: ["Photography", "Creative work", "Campaigns"]
    },
    {
      id: 7,
      name: "Naina",
      category: "Model",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
      about: "Professional model for fashion and commercial assignments.",
      services: ["Fashion", "Editorial", "Commercial"]
    },
    {
      id: 8,
      name: "Ishita",
      category: "Creator",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85",
      about: "Digital creator available for lifestyle and campaign work.",
      services: ["Content", "Campaigns", "Lifestyle"]
    }
  ];


  /* CREATE PROFILE CARD */

  function createCard(profile) {

    return `
      <article class="profile-card">

        <img
          src="${profile.image}"
          alt="${profile.name}"
          loading="lazy"
        >

        <span class="profile-number">
          ${String(profile.id).padStart(2, "0")}
        </span>

        <div class="profile-card-content">

          <p>
            ${profile.category} · ${profile.location}
          </p>

          <h3>
            ${profile.name}
          </h3>

          <button
            class="gold-btn profile-view-btn"
            data-id="${profile.id}"
            type="button"
          >
            View Profile
          </button>

        </div>

      </article>
    `;
  }


  /* HOMEPAGE — ONLY 6 FEATURED */

  const featured = document.getElementById("featuredProfiles");

  if (featured) {

    featured.innerHTML = profiles
      .slice(0, 6)
      .map(createCard)
      .join("");

  }


  /* PROFILES PAGE — ALL PROFILES */

  const allProfiles = document.getElementById("allProfiles");

  const searchInput = document.getElementById("profileSearch");
  const categoryFilter = document.getElementById("categoryFilter");
  const locationFilter = document.getElementById("locationFilter");


  function renderAllProfiles() {

    if (!allProfiles) return;

    const search =
      searchInput ?
      searchInput.value.toLowerCase().trim() :
      "";

    const category =
      categoryFilter ?
      categoryFilter.value :
      "";

    const location =
      locationFilter ?
      locationFilter.value :
      "";


    const filtered = profiles.filter(profile => {

      const text =
        `${profile.name} ${profile.category} ${profile.location}`
        .toLowerCase();

      const matchesSearch =
        !search || text.includes(search);

      const matchesCategory =
        !category || profile.category === category;

      const matchesLocation =
        !location || profile.location === location;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLocation
      );

    });


    if (filtered.length === 0) {

      allProfiles.innerHTML = `
        <div style="
          grid-column:1/-1;
          padding:50px;
          text-align:center;
          color:#aaa;
        ">
          No profiles found.
        </div>
      `;

      return;
    }


    allProfiles.innerHTML =
      filtered.map(createCard).join("");

  }


  renderAllProfiles();


  if (searchInput) {
    searchInput.addEventListener(
      "input",
      renderAllProfiles
    );
  }


  if (categoryFilter) {
    categoryFilter.addEventListener(
      "change",
      renderAllProfiles
    );
  }


  if (locationFilter) {
    locationFilter.addEventListener(
      "change",
      renderAllProfiles
    );
  }


  /* PROFILE BUTTON */

  document.addEventListener("click", function (event) {

    const button =
      event.target.closest(".profile-view-btn");

    if (!button) return;

    const id =
      Number(button.dataset.id);

    const profile =
      profiles.find(item => item.id === id);

    if (!profile) return;

    window.location.href =
      `profile.html?id=${profile.id}`;

  });


  console.log(
    "LUXE profiles loaded:",
    profiles.length
  );

});
```


