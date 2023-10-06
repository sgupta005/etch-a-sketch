const body = document.querySelector('body')
const grid_container = document.createElement('div');
const size_div = document.createElement('div');
const size_input = document.createElement('input');
const size_value = document.createElement('h1');

grid_container.classList.add('grid-container');
size_div.classList.add('size-div');
size_input.setAttribute('id', 'size-input');
size_value.classList.add('size-value');

size_input.type = 'range';
size_input.min = '1';
size_input.max = '64';
size_value.textContent = size_input.value;

size_div.append(size_input, size_value);

body.appendChild(grid_container);
body.appendChild(size_div);

let rows = 16;
let columns = 16;
for (let i=0; i<rows; i++){
    for (let j=0; j<columns; j++){
        const grid_item = document.createElement('div');
        grid_item.classList.add('grid-item'); 
        grid_container.appendChild(grid_item);
    }
}

const grid_items = document.querySelectorAll('.grid-item');
//Looping through each grid item to change it's color when hovered
for (let grid_item of grid_items){
    grid_item.addEventListener('mouseenter', ()=>{
        grid_item.classList.add('hover'); 
    })
    grid_item.addEventListener('mouseleave', ()=>{
        console.log('Mouse leave');
        grid_item.classList.remove('hover'); 
    })
}











