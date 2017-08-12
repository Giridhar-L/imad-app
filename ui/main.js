console.log('Loaded!');
var img=document.getElementById("dragon");

var leftmargin = 0;

function move(){
    leftmargin+=1;
    img.style.marginleft=leftmargin+'px';
    
}
img.onclick = function (){
    var interval = setInterval(move,50);
}