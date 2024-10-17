function calculateArea(width, height) {
    if(width < 0 || height < 0){
        console.log("Negative integers are not valid.");
    }
    else{
    area = width * height;
    return area;
    }
}


console.log("Area of the rectangle: ", calculateArea(10, 5)); 