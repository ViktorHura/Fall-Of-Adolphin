

createjs.Sound.registerSound("Sounds/StepStone.ogg", 'StepSoundStone' );
createjs.Sound.registerSound("Sounds/woodstep.ogg", 'StepSoundMetal' );



var stepspeed = 500;
var stepped = false;

var Footsteps = setInterval(function(){
if (canJump == true){
if (stepped == false){			
if (velocity.z > 20 || velocity.z < -20 || velocity.x > 20 || velocity.x < -20){
	
if (surface == 'stone'){	
	
	
stepped = true;
setTimeout(function(){ createjs.Sound.play("StepSoundStone" , {volume: fxvolume/2 }); stepped = false; }, stepspeed);	


}
else if (surface == 'metal'){
	
stepped = true;
setTimeout(function(){ createjs.Sound.play("StepSoundMetal" , {volume: fxvolume/2 }); stepped = false; }, stepspeed);		
	
}



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