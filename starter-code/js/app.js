const Navbtn = document.querySelector('.mobile-toggle');
const primNav = document.querySelector('.primary-navigation');

// Show SideBar
Navbtn.addEventListener('click', function (){
 const visibility = primNav.getAttribute('data-visible');

 if (visibility==='false') {
  primNav.setAttribute('data-visible', true)
  Navbtn.setAttribute('aria-expanded', true)
 }else if(visibility==='true'){
 primNav.setAttribute('data-visible', false)
  Navbtn.setAttribute('aria-expanded', false)
 }
}); 

