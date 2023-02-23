const circleArea = (r) =>{
    let area = Math.PI * (r * r);
    console.log("Area of circle: " , area.toFixed(2));
}

const circleCircumference = (r) => {
    let circumference = 2 * Math.PI * r;
    console.log("Circumference of circle: " , circumference.toFixed(2));
}

module.exports = {
    circleArea,
    circleCircumference
}