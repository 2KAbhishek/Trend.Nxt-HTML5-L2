function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

function showPosition(position) {
  localStorage.setItem("lat", position.coords.latitude);
  localStorage.setItem("lon", position.coords.longitude);
  document.getElementById("location").innerHTML =
    "Latitude : " +
    localStorage.getItem("lat") +
    "<br> Longitude : " +
    localStorage.getItem("lon");
}

function errorPosition() {
  document.getElementById("demo").innerHTML = "Error in fetching location.";
}
