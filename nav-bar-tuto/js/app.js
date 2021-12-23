const Navbtn = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

// Show SideBar
Navbtn.addEventListener('click', function (){
  const visibility = primaryNav.getAttribute("data-visible");

  
   if (visibility==="false") {
    primaryNav.setAttribute("data-visible", true)
    Navbtn.setAttribute("aria-expanded", true)
    
   }else if(visibility==='true'){
    primaryNav.setAttribute('data-visible', false)
    Navbtn.setAttribute("aria-expanded", false)

   };
  console.log(visibility);
});
