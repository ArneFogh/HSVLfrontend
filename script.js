const activePage = window.location.pathname;
console.log(activePage)

const navLinks = document.querySelectorAll("nav a").forEach(link => {
    if (!link.href.includes(`${activePage}`)) {
        return;
    }
    console.log(`${activePage}`);
    link.classList.add("active");
});

fetch('http://localhost:3000/activitiesData')
    .then(response => response.json())
    .then(HSVL => {
        activities(HSVL);

    })

function activities(HSVL){
    const ul = document.querySelector("ul.activityList");
    for (let i = 0; i < HSVL.length; i++) {
        const activity = HSVL[i].activity;
        const popularity = HSVL[i].popularity;
        const adress = HSVL[i].location;
        const city = HSVL[i].city;
        const season = HSVL[i].season;
        console.log(activity);
        const li = document.createElement("li");
        li.innerHTML = `
            <h2>${activity}</h2>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${adress}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p>   
                        `;
        ul.appendChild(li);
    }
}