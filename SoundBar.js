

createjs.Sound.registerSound("Sounds/woodstep.ogg", 'StepSound' );
createjs.Sound.registerSound("Sounds/DolphinBeats.mp3", 'Music' );
createjs.Sound.registerSound("Sounds/DolphinBusy.ogg", 'Busy' );
createjs.Sound.registerSound("Sounds/Hi!.ogg", 'Hi!' );
createjs.Sound.registerSound("Sounds/umf.ogg", 'Umf' );
createjs.Sound.registerSound("Sounds/ytmg.ogg", 'MyGirl' );
createjs.Sound.registerSound("Sounds/D1.ogg", 'D1' );
createjs.Sound.registerSound("Sounds/D2.ogg", 'D2' );
createjs.Sound.registerSound("Sounds/D3.ogg", 'D3' );
createjs.Sound.registerSound("Sounds/D4.ogg", 'D4' );
createjs.Sound.registerSound("Sounds/Hit.ogg", 'HitP' );


var stepspeed = 500;
var stepped = false;
var startedp = false;

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
var music = createjs.Sound.play("Music", {interrupt: createjs.Sound.INTERRUPT_NONE, loop: -1, volume: fxvolume/8});


function ToggleSound(yes){
	
	if (soundvol == true){
		soundvol = false;
		music.volume = 0;
	}
	else if (soundvol == false){
		soundvol = true;
		music.volume = fxvolume / 8;
	}
	
	if (yes == true){
		
		soundvol = 0;
		
	}
	
	
}


var SoundLoop = setInterval(function(){
	
if (Sprint == true){
	stepspeed = 300;
	
}	
else{
	stepspeed = 400;
}

if (controlsEnabled == true){

if (soundvol == true){	
music.volume = fxvolume/4;
}	
	
}
else if(controlsEnabled == false) {
	
music.volume = 0;	
	
}

if(controlsEnabled == true && startedp == false){
 startedp = false;
 music.play(); 
	
	
	
}


					
}, 1);