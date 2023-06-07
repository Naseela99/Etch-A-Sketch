// To display the range value in the div on the controls pane


let inp_range = document.querySelector('input[type="range"]');
inp_range.addEventListener("change",changeInput);

let control_div = document.querySelector('.controls');
range_val = document.createElement('div');
control_div.appendChild(range_val);

value  = inp_range.value;
range_val.textContent = `Grid: ${value} x ${value}`;

let grid = document.querySelector('.grid')

let clicked = false;


makeGrid(value)



function changeInput(){
    value  = inp_range.value;
    range_val.textContent = `Grid: ${value} x ${value}`;
    makeGrid(value)

}



// Get color
let color = "#2d2c27"
let cur_btn = "Color"

let btns = document.querySelectorAll('.ctrl-btn')

let color_picker = document.querySelector('input[type="color"]');

color_picker.addEventListener("input",updatePickerColor);


color_picker.addEventListener("change",updatePickerColor);

function updatePickerColor(){
    color = color_picker.value
    clicked = false;

}


btns.forEach(function(item) {item.addEventListener('click',changeColor)   
});

btns.forEach(btn => btn.addEventListener('transitionend',removeTransition))

function removeTransition(e){

    e.target.classList.remove('transform')

}
function changeColor(e){

    e.target.classList.add('transform')

    let btn = (e.target.textContent)
    clicked = false;

    if(btn=='Eraser'){
        color = "white";
        cur_btn = 'Eraser'
    }

    else if(btn=='MultiColor'){
        color = getRandomColor();
        cur_btn = "MultiColor"
    }

    else if(btn==='Color'){
        

        color = color_picker.value
        cur_btn = "Color"
    }

    
}

function getRandomColor(){

    return '#' + (Math.random().toString(16) + "000000").substring(2,8)
        
}

// Make Grid

function makeGrid(val){

    while (grid.firstChild) {
        grid.firstChild.remove()
    }
    
    for(let i=0;i<val;i++){
        d = document.createElement('div');
        
        d.style.display = 'flex';


        for(let j=0;j<val;j++){
            
            d1 = document.createElement('div')
            d1.className = "grid-box"
            d1.style.flex=1;

            d.appendChild(d1)
            
        }
        d.style.flex=1;
        d.style.height = Math.round(700/val);

        grid.appendChild(d)
    }

    setListensers()
}


function setListensers(){

    let grid_boxes = document.querySelectorAll('.grid-box')
    
    grid_boxes.forEach(function(item) {item.addEventListener('click',start)   
    });

    grid_boxes.forEach(function(item) {item.addEventListener('mouseover',startPaint)   
    });

}

function start(){

    if(clicked){
        clicked = false;
    }
    else{

        clicked = true;
    }

    

}

function startPaint(e){
    if(clicked){
        paint(e);
    }
}

function paint(e){

    if (cur_btn=='MultiColor'){
        color = getRandomColor();
    }

    e.target.style.backgroundColor = color;

}


let clear = document.querySelector('.clr-btn')

console.log(clear)

clear.addEventListener("click",resetGrid);
clear.addEventListener('transitionend',removeTransition)


function resetGrid(e)
{
    let grid_boxes = document.querySelectorAll('.grid-box')

    grid_boxes.forEach(function(item) {item.style.backgroundColor='white';   
    });


e.target.classList.add('transform')
    

}
// console.log(grid_boxes)









