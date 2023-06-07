// To display the range value in the div on the controls pane


let inp_range = document.querySelector('input[type="range"]');
inp_range.addEventListener("change",changeInput);

let control_div = document.querySelector('.controls');
range_val = document.createElement('div');
control_div.appendChild(range_val);

value  = inp_range.value;
range_val.textContent = `Grid: ${value} x ${value}`;

makeGrid(value)



function changeInput(){
    value  = inp_range.value;
    range_val.textContent = `Grid: ${value} x ${value}`;
    makeGrid(value)

}

// Make Grid
grid = document.querySelector('.grid')

function makeGrid(val){
    for(let i=0;i<val;i++){
        d = document.createElement('div');
        
        d.style.display = 'flex';

        for(let j=0;j<val;j++){
            
            d1 = document.createElement('div')
            d1.style.flex=1;

            d.appendChild(d1)
            
        }
        d.style.flex=1;
        grid.appendChild(d)
    }
}

console.log(grid)









