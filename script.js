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
        const adress = HSVL[i].location
        console.log(activity)
        const li = document.createElement("li");
        li.innerHTML = `
            <h2>${activity}</h2>
            <p>Popularity: ${popularity}</p>  
            <p>Location: ${adress}</p>       
                        `;
        ul.appendChild(li);
    }
}