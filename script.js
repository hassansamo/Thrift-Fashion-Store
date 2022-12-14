// Ticker

document.getElementById("date-time").innerHTML = Date();

let x = document.getElementById("location");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
  x.innerHTML = "Geolocation is not supported by this browser.";
}

function showPosition(position) {
  x.innerText =
    "Latitude: " +
    position.coords.latitude +
    " & Longitude: " +
    position.coords.longitude;
  console.log("date");
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}

// Page Visitor Count

let countE1 = document.getElementById("count");
countvisits();

function countvisits() {
  fetch("https://api.countapi.xyz/update/thrift-fashion-store/store/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      countE1.innerHTML = res.value;
    });
}
