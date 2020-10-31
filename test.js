var yo = function(val, max, avg) {

    var k1, val1, k2, val2, val12, result;
    val = max * val;

    // set color
    k1 = 0.05;
    val1 = max / (1 + Math.exp(-k1 * (val - avg)));
    val1 = Math.floor(val1);
    val2 = max - val1;



    result = [val1, val2];

    return result;

}


for(var i = 0; i < 101; i++) {
    var temp = i / 100;
    var text = yo(temp, 250, 125);
    console.log(temp);
    console.log(text);
}
