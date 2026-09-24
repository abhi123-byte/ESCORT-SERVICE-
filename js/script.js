document.addEventListener("DOMContentLoaded", () => {

    const featured =
        document.getElementById("featuredProfiles");

    if (featured) {

        featured.innerHTML =
            profiles.slice(0, 6)
            .map(createProfileCard)
            .join("");

    }


    const profileGrid =
        document.getElementById("profileGrid");

    if (profileGrid) {

        renderProfiles(profiles);

    }


    const search =
        document.getElementById("search");

    const category =
        document.getElementById("category");

    const location =
        document.getElementById("location");


    function filterProfiles() {

        let result = profiles;

        const searchValue =
            search?.value.toLowerCase() || "";

        const categoryValue =
            category?.value || "";

        const locationValue =
            location?.value || "";


        result = result.filter(profile => {

            const text =
                `${profile.name}
                 ${profile.category}
                 ${profile.location}`.toLowerCase();

            return text.includes(searchValue);

        });


        if (categoryValue) {

            result =
                result.filter(
                    p => p.category === categoryValue
                );

        }


        if (locationValue) {

            result =
                result.filter(
                    p => p.location === locationValue
                );

        }


        renderProfiles(result);

    }


    search?.addEventListener(
        "input",
        filterProfiles
    );

    category?.addEventListener(
        "change",
        filterProfiles
    );

    location?.addEventListener(
        "change",
        filterProfiles
    );


    const menu =
        document.querySelector(".menu-btn");

    menu?.addEventListener(
        "click",
        toggleMenu
    );


    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


    loadSingleProfile();

    loadBookingProfile();

});


function createProfileCard(profile) {

    return `

        <article class="profile-card">

            <div class="profile-image">

                <img
                    src="${profile.image}"
                    alt="${profile.name}"
                >

                <span class="profile-number">
                    #${profile.id}
                </span>

            </div>


            <div class="profile-content">

                <small>
                    PROFILE #${profile.id}
                </small>

                <h3>
                    ${profile.name}
                </h3>

                <p>
                    ${profile.category}
                    ·
                    ${profile.location}
                </p>


                <div class="card-buttons">

                    <a
                        href="profile.html?id=${profile.id}"
                        class="outline-btn"
                    >
                        View Profile
                    </a>

                    <a
                        href="booking.html?id=${profile.id}"
                        class="gold-btn"
                    >
                        Book Now
                    </a>

                </div>

            </div>

        </article>

    `;

}


function renderProfiles(list) {

    const grid =
        document.getElementById("profileGrid");

    if (!grid) return;


    if (list.length === 0) {

        grid.innerHTML =
            `<p class="no-results">
                No profiles found.
            </p>`;

        return;

    }


    grid.innerHTML =
        list.map(createProfileCard).join("");

}


function loadSingleProfile() {

    const container =
        document.getElementById("singleProfile");

    if (!container) return;


    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        params.get("id");


    const profile =
        profiles.find(
            p => p.id === id
        );


    if (!profile) {

        container.innerHTML =
            "<h2>Profile not found.</h2>";

        return;

    }


    container.innerHTML = `

        <div class="profile-detail-image">

            <img
                src="${profile.image}"
                alt="${profile.name}"
            >

        </div>


        <div class="profile-detail-content">

            <small>
                PROFILE #${profile.id}
            </small>

            <h1>
                ${profile.name}
            </h1>

            <p class="gold-text">
                ${profile.category}
                ·
                ${profile.location}
            </p>

            <p>
                ${profile.description}
            </p>


            <div class="detail-row">
                <span>Profile ID</span>
                <strong>#${profile.id}</strong>
            </div>

            <div class="detail-row">
                <span>Category</span>
                <strong>${profile.category}</strong>
            </div>

            <div class="detail-row">
                <span>Location</span>
                <strong>${profile.location}</strong>
            </div>

            <div class="detail-row">
                <span>Specialities</span>
                <strong>${profile.skills}</strong>
            </div>


            <a
                href="booking.html?id=${profile.id}"
                class="gold-btn large-btn"
            >
                Book ${profile.name}
            </a>

        </div>

    `;

}


function loadBookingProfile() {

    const input =
        document.getElementById(
            "bookingProfile"
        );

    if (!input) return;


    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        params.get("id");


    if (!id) return;


    const profile =
        profiles.find(
            p => p.id === id
        );


    if (profile) {

        input.value =
            `#${profile.id} — ${profile.name}`;

    }

}


function toggleMenu() {

    const nav =
        document.getElementById("navLinks");

    nav.classList.toggle("mobile-active");

}

