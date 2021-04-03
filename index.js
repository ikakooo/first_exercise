// $(document).ready(function () {
//     for (i = 0; i < 10; i++) {

//         $(".multiplication-table").append(
//             '<p>' + i + '</p>'
//         );
//     }
// })


var table = document.getElementById("myTable");
var temp = '';
var max = 10;

for (var y = 1; y <= max; y++) {
    var row = '<tr>';
    for (var x = 1; x <= max; x++) {
        row += '<td>' + (x * y).toFixed(0) + '</td>';
    }
    temp += row + '</tr>';
}

table.innerHTML = temp;


//// დავალება 2 

var shape = new Object();
shape = {
    type: "circle",
    getType: typeof type
}
console.log(shape)

// class Triangle {
//     constructor(a,b,c) {
//         var a=this.a;
//         var b = this.b;
//         var c =this.c;
//     }
//     ika() {
//         return shape;
//     }
// }
function Triangle(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c; 
  }

  Triangle.prototype = shape;
  var t = new Triangle(1,2,3);

  Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c;
  }
//// c
  for(var propName in t) {
    propValue = t[propName]

    console.log(propName,propValue);
}
