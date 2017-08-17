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


document.getElementById("counter").onclick=function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange=function(){
    
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var counter = request.responseText;
                document.getElementById("value").innerHTML =counter.toString();              
            }
        }
            
    }
    
    request.open('GET','http://giridharprasad2897.imad.hasura-app.io/counter',true);
    request.send(null);
};

document.getElementById('btnid').onclick= function(){
    
    var name=document.getElementById('inbox').value;
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange=function(){
    
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var list = JSON.parse(request.responseText);
                
                var text='';
                    for(var i=0;i<list.length;i++)
                    {
                        text+='<li>'+list[i]+'</li>';
                        
                    }
                
                document.getElementById("lsit").innerHTML =text;              
            }
        }
            
    }
    
    request.open('GET','http://giridharprasad2897.imad.hasura-app.io/submitname?namw='+name,true);
    request.send(null);
    
    
};