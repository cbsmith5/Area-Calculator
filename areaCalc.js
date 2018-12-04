function calculateArea(myArea) {
    return (3.14) * (myArea*myArea);
}        
    var myRadius;
    var parsedMyRadius;
    myRadius = parseFloat(prompt("Please enter the radius in cm:"));

alert("A circle with a " + myRadius + " cm radius has an area of " 
      + calculateArea(myRadius).toFixed(1) + " square cm.");