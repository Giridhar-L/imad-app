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

var counter=0
document.getElementById("counter").onclick=function(){
  counter = counter+1;
  document.getElementById("value").innerHTML =counter.toString();
};