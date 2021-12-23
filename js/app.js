const Navbtn = document.querySelector('.mobile-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const showMars = document.querySelector('.tab-mars');
const showMoon = document.querySelector('tab.moon');
const destMars = document.querySelector('.hero-mars');
const destMoon = document.querySelector('.hero-moon');
// Show SideBar

Navbtn.addEventListener('click', function (){
 const visibility = primaryNav.getAttribute('data-visible');
 if (visibility==='false') {
  primaryNav.setAttribute('data-visible', true);
  Navbtn.setAttribute('aria-expanded', true);
 } else if(visibility==='true'){
  primaryNav.setAttribute('data-visible', false);
  Navbtn.setAttribute('aria-expanded', false);
 }
});
// Tabs
// Show mars tab
showMars.addEventListener('click', function(){
  destMars.classList.add('show-mars');
  destMoon.classList.add('hide-moon');
});


