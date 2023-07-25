/* ------------------------------- MOBILE MANV ------------------------------ */
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile-nav");

mobileNavButton.addEventListener("click", function () {
  mobileNavIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

/* ---------------------------------- VIDEO --------------------------------- */
const videoButton = document.querySelector('#video-story-button');
const videoButtonIcon = document.querySelector('#video-story-button-icon');
const videoOverlay = document.querySelector('#video-story-overlay');
const videoFile = document.querySelector('#video-story');

videoButton.addEventListener('click', function(){

   function toggleOverlay(event){
      if (event.type === 'mouseleave'){
         videoOverlay.classList.add('hidden');
      } else {
         videoOverlay.classList.remove('hidden');
      }
   }

   if (videoFile.paused){
      videoFile.play(); 
      videoButtonIcon.src = "img/story/pause_icon.svg"

      videoOverlay.onmouseleave = toggleOverlay;
      videoOverlay.onmouseenter = toggleOverlay;

   } else {
      videoFile.pause();
      videoButtonIcon.src = "img/story/play-white.svg"
      videoOverlay.onmouseleave = null;
      videoOverlay.onmouseenter = null;
   }
});