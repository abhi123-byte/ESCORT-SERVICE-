```javascript
document.addEventListener("DOMContentLoaded", function () {

    const box = document.getElementById("featuredProfiles");

    if (box) {
        box.innerHTML = `
            <div style="
                grid-column: 1 / -1;
                padding: 50px;
                text-align: center;
                color: white;
                background: #151515;
                border: 1px solid #c9a96e;
            ">
                <h2 style="color:#c9a96e;">PROFILE JAVASCRIPT IS WORKING</h2>
                <p>JavaScript file loaded successfully.</p>
            </div>
        `;
    }

});
```



