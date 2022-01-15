// change focus if directional keys are pressed down]
const numlist = document.querySelector('[role = "numlist"]');
const Numbers = document.querySelectorAll('[role = "button"]');

numlist.addEventListener('keydown', changeNumber);
// We have to add the function for each element, I was trying to added to a list
Numbers.forEach((n) => n.addEventListener('click', showArt) );


let focus = 0;
function changeNumber (e){
 const keydownRight = 39; 
 const keydownLeft = 37; 
 if (e.keyCode === keydownLeft || e.keyCode ===keydownRight){
  Numbers[focus].setAttribute('numindex', -1);


  if (e.keyCode === keydownRight){
   focus ++;
   
  }
  if (e.keyCode === keydownLeft){
   focus --;
   
  }
  // looping
  if (focus < 0){
    focus = 2;
  }
  if (focus >= Numbers.length){
    focus = 0;
  }
  
  Numbers[focus].setAttribute('numindex', 0)
  Numbers[focus].focus();
 }
//  Change aria selected
// Numbers[focus].setAttribute('aria-selected', true);
}

function showArt(e){
  const numTarget = e.target;
  const mainContainer = numlist.parentNode;
  const artTarget = numTarget.getAttribute('aria-controls');
  const imgTarget = numTarget.getAttribute('aria-img');
// Active Numbers
  numlist.querySelector('[aria-selected = "true"]')
  .setAttribute('aria-selected', false);
  numTarget.setAttribute('aria-selected', true);

  // hide content art
  mainContainer.querySelectorAll('[role = "numPanel"]')
  .forEach((e) => e.classList.add('hidden'));
  
  // show content
  mainContainer.querySelector(`#${artTarget}`)
  .classList.remove('hidden');

  // hide img
  mainContainer.querySelectorAll('[role = "imgPanel"]')
  .forEach((e) => e.classList.add('hidden'));

  console.log(mainContainer.querySelector([`#${imgTarget}`]));
  
  mainContainer.querySelector([`#${imgTarget}`])
  .classList.remove('hidden');
}
  
