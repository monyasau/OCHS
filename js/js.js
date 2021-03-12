  //welcome
// var i = 0;
// var txt = "Shaping learner who inspire";
// var speed = 50;
//   if (i < txt.length) {
//      document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
//   //welcome end
//   //header
//   function myFunction() {
//         var x = document.getElementById("myTopnav");
//         if (x.className === "topnav") {
//           x.className += " responsive";
//         } else {
//           x.className = "topnav";
//         }
//       }
//header ends

      //preloader

      function loader() {
        var preloader = document.getElementById("loading");
        //this one woheaderd go and tell the browser not to show the preloader
        preloader.style.display = "none";
      }
      //preloader ends

      //serviceworker
       // Register service worker to control making site work offline
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./js/sw.js").then(() => {
    console.log("Service Worker Registered");
  });
}
// Code to handle install prompt on desktop
let deferredPrompt;
const addBtn = document.querySelector(".add-button");
addBtn.style.display = "none";
window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "block";
  addBtn.addEventListener("click", () => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});
 //geolocation
var x = document.getElementById("demo");
function getLocation() {
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(showPosition, showError);
}
else {
  x.innerHTML = "Geolocation is not supported";
}
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.longitude;
}
function showError(error) {
switch (error.code) {
  case error.PERMISSION_DENIED:
   x.innerHTML = "user denied the location"
    break;

  default:
    break;
}  
}
const num = ["1", "2", "3", "4", "5"]
var d = nu