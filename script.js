fetch('http://localhost:3000/activities')
    .then(response => response.json())
    .then(HSVL => {
        activities(HSVL);

    })

function activities(HSVL){
    const ul = document.querySelector("ul.activityList");
    for (let i = 0; i < HSVL.length; i++) {
        const activity = HSVL[i].activity;
        const popularity = HSVL[i].popularity
        console.log(activity)
        const li = document.createElement("li");
        li.innerHTML = `
            <h2>${activity}</h2>
            <p>Popularity: ${popularity}</p>         
                        `;
        ul.appendChild(li);
    }
}