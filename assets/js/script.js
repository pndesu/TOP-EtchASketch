const container = document.querySelector('.container');
for (let i = 0; i < 16; i++){
    let divRow = document.createElement('div');
    divRow.style.display = 'flex';
    for (let j = 0; j < 16; j++){
        let div = document.createElement('div');
        div.classList.add('gridBlock');
        div.setAttribute('style', 'height: 39px; width: 39px; border: solid black 1px;');
        divRow.appendChild(div);
        // div.addEventListener('mousedown', changeColor);
        div.addEventListener('mouseover', changeColor);
    }
    container.appendChild(divRow);
}
let mousedown = false;
document.body.onmousedown = () => (mousedown = true);
document.body.onmouseup = () => (mousedown = false);
function changeColor(e){
    if (e.type == 'mouseover' && mousedown){
        e.target.classList.add('drawed');
    }
}

