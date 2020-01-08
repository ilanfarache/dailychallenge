document.getElementsByTagName("body")[0];

let ilan = document.getElementById("cube");

let colors = ["red","yellow","green","coral","gray","blue"]


let count = 0;

ilan.addEventListener("click", function() {
  
  cube.style.backgroundColor = colors[count];
  

  if( colors[count] == colors[length-1]){count = 0};

  var box = document.createElement("div");
  box.style.backgroundColor = colors[count];
  box.style.left = 300 + "px";
  box.innerHTML = "my color is " + colors[count];
    count++;
  box.setAttribute('class','box');
  box.setAttribute("draggable" , "true");
  box.addEventListener("dragend",function(e){
		deplacement(this,e);
	});
  document.body.append(box);


});



function deplacement(box,e) {
	let _x = e.clientX;
	let _y = e.clientY;
    console.log(box);
    box.style.left = _x + "px";
    box.style.top = _y + "px";
}

