document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".hidden");
    const observer = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.2});

    elements.forEach(element => observer.observe(element));
})