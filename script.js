const btnStart = document.getElementById('btnStart');
const write = document.getElementById('write');
const instructions = document.getElementById('instructions');
let start = false;

btnStart.addEventListener('click', e => {
    e.preventDefault();
    start = !start;
    if (start) {
        instructions.firstElementChild.style.display = 'none'

        write.style.display = 'block';
        write.focus();
        btnStart.textContent = 'Cancel'
        var text = document.createElement('p');
        text.textContent = 'lorem';
        instructions.appendChild(text);
    } else {
        instructions.firstElementChild.style.display = 'block'
        instructions.removeChild(instructions.lastElementChild);

        write.style.display = 'none';
        btnStart.textContent = 'Start'
    }
});