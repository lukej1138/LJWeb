document.addEventListener('DOMContentLoaded', function() {
    typeWrite()
});


async function typeWrite() {
    let i = 0;
    var element = document.getElementById("heroType");
    var text = element.innerHTML;
    element.innerHTML = "";
    element.classList.remove("hidden");
    if(!element) return;
    element.innerHTML = '<span id="cursor">_</span>'
    while(i < text.length){
        element.innerHTML = text.slice(0, i+1) + '<span id="cursor">_</span>';
        i++
        await pause(100);
    }
    blinkCursor()
}

function blinkCursor(){
    const cursor = document.getElementById("cursor");
    if(!cursor) return;
    setInterval(() => {cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden'},
    530);
}
function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
