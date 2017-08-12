console.log('Loaded!');
var img=document.getElementById("dragon");

var leftmargin = 0;

function move(){
    leftmargin=leftmargin+2;
    img.style.marginLeft=leftmargin+'px';
    
}
img.onclick = function (){
    var interval = setInterval(move,50);
}