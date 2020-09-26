// colors array
let colors=['blue','black','red','orange','green','pink'];

// get button
let button = document.getElementById("button");


// add Event Listener
button.addEventListener('click',function(){
    // randomize
    var randomColor = colors[Math.floor(Math.random()*colors.length)]

    // get container
    let container = document.getElementById('container');

    container.style.background = randomColor;
})