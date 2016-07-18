
var HitSound = 'HitSound'
createjs.Sound.registerSound("Sounds/Step.ogg", HitSound );
createjs.Sound.registerSound("Sounds/DolphinBusy.ogg", 'Busy' );
createjs.Sound.registerSound("Sounds/DolphinNP.ogg", 'NoPass' );
createjs.Sound.registerSound("Sounds/Shot.ogg", 'Shot' );
createjs.Sound.registerSound("Sounds/Hit.ogg", 'HitP' );

var stepspeed = 500;
var stepped = false;

var Footsteps = setInterval(function(){
if (canJump == true){
if (stepped == false){			
if (velocity.z > 20 || velocity.z < -20 || velocity.x > 20 || velocity.x < -20){
stepped = true;
setTimeout(function(){ createjs.Sound.play("HitSound" , {volume: fxvolume/10 }); stepped = false; }, stepspeed);	

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