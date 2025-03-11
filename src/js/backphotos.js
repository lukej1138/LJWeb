document.addEventListener("DOMContentLoaded", test)

async function test() {
    const elements = document.querySelectorAll(".hiddenX");
    const observer = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting) {
                entry.target.classList.remove("hiddenX");
                entry.target.classList.add("visibleX");
                observer.unobserve(entry.target);
            }
        }), {threshold: 0.2}
    });
    let delay = 0;
    let i = 0
    const staggerDelay = 700; // Adjust the delay (milliseconds) for the stagger effect

    elements.forEach(element => {
        if(i < 2){
            setTimeout(() => {
                observer.observe(element);
            }, delay);
            delay += staggerDelay;
            i++;
        }
        else{
            observer.observe(element);
        }
    });
}