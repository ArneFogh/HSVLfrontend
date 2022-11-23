
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
        activities(HSVL);
    });

// Listen med activities, printet på html i en ul.
function activities(HSVL){
    const ul = document.querySelector("ul.activityList");
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

// Endpoint til data om cities, hvor vi sender en request til API.
fetch('https://hsvl.onrender.com/cities')
    .then(response => response.json())
    .then(cities => {
        registrerInput(cities);
    });

function registrerInput(cities){
    const btn = document.querySelector('button.filter');
    btn.addEventListener('click', function (){
        console.log("button clicked");
        const inputElement = document.querySelector('input#userInput');
        const zipCode = inputElement.value;

        const filteredLocations = [];
        for (let i = 0; i < cities.length; i++) {
            const citiesList = cities[i];
            if (citiesList.zip_code < zipCode) {
                filteredLocations.push(citiesList)
            }
        }

        console.log(filteredLocations)
    })
}

// const searchInput = document.querySelector("")

/*
const searchInput = document.getElementById("searchInput")
const inputField = document.getElementById("inputField").value
function searchFunc(jsonIMDB) {
    searchInput.addEventListener("click", e => {

        for (let i = 0; i < jsonIMDB.length; i++) {
            let inputFromUser = inputField
            let movieValue = jsonIMDB[i].title
            if (inputFromUser.includes(movieValue)) {
                let createResult = document.createElement("li")
                createResult.innerHTML = movieValue
                btnMovies.appendChild(createResult)
            }
        }
    })
}


// lav inputs i html og button, alle med id. placeholder i inputs hvor der står, det der skal stå i feltet
// få fat i dine input fields med doc.querySelector og giv dem en variabel
//LOG DEM UD
// få fat i knappen på samme måde
const buttonName = document.querySelector()
buttonName.addEventListener('click', createNewActivity());

function createNewActivity() {
    const text = textInput.value
    const text2 = text2input.value
    const text3 = text3input.value


}

// lav en const med keys af det der skal ind. body: JSON.stringify(*navn på const med keys*)

 */
