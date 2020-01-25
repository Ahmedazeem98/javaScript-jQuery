window.addEventListener("load", function(e){

    var load = e.type + " / " + e.target + " / " + new Date();
    var LOAD = new setInteractions("load",load);
    LOAD.x2();

     setInterval(function(){
        window.localStorage.clear();
     }, 5000);
  });

  window.addEventListener("unload", function(e){
	  
    var unload = e.type + " / " + e.target + " / " + new Date();
    var UNLOAD = new setInteractions("unload",unload);
    UNLOAD.x2();


  });


var generate = document.getElementById('generate');

generate.addEventListener('click',function(e){
	  
        var generate = e.type + " / " + e.target + " / " + new Date();
        var GENERATE = new setInteractions("generateChars",generate);
        GENERATE.x2();

    getRandom();

});

function getRandom(){

    var chars = 'abcdefghijklmnopqrstuvwxyz';  var letters = '';
    var numberOfLetters = document.getElementById('number');
    numberOfLetters = parseInt(numberOfLetters.value);
    for ( var i = 0; i < numberOfLetters; i++ ) {
        var random = Math.floor(Math.random()*26);
        var check = chars[random]; 
        if(letters.length!=0  &&  letters.indexOf(check) != -1){
            numberOfLetters++;
            continue;
        }
        letters+=chars[random];	   
     }
     var buttons = document.getElementById('buttons');
     buttons.innerHTML='';
     for(var i=0; i < letters.length; i++){
         
         var new_btn = document.createElement('input');
         new_btn.setAttribute('type', 'submit'); 
         new_btn.setAttribute('value', letters[i]);
         new_btn.setAttribute('id', letters[i]);
         new_btn.setAttribute('width',"10px");
         new_btn.setAttribute('height',"10px");
         buttons.appendChild(new_btn);
         new_btn.addEventListener('click',function(e){

    
            var charbtn = e.type + " / " + e.target + " / " + new Date();
            var CHARBTN = new setInteractions("charBTN",charbtn);
            CHARBTN.x2();
     
            var letter_img = document.createElement('img');
            document.getElementById('main').innerHTML='<br>';
            letter_img.setAttribute('src','images/'+e.target.value+'.jpg');
            letter_img.setAttribute('style',"width:350px; height:350x;");
            document.getElementById('main').appendChild(letter_img);
            
        });
     }
    }
    
    function setInteractions(x1,x2)
    {
        "use strict";
        this.x1=x1;
        this.x2 = function(){
            var res = localStorage.getItem(x1);
            if(res==null)
            {
                localStorage.setItem(x1,x2);
            } else {
                localStorage.setItem(x1,res + x2)
            }
    }
}
