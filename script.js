document.addEventListener('DOMContentLoaded', function(){
  const openBooking = document.getElementById('openBooking');
  if(openBooking) openBooking.addEventListener('click', function(e){ e.preventDefault(); document.getElementById('booking').scrollIntoView({behavior:'smooth'}); });

});




