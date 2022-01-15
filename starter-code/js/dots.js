// select a dot by setting the current one to -1
const dotPanel = document.querySelector('[role = "dotlist"]'); 
const dot = dotPanel.querySelectorAll('[role="dot"]');


dotPanel.addEventListener('keydown', changeDotFocus);

dot.forEach((d) => 
  d.addEventListener('click', changeDot));




let dotFocus = 0;
function changeDotFocus(e){
  const keydownRight = 39
  const keydownLeft = 37
  if (e.keyCode === keydownRight || e.keyCode === keydownLeft ){
    dot[dotFocus].setAttribute('dotindex', -1);

    if(keydownRight === e.keyCode){
    dotFocus ++;

      if (dotFocus >= dot.length){
        dotFocus = 0;
      }
    }
    if(keydownLeft === e.keyCode){
      dotFocus --;
      
      if (dotFocus < 0){
        dotFocus = dot.length-1;
      }
    }
    dot[dotFocus].setAttribute('dotindex', 0);
    dot[dotFocus].focus();
  }

  // if(keydownRight === e.keyCode){
  //   dotFocus ++;

  //   if (dotFocus >= dot.length){
  //     dotFocus = 0;
  //   }
  // }
  // if(keydownLeft === e.keyCode){
  //   dotFocus --;
    
  //   if (dotFocus < 0){
  //     dotFocus = dot.length-1;
  //   }
  // }
  // dot[dotFocus].setAttribute('dotindex', 0);
  // dot[dotFocus].focus();
}


function changeDot(e){
  const targetDot = e.target;
  const targetArticle = targetDot.getAttribute('aria-controls');
  
  const targetImg = targetDot.getAttribute('aria-img');

  const mainContainer = dotPanel.parentNode;
  
  // hight light current dot
  dotPanel.querySelector('[aria-selected = "true"]')
    .setAttribute('aria-selected', false);
  targetDot.setAttribute('aria-selected', true);
  
  // show article according to dot that was clicked on

  mainContainer.querySelectorAll('[role = "dotPanel"]').forEach((i) => i.classList.add('hidden'));
  mainContainer.querySelector([`#${targetArticle}`]).classList.remove('hidden');

  // Change Img
  mainContainer.querySelectorAll('picture').forEach((i) => i.classList.add('hidden'));
  mainContainer.querySelector([`#${targetImg}`]).classList.remove('hidden');
  
}





// hide other ones
