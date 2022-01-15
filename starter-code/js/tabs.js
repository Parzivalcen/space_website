const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');


tabList.addEventListener('keydown', changeTabFocus);
tabs.forEach((tab) => {
  tab.addEventListener('click', changeTabPanel);

});


let tabFocus = 0;
function changeTabFocus(e){
  const keydownLeft = 37;
  const keydownRight = 39;
 // Change tab index of current tab to -1
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight){
    tabs[tabFocus].setAttribute('tabindex', -1);

    if (e.keyCode === keydownRight){
    tabFocus ++;
      if(tabFocus >= tabs.length){
        tabFocus = 0;
      
      }
    }

    // if the left key is pushed, move to the next tab on the left
    if (e.keyCode === keydownLeft){
    tabFocus --;
      if(tabFocus < 0){
        tabFocus = tabs.length - 1;
      }
    }

    tabs[tabFocus].setAttribute('tabindex', 0);
    tabs[tabFocus].focus();
  }
  
}

// Change the article in tab pannel
function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute('aria-controls');

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  const targetImg = targetTab.getAttribute('aria-img')


  hideContent(mainContainer, '[role="tabPanel"]')
  mainContainer.querySelector([`#${targetPanel}`]).classList.remove('hidden');

  // Underline Indicators (destination)
  tabContainer.querySelector('[aria-selected="true"]')
    .setAttribute('aria-selected', false);
  targetTab.setAttribute('aria-selected', true);
  // tabContainer.querySelectorAll('[role="tab"]')
  //   .forEach((item) => item.setAttribute('aria-selected', false));
  // targetTab.setAttribute('aria-selected', true);

// Change destination picture
  hideContent(mainContainer, 'picture')
  
  mainContainer.querySelector([`#${targetImg}`]).classList.remove('hidden');

  
}

function hideContent(parent, content){
  parent.querySelectorAll(content)
    .forEach((item) => item.classList.add('hidden'));
  
}

