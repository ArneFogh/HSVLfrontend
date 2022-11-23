
// noinspection JSVoidFunctionReturnValueUsed

//Highlighter hvilken side vi er på i navbar
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach(link => {
    if (!link.href.includes(`${activePage}`)) {
        return;
    }
    console.log(`${activePage}`);
    link.classList.add("active");
});

// Fetch sender en request til det endpoint, hvor vores samlede data på aktiviteterne befinder sig.
fetch('https://hsvl.onrender.com/data')
    .then(response => response.json())
    .then(HSVL => {
        renderActivities(HSVL);
        registrerInput(HSVL);
    });

// Listen med activities, printet på html i en ul.
function renderActivities(HSVL){
    const ul = document.querySelector("ul.activityList");
    ul.innerHTML = "";
    for (let i = 0; i < HSVL.length; i++) {
        const activity = HSVL[i].activity;
        const popularity = HSVL[i].popularity;
        const address = HSVL[i].location;
        const city = HSVL[i].city;
        const season = HSVL[i].season;
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

fetch('https://hsvl.onrender.com/mostPopulare')
    .then(response => response.json())
    .then(mostPopulare => {
        populareActivities(mostPopulare);
    });

function populareActivities(mostPopulare){
    const ul = document.querySelector("ul.topPopulare");
    for (let i = 0; i < mostPopulare.length; i++) {
        const activity = mostPopulare[i].activity;
        const popularity = mostPopulare[i].popularity;
        const address = mostPopulare[i].location;
        const city = mostPopulare[i].city;
        const season = mostPopulare[i].season;
        const li = document.createElement("li");
        li.innerHTML = `
            <h2>${activity}</h2>
            <p><span><p2>Popularitet:</p2></span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p>   
                        `;
        ul.appendChild(li);
    }

}




function registrerInput(activities){
    /*const btn = document.querySelector('button.filter'); */
    const inputElement = document.querySelector('input#userInput')
    inputElement.addEventListener('input', function (){
        const activityName = inputElement.value.toLowerCase()
        const filteredActivities = [];
        for (let i = 0; i < activities.length; i++) {
            console.log(activities[i])
            if (activities[i].activity.toLowerCase().includes(activityName)){
                console.log(activities[i].activity)
                filteredActivities.push(activities[i])
            }
        }
        renderActivities(filteredActivities)
    })
}

