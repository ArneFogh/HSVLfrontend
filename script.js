fetch('http://localhost:3000/activities')
    .then(response => response.json())
    .then(HSVL => {
        activities(HSVL);

    })

function activities(HSVL){
    const ul = document.querySelector("ul.activityList");
    for (let i = 0; i < HSVL.length; i++) {
        const activity = HSVL[i].activity;
        console.log(activity)
        const li = document.createElement("li");
        li.innerHTML = `<p>${activity}</p>`;
        ul.appendChild(li);
    }
}