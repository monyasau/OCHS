  function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
//header ends

      //preloader

      // function loader() {
      //   // $(document).ready(function(){
      //   // 	$('div#loading').removeAttr('id');
      //   // });
      //   // window.addEventListener('load', function(){
      //   // 	preloader.style.display = 'none';
      //   // 	})
      //serviceworker
       // Register service worker to control making site work offline
// // Code to handle install prompt on desktop
// let deferredPrompt;
// const addBtn = document.querySelector(".add-button");
// addBtn.style.display = "none";
// window.addEventListener("beforeinstallprompt", (e) => {
//   // Prevent Chrome 67 and earlier from automatically showing the prompt
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   // Update UI to notify the user they can add to home screen
//   addBtn.style.display = "block";
//   addBtn.addEventListener("click", () => {
//     // hide our user interface that shows our A2HS button
//     addBtn.style.display = "none";
//     // Show the prompt
//     deferredPrompt.prompt();
//     // Wait for the user to respond to the prompt
//     deferredPrompt.userChoice.then((choiceResult) => {
//       if (choiceResult.outcome === "accepted") {
//         console.log("User accepted the A2HS prompt");
//       } else {
//         console.log("User dismissed the A2HS prompt");
//       }
//       deferredPrompt = null;
//     });
//   });
// });
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js", { scope: "/" }).then(
      function (registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}  
// slideshow
      var slideIndex = 0;
      showSlides();
      function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if(slideIndex > slides.length) {
          slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4500); // Change image every 4 and half seconds
      };
      //slideshow end
      
      document.cookie = "username=new user; expires=sat, 18 Dec 2021 12:00:00 UTC; path=/";