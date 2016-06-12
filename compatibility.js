
	
		 
 
var i = document;

				
$(document).on('keydown',function(evt) {
    if (evt.keyCode == 27) {
       document.exitPointerLock(); 
	   
    }
	if (evt.keyCode == 116) {
       location.reload();
    }
	if (evt.keyCode == 84) {
     if (typeof(ep) != "undefined"){
		 if(ep == true){ep = false;}
		 else if(ep == false){ep = true;}
	 }
	console.log('epilepsy disabled');

    }
	

});

