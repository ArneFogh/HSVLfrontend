
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
        renderNorrebro(HSVL);
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
            const li = document.createElement("li");
            li.innerHTML = `
            <h2>${activity}</h2>
            <p><span>Popularitet:</span> ${popularity}</p>  
            <p><span>Adresse:</span> ${address}</p> 
            <p><span>By:</span> ${city}</p>   
            <p><span>Årstid:</span> ${season}</p>   
                        `;
            activityUl.appendChild(li);
        }
    } catch (e) {

    }
}

fetch('https://hsvl.onrender.com/mostPopulare')
    .then(response => response.json())
    .then(mostPopulare => {
        populareActivities(mostPopulare);
    });

function populareActivities(mostPopulare){
    try {
        const popularUl = document.querySelector("ul.topPopulare");
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


//NØRREBRO

function renderNorrebro(HSVL){
    try {
        const norrebroUL = document.querySelector("ul#norrebroList");
        console.log(norrebroUL)
        for (let i = 0; i < HSVL.length; i++) {
            const activity = HSVL[i].activity;
            const popularity = HSVL[i].popularity;
            const address = HSVL[i].location;
            const city = HSVL[i].city;
            const city_id = HSVL[i].city_id;
            const season = HSVL[i].season;
            const li = document.createElement("li");
            if (city_id === 1){

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



function registrerInput(activities){
    //const btn = document.querySelector('button.filter');
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




/*
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
