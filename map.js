fetch('https://hsvl.onrender.com/locations')
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
        L.marker([locationData[i].latitude, locationData[i].longitude]).addTo(map);
    }
}

