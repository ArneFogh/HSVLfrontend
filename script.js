fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(function (HSVL) {
        renderHSVL(HSVL)
    })

function renderHSVL(HSVL){
    console.log(HSVL)
    const ul = document.querySelector("ul.HSVList");
    console.log(ul);
    for (let i = 0; i < HSVL.length; i++) {
        const places = HSVL[i];
        console.log(places)
        const li = document.createElement("li");
        li.innerHTML = "hejheje"
        ul.appendChild(li)

    }
}