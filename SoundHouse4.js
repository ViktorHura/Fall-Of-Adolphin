

createjs.Sound.registerSound("Sounds/woodstep.ogg", 'StepSound' );
createjs.Sound.registerSound("Sounds/Rasta1.ogg", 'R1' );
createjs.Sound.registerSound("Sounds/Rasta2.ogg", 'R2' );
createjs.Sound.registerSound("Sounds/Rasta3.ogg", 'R3' );
createjs.Sound.registerSound("Sounds/Rasta4.ogg", 'R4' );
createjs.Sound.registerSound("Sounds/R5.ogg", 'R5' );


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