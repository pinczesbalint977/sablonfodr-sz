document.addEventListener('DOMContentLoaded', function(){
  const openBooking = document.getElementById('openBooking');
  if(openBooking) openBooking.addEventListener('click', function(e){ e.preventDefault(); document.getElementById('booking').scrollIntoView({behavior:'smooth'}); });

});



document.body.classList.add('loading');


// Wait until EVERYTHING is fully loaded (images, fonts, scripts)
const waitFullLoad = setInterval(() => {
if (document.readyState === "complete") {
const overlay = document.getElementById('loading-overlay');
overlay.style.opacity = "0";
overlay.style.transition = "0.5s ease";
setTimeout(() => overlay.remove(), 500);
document.body.classList.remove('loading');
clearInterval(waitFullLoad);
}
}, 500);('loading');


// Cookie bar
document.addEventListener("DOMContentLoaded", () => {
const cookieBar = document.getElementById('cookie-bar');
const acceptBtn = document.getElementById('cookie-accept');


if (!localStorage.getItem('cookieAccepted')) {
cookieBar.classList.remove('hidden');
}


acceptBtn.addEventListener('click', () => {
localStorage.setItem('cookieAccepted', 'true');
cookieBar.classList.add('hidden');
});
});