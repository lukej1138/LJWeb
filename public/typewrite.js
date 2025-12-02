document.addEventListener('DOMContentLoaded', function() {
    typeWrite()
});


async function typeWrite() {
    let i = 0;
    var element = document.getElementById("heroText");
    var text = [...new Intl.Segmenter().segment(element.innerHTML)].map(x => x.segment);
    console.log(text)
    element.innerHTML = "";
    element.classList.remove("hidden");
    if(!element) return;
    while(i < text.length){
        element.innerHTML += text[i];
        i++;
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
