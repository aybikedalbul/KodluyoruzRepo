//Let's  find area of the circle

const process = require('process');

const arguments = process.argv.slice(2);

function areaCircle(r){
    let area = (Math.PI * (r * r)).toFixed(2);
    console.log(`The area of a circle with radius ${r} is ${area}`)
}


areaCircle(arguments[0] *1);