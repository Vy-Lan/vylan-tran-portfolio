//following custom cursor tutorial on https://dev.to/lensco825/how-to-make-a-custom-cursor-cursor-hover-effects-1ikg

var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', moveCursor)

function moveCursor(e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}

//To get all the selected elements


var divs = document.querySelectorAll('.work-project-img');

divs.forEach(div => {
  div.addEventListener('mouseenter', function() {
    cursor.classList.add('hover-cursor');
  });
  div.addEventListener('mouseleave', function() {
    cursor.classList.remove('hover-cursor');
  });
})