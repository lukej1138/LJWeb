const projectsSlider = document.querySelector('.projects');
const projectBtns = document.querySelectorAll('.project-btn');
const projects = [...document.querySelectorAll('.project')];
const indicators = [...document.querySelectorAll('.indicator')];
let isMoving;
let currentIndex = 1;

function showActiveIndicator(){
  indicators.forEach(ind => ind.classList.remove('active'));
  let activeIndicator;
  if(currentIndex === 0 || currentIndex === projects.length - 2){
    activeIndicator = indicators.length - 1;
  } else if (currentIndex === projects.length - 1 || currentIndex === 1){
    activeIndicator = 0;
  } else {
    activeIndicator = currentIndex - 1;
  }
  indicators[activeIndicator].classList.add('active');
}

function moveSlider(){
  projectsSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
  showActiveIndicator();
};

function handleReviewBtnClick(e){
  if(isMoving){ return };
  isMoving = true;
  e.currentTarget.id === 'next'
    ? currentIndex++
    : currentIndex--;
  moveSlider();
}

function handleIndicatorClick(e){
  if(isMoving){ return };
  isMoving = true;
  currentIndex = indicators.indexOf(e.target) + 1;
  moveSlider();
}

// Event Listeners
projectBtns.forEach(btn => {
  btn.addEventListener('click', handleReviewBtnClick);
})

indicators.forEach(ind => {
  ind.addEventListener('click', handleIndicatorClick);
})

projectsSlider.addEventListener('transitionend', () => {
    if (currentIndex === 0) {
      setTimeout(() => {
        projectsSlider.style.transition = 'none'; // Remove animation
        currentIndex = projects.length - 2;
        moveSlider();
        
        setTimeout(() => {
          projectsSlider.style.transition = 'transform 500ms ease-in-out';
          isMoving = false;
        }, 50);
      }, 10);
      return;
    }
  
    if (currentIndex === projects.length - 1) {
      setTimeout(() => {
        projectsSlider.style.transition = 'none'; // Remove animation
        currentIndex = 1;
        moveSlider();
  
        setTimeout(() => {
          projectsSlider.style.transition = 'transform 500ms ease-in-out';
          isMoving = false;
        }, 50);
      }, 10);
      return;
    }
  
    isMoving = false;
  });
  