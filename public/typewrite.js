document.addEventListener('DOMContentLoaded', function() {
    typeWrite()
});


async function typeWrite() {
    let i = 0;
    var element = document.getElementById("heroText");
    var text = element.innerHTML;
    element.innerHTML = "";
    element.classList.remove("hidden");
    if(!element) return;
    while(i < text.length){
        if (text[i] == "&") {
            const semiColon = text.indexOf(";")
            if (semiColon !== -1){
                i = semiColon
            } else {
                i++
            }
        } else {
            i++
        }
        element.innerHTML = text.slice(0, i);
        await pause(100);
    }
    blinkCursor()
}

function blinkCursor(){
    const cursor = document.getElementById("cursor");
    if(!cursor) return;
    setInterval(() => {cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';},
    530);
}
function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
