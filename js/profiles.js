```javascript
document.addEventListener("DOMContentLoaded", function () {
    const featured = document.getElementById("featuredProfiles");

    if (!featured) {
        console.log("ERROR: featuredProfiles element not found");
        return;
    }

    featured.innerHTML =
        '<div style="grid-column:1/-1; padding:60px; background:#151515; border:2px solid #c9a96e; text-align:center; color:white;">' +
            '<h2 style="color:#c9a96e; font-size:40px; margin-bottom:15px;">PROFILE TEST WORKING</h2>' +
            '<p>JavaScript is successfully creating content.</p>' +
        '</div>';

    console.log("PROFILES.JS IS WORKING");
});
```



