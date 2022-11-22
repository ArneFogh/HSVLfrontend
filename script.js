
// noinspection JSVoidFunctionReturnValueUsed

const activePage = window.location.pathname;


const navLinks = document.querySelectorAll("nav a").forEach(link => {
    if (!link.href.includes(`${activePage}`)) {
        return;
    }
    console.log(`${activePage}`);
    link.classList.add("active");
});
/*
fetch('http://localhost:3000/activities')
    .then(response => response.json())
    .then(userSearchInput => {
        searchBarFunction(userSearchInput);

    });

function searchBarFunction(userSearchInput) {
    // Declare variables
    let input, filter, ul, li, p, i, txtValue;
    input = document.querySelector('#userInput');
    filter = input.value.toUpperCase();
    ul = document.querySelector(".locationList");
    li = ul.querySelector('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        p = li[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

 */

fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(HSVL => {
        activities(HSVL);

    });


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




