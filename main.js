const body = document.querySelector('body')

const size_div = document.createElement('div');
const size_input = document.createElement('input');
const size_value = document.createElement('h1');

size_div.classList.add('size-div');
size_input.setAttribute('id', 'size-input');
size_value.classList.add('size-value');

size_input.type = 'range';
size_input.value = '16';
size_input.min = '1';
size_input.max = '64';
size_value.textContent = size_input.value;

size_div.append(size_input, size_value);
body.appendChild(size_div);

let rows = 16;
let columns = 16;
function createGrid(rows, columns){
    console.log('creating new grid');
    const grid_container = document.getElementById('grid-container');
    grid_container.innerHTML = '';
    console.log(grid_container.childNodes)
    for (let i=0; i<rows; i++){
        for (let j=0; j<columns; j++){
            const grid_item = document.createElement('div');
            grid_item.style.flexBasis = `${100 / rows}%`;
            grid_item.style.paddingBottom = `${100/columns}%`;
            grid_item.classList.add('grid-item'); 
            grid_container.appendChild(grid_item);
        }
    }
    
    body.appendChild(grid_container);
    colorChangeOnMouseHover();
}

createGrid(rows,columns)

function colorChangeOnMouseHover(){
    const grid_items = document.querySelectorAll('.grid-item');
    for (let grid_item of grid_items){
        grid_item.addEventListener('mouseenter', ()=>{
            grid_item.classList.add('hover'); 
        })
        // grid_item.addEventListener('mouseleave', ()=>{
        //     console.log('Mouse leave');
        //     grid_item.classList.remove('hover'); 
        // })
    }

}

//Change number of rows and columns in grid based on input slider
size_input.addEventListener('input', ()=>{
    rows = parseInt(size_input.value);
    columns = parseInt(size_input.value);

    createGrid(rows, columns);
    size_value.textContent = size_input.value;
    
})














