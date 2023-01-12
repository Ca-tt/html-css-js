let note = document.querySelector('.note');

note.onmousedown = (event) => {

    note.onmousemove = (event) => {
        moveElement(event.x, event.y)
    } 
    
    note.onmouseup = (event) => {
        note.onmousemove = null;
    }
}

function moveElement(x, y) {
    let newX = x - note.offsetWidth / 2 + 'px';
    let newY = y - note.offsetHeight / 2 + 'px';

    note.style.left = newX;
    note.style.top = newY;
}
