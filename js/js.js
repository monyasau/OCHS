  //welcome
var i = 0;
var txt = "Shaping learner who inspire";
var speed = 50;
  if (i < txt.length) {
     document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  //welcome end
  //header
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

      function loader() {
        var preloader = document.getElementById("loading");
        //this one woheaderd go and tell the browser not to show the preloader
        preloader.style.display = "none";
      }
      //preloader ends