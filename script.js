function playSound() {
  // lightsabers
  let lsStart = document.getElementById("lsStart");
  let lsPulse = document.getElementById("lsPulse");
  let lsStop = document.getElementById("lsStop");

  // darksaber
  let dsStart = document.getElementById("dsStart");
  let dsPulse = document.getElementById("dsPulse");
  let dsStop = document.getElementById("dsStop");

  let darkSaber = document.getElementById("darksaber");

  let box = document.getElementById("on-off");

  // Sound effects of lightsabers
  if (box.checked == true && !darkSaber.checked) {
    lsStart.play();
    setTimeout(console.log("Gello"), 10000);
    lsPulse.play();
  } else {
    lsPulse.pause();
    lsPulse.currentTime = 0;
    lsStop.play();
  }

  // Sound effects of darksabers
  if (box.checked == true && darkSaber.checked) {
    dsStart.play();
    dsPulse.play();
  } else {
    dsPulse.pause();
    dsPulse.currentTime = 0;
    dsStop.play();
  }
}
