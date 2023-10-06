const body = document.querySelector('body')
const grid_container = document.createElement('div');
grid_container.classList.add('grid-container');

body.appendChild(grid_container);

//Using for loop to create 16 by 16 grid
for (let i=0; i<16; i++){
    for (let j=0; j<16; j++){
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











