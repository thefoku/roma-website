let addHours = document.getElementById("hours-dd");
let addMinutes = document.getElementById("minutes-dd");
let addSeconds = document.getElementById("seconds-dd");
let hoursArray = [];
let minSecArray = []


function addingArray() {
for (let i = 0; i < 61; i++){
minSecArray.push(`${i}`)
}
for (let i = 0; i < 25; i++){
hoursArray.push(`${i}`)
}


}

function addingOptions() {
for(let i = 0; i < hoursArray.length; i++) {
    let opt = hoursArray[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    addHours.appendChild(el);
}
for(let i = 0; i < minSecArray.length; i++) {
    let opt = minSecArray[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    addMinutes.appendChild(el);
}
for(let i = 0; i < minSecArray.length; i++) {
    let opt = minSecArray[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    addSeconds.appendChild(el);
}
}

addingArray()
addingOptions()
