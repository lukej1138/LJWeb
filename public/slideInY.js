document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".hiddenY");
    const observer = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting) {
                entry.target.classList.add("visibleY");
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    let isFirst = true
    const delay = 1300
    elements.forEach(element => {
        if(isFirst){
            setTimeout(() => {
                observer.observe(element)}, delay);
            isFirst = false;
        }
        else{
            observer.observe(element);
        }
    });     
});