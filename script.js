let viewer = document.querySelector('.viewer');
const buttons = document.querySelectorAll('.button');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');
const backBtn = document.querySelector('.back');

// Insert values to a viewer
const insertValues = (value) =>{
    // console.log(value);
    if(value != 'C' && value != "=" && value != "<"){
        viewer.value += value;
    }
}

const backward = () =>{
    let view = viewer.value;
    viewer.value = view.substring(0, view.length - 1);
}

const equal = () =>{
    viewer.value = eval(viewer.value)
}

const clear = () =>{
    viewer.value = '';
}

equalBtn.addEventListener('click', equal);
backBtn.addEventListener('click', backward);
clearBtn.addEventListener('click', clear)

buttons.forEach(button => button.addEventListener('click', function(){
    insertValues(button.value)
}));

