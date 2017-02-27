

createjs.Sound.registerSound("/../FOA/Sounds/woodstep.ogg", 'StepSound' );
createjs.Sound.registerSound("/../FOA/Sounds/Penguin1.ogg", 'Penguin1' );
createjs.Sound.registerSound("/../FOA/Sounds/Penguin2.ogg", 'Penguin2' );

var stepspeed = 500;
var stepped = false;

var Footsteps = setInterval(function(){
if (canJump == true){
if (stepped == false){			
if (velocity.z > 20 || velocity.z < -20 || velocity.x > 20 || velocity.x < -20){
stepped = true;
setTimeout(function(){ createjs.Sound.play("StepSound" , {volume: fxvolume/2 }); stepped = false; }, stepspeed);	

}
}
}
					
}, 1);

var SoundLoop = setInterval(function(){
	
if (Sprint == true){
	stepspeed = 300;
	
}	
else{
	stepspeed = 400;
}

					
}, 1);