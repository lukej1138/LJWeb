const projectSlider = document.querySelector('.projects');
const projectBtns = document.querySelectorAll('.project-btn');
const projects = [...document.querySelectorAll('.project')];
const indicators = [...document.querySelectorAll('.indicator')];

let isMoving;
let currentIndex = 1;

function showActiveIndicator(){
    indicators.forEach(ind => ind.classList.remove('active'));
    let activeIndicator;
    if(currentIndex === 0 || currentIndex === projects.length-2)
    {
            activeIndicator = indicators.length-1;
    }
    else if(currentIndex === projects.length -1 || currentIndex === 1){
        activeIndicator = 0;
    } else {
        activeIndicator = currentIndex -1;
    }
    indicators[activeIndicator].classList.add('active');
}


function moveSlider(){
    projectSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
    showActiveIndicator();
}


function handleProjectBtnClick(e){
    if(isMoving){return};
    isMoving=true;
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
    btn.addEventListener('click', handleProjectBtnClick);
})
  
indicators.forEach(ind => {
    ind.addEventListener('click', handleIndicatorClick);
})
  
projectSlider.addEventListener('transitionend', () => {
    isMoving = false;

    if (currentIndex === 0) {
        currentIndex = projects.length - 2;
        projectSlider.style.transition = 'none';
        moveSlider();

        // Restore transition after a frame
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                projectSlider.style.transition = 'transform 500ms ease';
            });
        });
    } 
    else if (currentIndex === projects.length - 1) {
        // Jump to the first real slide instantly
        currentIndex = 1;
        projectSlider.style.transition = 'none'; // Disable animation

        moveSlider(); // Move instantly

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                projectSlider.style.transition = 'transform 500ms ease';
            });
        });
    } else {
        projectSlider.style.transition = 'transform 500ms ease';
    }
});