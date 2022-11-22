
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
fetch('http://localhost:3000/data')
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

// Endpoint til data om cities, hvor vi sender en request til API.
fetch('http://localhost:3000/cities')
    .then(response => response.json())
    .then(cities => {
        registrerInput(cities);
    });

function registrerInput(cities){
    console.log(cities)
    const btn = document.querySelector('button.filter');
    console.log(btn)
    btn.addEventListener('click', function (){
        console.log("button clicked");
        const inputElement = document.querySelector('input#userInput');
        console.log(inputElement);
        console.log(inputElement.value);
        const zipCode = inputElement.value;

        const filteredLocations = [];
        for (let i = 0; i < cities.length; i++) {
            const citiesList = cities[i];
            console.log(citiesList.zip_code)
            console.log(zipCode)
            console.log(parseFloat(citiesList.zip_code) > parseFloat(zipCode))
            if (citiesList.zip_code < zipCode) {
                filteredLocations.push(citiesList)
            }
        }
        const filteredCititesFilter = cities.filter(citiesList => parseInt(citiesList.zip_code) > parseInt(zipCode))

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
*/
