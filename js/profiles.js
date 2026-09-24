```javascript
document.addEventListener("DOMContentLoaded", function () {

  const profiles = [
    {
      id: 1,
      name: "Aarohi",
      category: "Model",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: 2,
      name: "Kiara",
      category: "Creator",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: 3,
      name: "Meera",
      category: "Artist",
      location: "Bengaluru",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: 4,
      name: "Riya",
      category: "Model",
      location: "Kolkata",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: 5,
      name: "Ananya",
      category: "Creator",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: 6,
      name: "Tara",
      category: "Artist",
      location: "Ranchi",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: 7,
      name: "Naina",
      category: "Model",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: 8,
      name: "Ishita",
      category: "Creator",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85"
    }
  ];


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


  /* HOMEPAGE */

  const featuredProfiles =
    document.getElementById("featuredProfiles");

  if (featuredProfiles) {

    featuredProfiles.innerHTML =
      profiles
        .slice(0, 6)
        .map(createCard)
        .join("");

  }


  /* ALL PROFILES PAGE */

  const allProfiles =
    document.getElementById("allProfiles");

  const search =
    document.getElementById("profileSearch");

  const category =
    document.getElementById("categoryFilter");

  const location =
    document.getElementById("locationFilter");


  function renderProfiles() {

    if (!allProfiles) return;

    const searchValue =
      search
        ? search.value.toLowerCase().trim()
        : "";

    const categoryValue =
      category ? category.value : "";

    const locationValue =
      location ? location.value : "";


    const filtered =
      profiles.filter(profile => {

        const text =
          `${profile.name} ${profile.category} ${profile.location}`
          .toLowerCase();

        return (
          (!searchValue || text.includes(searchValue)) &&
          (!categoryValue || profile.category === categoryValue) &&
          (!locationValue || profile.location === locationValue)
        );

      });


    allProfiles.innerHTML =
      filtered.map(createCard).join("");

  }


  renderProfiles();


  if (search) {
    search.addEventListener(
      "input",
      renderProfiles
    );
  }


  if (category) {
    category.addEventListener(
      "change",
      renderProfiles
    );
  }


  if (location) {
    location.addEventListener(
      "change",
      renderProfiles
    );
  }


  /* PROFILE BUTTON */

  document.addEventListener(
    "click",
    function (event) {

      const button =
        event.target.closest(".profile-view-btn");

      if (!button) return;

      const id =
        Number(button.dataset.id);

      window.location.href =
        `profile.html?id=${id}`;

    }
  );


  console.log(
    "LUXE profiles loaded successfully"
  );

});
```

