fetch('https://hsvl.onrender.com/data')
    .then(response => response.json())
    .then(locationData =>{
        locationsOnMap(locationData);

    })

function locationsOnMap(locationData){
    const map = L.map("map").setView([55.72, 12.56], 10.5);

    const tiles = L.tileLayer("https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=89TnfA8v1mRlkatNruN7", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    for (let i = 0; i < locationData.length; i++) {
        const activity = locationData[i].activity;
        const popularity = locationData[i].popularity;
        const address = locationData[i].location;
        const city = locationData[i].city;
        const season = locationData[i].season;

        L.marker([locationData[i].latitude, locationData[i].longitude]).addTo(map).bindPopup(`<h2>${activity}</h2>
        <hr>
            <p><span>Popularitet:</span> ${popularity}</p>
            <p><span>Adresse:</span> ${address}</p>
            <p><span>By:</span> ${city}</p>
            <p><span>Årstid:</span> ${season}</p>`);

    }
    mymarker = L.marker;

    map.addLayer(mymarker);
    mymarker.bindPopup('<p>You are here ' + username + '</p>').openPopup();

}

