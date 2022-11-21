
// noinspection JSVoidFunctionReturnValueUsed

const activePage = window.location.pathname;


const navLinks = document.querySelectorAll("nav a").forEach(link => {
    if (!link.href.includes(`${activePage}`)) {
        return;
    }
    console.log(`${activePage}`);
    link.classList.add("active");
});


fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(HSVL => {
        activities(HSVL);

    });

/*
function searchBarFunction() {
    // Declare variables
    let input, filter, ul, li, a, i, txtValue;
    input = document.querySelector('.activityList');
    filter = input.value.toUpperCase();
    ul = document.querySelector(".activityList");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

 */


function activities(HSVL){
    const ul = document.querySelector("ul.activityList");
    for (let i = 0; i < HSVL.length; i++) {
        const activity = HSVL[i].activity;
        const popularity = HSVL[i].popularity;
        const address = HSVL[i].location;
        const city = HSVL[i].city;
        const season = HSVL[i].season;
        console.log(activity);
        const li = document.createElement("li");
        li.innerHTML = `
            <h2>${activity}</h2>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p>   
                        `;
        ul.appendChild(li);
    }

}


fetch('http://localhost:3000/locations')
    .then(response => response.json())
    .then(locationData =>{
        locationsOnMap(locationData);

    })

function locationsOnMap(locationData){
    const map = L.map("map").setView([55.72, 12.56], 10.5);

    const tiles = L.tileLayer("https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=89TnfA8v1mRlkatNruN7", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    for (let i = 0; i < locationData.length; i++) {
        L.marker([locationData[i].latitude, locationData[i].longitude]).addTo(map);
    }
}



