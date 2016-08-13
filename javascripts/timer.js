// Define global variables
var id;
var width;

// Show time progress
function move() {
  var elem = document.getElementById("myBar");
  width = 1;
  id = setInterval(frame, 300);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      alert("De tijd is op!");
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

