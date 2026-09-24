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
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: 4,
      name: "Riya",
      category: "Model",
      location: "Kolkata",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85"
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
    }
  ];


  const featured =
    document.getElementById("featuredProfiles");


  if (!featured) {
    console.error("featuredProfiles element not found");
    return;
  }


  featured.innerHTML = profiles.map(function (profile) {

    return `
      <article
        class="profile-card"
        style="
          opacity:1 !important;
          visibility:visible !important;
          display:flex !important;
        "
      >

        <img
          src="${profile.image}"
          alt="${profile.name}"
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

          <a
            href="profile.html?id=${profile.id}"
            class="gold-btn"
          >
            View Profile
          </a>

        </div>

      </article>
    `;

  }).join("");


  console.log(
    "SUCCESS: 6 profile cards created"
  );

});
```


