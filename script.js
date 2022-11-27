
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

fetch('https://hsvl.onrender.com/mostPopular')
    .then(response => response.json())
    .then(mostPopulare => {
        popularActivities(mostPopulare);
    });

function popularActivities(mostPopulare){
    try {
        const popularUl = document.querySelector("ul.topPopular");
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
            popularUl.appendChild(li);
        }
    } catch (e) {
        
    }
}


function cityDropDown() {
    document.getElementById("dropDownCity").classList.toggle("show");
}

// Første dropdown filter
function filterFunction() {
    const input = document.querySelector("#dropInput");
    const filter = input.value.toUpperCase();
    const dropDiv = document.querySelector("#dropDownCity");
    const dropCities = dropDiv.getElementsByTagName("a");
    for (let i = 0; i < dropCities.length; i++) {
        inputValue = dropCities[i].textContent || dropCities[i].innerText;
        if (inputValue.toUpperCase().indexOf(filter) > -1) {
            dropCities[i].style.display = "";
        } else {
            dropCities[i].style.display = "none"
        }
    }
}

// Fetch sender en request til det endpoint, hvor vores samlede data på aktiviteterne befinder sig.
fetch('https://hsvl.onrender.com/data')
    .then(response => response.json())
    .then(HSVL => {
        renderActivities(HSVL);
        renderNorrebro(HSVL);
        renderOsterbro(HSVL);
        renderFrederiksberg(HSVL);
        renderKbhk(HSVL);
        renderNordhavn(HSVL);
        renderKlampenborg(HSVL);
        registrerInput(HSVL);
    });





// Listen med activities, printet på html i en ul.
function renderActivities(HSVL){
    try{
        const activityUl = document.querySelector("ul.activityList");
        activityUl.innerHTML = "";
        for (let i = 0; i < HSVL.length; i++) {
            const activity = HSVL[i].activity;
            const popularity = HSVL[i].popularity;
            const address = HSVL[i].location;
            const city = HSVL[i].city;
            const season = HSVL[i].season;
            const locationNumber = HSVL[i].location_id;
            const li = document.createElement("li");
            li.innerHTML = `
            <h2>${activity}</h2>
            <hr>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p> 
            <hr>
            <p><span>Nummer:</span> ${locationNumber}</p>  
                        `;
            activityUl.appendChild(li);
        }
    } catch (e) {

    }
}

//NØRREBRO
        function renderNorrebro(HSVL) {
            try {
                const norrebroUL = document.querySelector("ul#norrebroList");
                for (let i = 0; i < HSVL.length; i++) {
                    const activity = HSVL[i].activity;
                    const popularity = HSVL[i].popularity;
                    const address = HSVL[i].location;
                    const city = HSVL[i].city;
                    const city_id = HSVL[i].city_id;
                    const season = HSVL[i].season;
                    const li = document.createElement("li");
                    if (city_id === 1) {

                        li.innerHTML = `
            <h2>${activity}</h2>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p>   
                        `;
                        norrebroUL.appendChild(li);
                    }
                }
            } catch (e) {

            }
        }

// Østerbro

        function renderOsterbro(HSVL) {
            try {
                const osterbroUL = document.querySelector("ul#osterbroList");
                for (let i = 0; i < HSVL.length; i++) {
                    const activity = HSVL[i].activity;
                    const popularity = HSVL[i].popularity;
                    const address = HSVL[i].location;
                    const city = HSVL[i].city;
                    const city_id = HSVL[i].city_id;
                    const season = HSVL[i].season;
                    const li = document.createElement("li");
                    if (city_id === 8) {

                        li.innerHTML = `
            <h2>${activity}</h2>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p>   
                        `;
                        osterbroUL.appendChild(li);
                    }
                }
            } catch (e) {

            }
        }

// Frederiksberg

        function renderFrederiksberg(HSVL) {
            try {
                const frederiksbergUl = document.querySelector("ul#frederiksbergList");
                for (let i = 0; i < HSVL.length; i++) {
                    const activity = HSVL[i].activity;
                    const popularity = HSVL[i].popularity;
                    const address = HSVL[i].location;
                    const city = HSVL[i].city;
                    const city_id = HSVL[i].city_id;
                    const season = HSVL[i].season;
                    const li = document.createElement("li");
                    if (city_id === 3) {

                        li.innerHTML = `
            <h2>${activity}</h2>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p>   
                        `;
                        frederiksbergUl.appendChild(li);
                    }
                }
            } catch (e) {

            }
        }

// København K

        function renderKbhk(HSVL) {
            try {
                const kbhkgUl = document.querySelector("ul#kbhkList");
                for (let i = 0; i < HSVL.length; i++) {
                    const activity = HSVL[i].activity;
                    const popularity = HSVL[i].popularity;
                    const address = HSVL[i].location;
                    const city = HSVL[i].city;
                    const city_id = HSVL[i].city_id;
                    const season = HSVL[i].season;
                    const li = document.createElement("li");
                    if (city_id === 11) {

                        li.innerHTML = `
            <h2>${activity}</h2>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p>   
                        `;
                        kbhkgUl.appendChild(li);
                    }
                    if (city_id === 7) {

                        li.innerHTML = `
            <h2>${activity}</h2>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p>   
                        `;
                        kbhkgUl.appendChild(li);
                    }
                    if (city_id === 4) {

                        li.innerHTML = `
            <h2>${activity}</h2>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p>   
                        `;
                        kbhkgUl.appendChild(li);
                    }
                }
            } catch (e) {

            }
        }

// Nordhavn

        function renderNordhavn(HSVL) {
            try {
                const nordhavnUl = document.querySelector("ul#nordhavnList");
                for (let i = 0; i < HSVL.length; i++) {
                    const activity = HSVL[i].activity;
                    const popularity = HSVL[i].popularity;
                    const address = HSVL[i].location;
                    const city = HSVL[i].city;
                    const city_id = HSVL[i].city_id;
                    const season = HSVL[i].season;
                    const li = document.createElement("li");
                    if (city_id === 9) {

                        li.innerHTML = `
            <h2>${activity}</h2>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p>   
                        `;
                        nordhavnUl.appendChild(li);
                    }
                }
            } catch (e) {

            }
        }

// Klampenborg

        function renderKlampenborg(HSVL) {
            try {
                const klampenborgUl = document.querySelector("ul#klampenborgList");
                for (let i = 0; i < HSVL.length; i++) {
                    const activity = HSVL[i].activity;
                    const popularity = HSVL[i].popularity;
                    const address = HSVL[i].location;
                    const city = HSVL[i].city;
                    const city_id = HSVL[i].city_id;
                    const season = HSVL[i].season;
                    const li = document.createElement("li");
                    if (city_id === 10) {

                        li.innerHTML = `
            <h2>${activity}</h2>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p>   
                        `;
                        klampenborgUl.appendChild(li);
                    }
                }
            } catch (e) {

            }
        }

// Searchbar filter function

function registrerInput(activities) {
    const btn = document.querySelector('button.filter');
    const inputElement = document.querySelector('input#userInput')
    inputElement.addEventListener('input', function () {
        const activityName = inputElement.value.toLowerCase()
        const filteredActivities = [];
        for (let i = 0; i < activities.length; i++) {
            if (activities[i].activity.toLowerCase().includes(activityName)) {
                filteredActivities.push(activities[i])
            }
            if (activities[i].city.toLowerCase().includes(activityName)) {
                filteredActivities.push(activities[i])
            }
        }
        renderActivities(filteredActivities)
    })
}


// Dropdown til at sortere
function sortDropDown() {
    document.getElementById("dropDownSort").classList.toggle("show");
}

function sortFunction() {
    const input = document.querySelector("#sortInput");
    const filter = input.value.toUpperCase();
    const dropDiv = document.querySelector("#dropDownSort");
    const dropFilters = dropDiv.getElementsByTagName("a");
    for (let i = 0; i < dropCities.length; i++) {
        inputValue = dropFilters[i].textContent || dropFilters[i].innerText;
        if (inputValue.toUpperCase().indexOf(filter) > -1) {
            dropFilters[i].style.display = "";
        } else {
            dropFilters[i].style.display = "none"
        }
    }
}



fetch('https://hsvl.onrender.com/mostPopularActivities')
    .then(response => response.json())
    .then(HSVL => {
        mostPopularActivities(HSVL);
    });


function mostPopularActivities(HSVL) {
    try {
            const activityUl = document.querySelector("ul.mostPopList");
            activityUl.innerHTML = "";
            for (let i = 0; i < HSVL.length; i++) {
                const activity = HSVL[i].activity;
                const popularity = HSVL[i].popularity;
                const address = HSVL[i].location;
                const city = HSVL[i].city;
                const season = HSVL[i].season;
                const locationNumber = HSVL[i].location_id;
                const li = document.createElement("li");
                li.innerHTML = `
            <h2>${activity}</h2>
            <hr>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p> 
            <hr>
            <p><span>Nummer:</span> ${locationNumber}</p>  
                        `;
                activityUl.appendChild(li);
            }
        }
        catch (e) {

    }
}


fetch('https://hsvl.onrender.com/leastPopularActivities')
    .then(response => response.json())
    .then(HSVL => {
        leastPopularActivities(HSVL);
    });

function leastPopularActivities(HSVL) {
    try {
        const activityUl = document.querySelector("ul.leastPopList");
        activityUl.innerHTML = "";
        for (let i = 0; i < HSVL.length; i++) {
            const activity = HSVL[i].activity;
            const popularity = HSVL[i].popularity;
            const address = HSVL[i].location;
            const city = HSVL[i].city;
            const season = HSVL[i].season;
            const locationNumber = HSVL[i].location_id;
            const li = document.createElement("li");
            li.innerHTML = `
            <h2>${activity}</h2>
            <hr>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p> 
            <hr>
            <p><span>Nummer:</span> ${locationNumber}</p>  
                        `;
            activityUl.appendChild(li);
        }
    }
    catch (e) {

    }
}

fetch('https://hsvl.onrender.com/spring')
    .then(response => response.json())
    .then(HSVL => {
        springList(HSVL);
    });

function springList(HSVL) {
    try {
        const activityUl = document.querySelector("ul.springList");
        activityUl.innerHTML = "";
        for (let i = 0; i < HSVL.length; i++) {
            const activity = HSVL[i].activity;
            const popularity = HSVL[i].popularity;
            const address = HSVL[i].location;
            const city = HSVL[i].city;
            const season = HSVL[i].season;
            const locationNumber = HSVL[i].location_id;
            const li = document.createElement("li");
            li.innerHTML = `
            <h2>${activity}</h2>
            <hr>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p> 
            <hr>
            <p><span>Nummer:</span> ${locationNumber}</p>  
                        `;
            activityUl.appendChild(li);
        }
    }
    catch (e) {

    }
}

fetch('https://hsvl.onrender.com/summer')
    .then(response => response.json())
    .then(HSVL => {
        summerList(HSVL);
    });

function summerList(HSVL) {
    try {
        const activityUl = document.querySelector("ul.summerList");
        activityUl.innerHTML = "";
        for (let i = 0; i < HSVL.length; i++) {
            const activity = HSVL[i].activity;
            const popularity = HSVL[i].popularity;
            const address = HSVL[i].location;
            const city = HSVL[i].city;
            const season = HSVL[i].season;
            const locationNumber = HSVL[i].location_id;
            const li = document.createElement("li");
            li.innerHTML = `
            <h2>${activity}</h2>
            <hr>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p> 
            <hr>
            <p><span>Nummer:</span> ${locationNumber}</p>  
                        `;
            activityUl.appendChild(li);
        }
    }
    catch (e) {

    }
}

fetch('https://hsvl.onrender.com/fall')
    .then(response => response.json())
    .then(HSVL => {
        fallList(HSVL);
    });

function fallList(HSVL) {
    try {
        const activityUl = document.querySelector("ul.fallList");
        activityUl.innerHTML = "";
        for (let i = 0; i < HSVL.length; i++) {
            const activity = HSVL[i].activity;
            const popularity = HSVL[i].popularity;
            const address = HSVL[i].location;
            const city = HSVL[i].city;
            const season = HSVL[i].season;
            const locationNumber = HSVL[i].location_id;
            const li = document.createElement("li");
            li.innerHTML = `
            <h2>${activity}</h2>
            <hr>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p> 
            <hr>
            <p><span>Nummer:</span> ${locationNumber}</p>  
                        `;
            activityUl.appendChild(li);
        }
    }
    catch (e) {

    }
}

fetch('https://hsvl.onrender.com/summer')
    .then(response => response.json())
    .then(HSVL => {
        winterList(HSVL);
    });

function winterList(HSVL) {
    try {
        const activityUl = document.querySelector("ul.winterList");
        activityUl.innerHTML = "";
        for (let i = 0; i < HSVL.length; i++) {
            const activity = HSVL[i].activity;
            const popularity = HSVL[i].popularity;
            const address = HSVL[i].location;
            const city = HSVL[i].city;
            const season = HSVL[i].season;
            const locationNumber = HSVL[i].location_id;
            const li = document.createElement("li");
            li.innerHTML = `
            <h2>${activity}</h2>
            <hr>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p> 
            <hr>
            <p><span>Nummer:</span> ${locationNumber}</p>  
                        `;
            activityUl.appendChild(li);
        }
    }
    catch (e) {

    }
}


