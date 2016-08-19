var missionstate = 0;

var madepopup = false;
var startmbara = false;


var MbarImg;
var MbarD;

var MissionsLoop = setInterval(function(){
	
if (controlsEnabled == true && madepopup == false && missionstate != 0){
	madepopup = true;
	
MbarImg=document.createElement("img");
MbarImg.src = "images/MBar.png"
MbarImg.style.position = "absolute";
MbarImg.style.left = window.innerWidth / 2 - 150;
MbarImg.style.top = 0 - 104;
document.getElementById('HUD').appendChild(MbarImg);
	
MbarD = document.createElement('span');
MbarD.innerHTML = '';
MbarD.style.position = 'absolute';
MbarD.style.fontSize = 150 + '%';
MbarD.style.width = '235px';
MbarD.style.height = '80px';
MbarD.style.color = 'brown';

MbarD.style.left = window.innerWidth / 2 - 120;
MbarD.style.top = 0;

document.getElementById('HUD').appendChild(MbarD);	
	
setTimeout(function(){ startmbara = true; }, 1000);	
	
}
	
/////Update///			
if (MbarD){
MbarD.style.top = Number(MbarImg.style.top.replace('px','')) + 5;
MbarD.style.left = Number(MbarImg.style.left.replace('px','')) + 45;
MbarImg.style.left = window.innerWidth / 2 - 150;
}

if (Number(MbarImg.style.top.replace('px','')) < 0 && startmbara == true){
	
	MbarImg.style.top = Number(MbarImg.style.top.replace('px','')) + 0.4;
	
}	


if (missionstate == 1){
	
	MbarD.innerHTML = 'Mission: Explore the Town.';
	
}

if (missionstate == 2){
	
	MbarD.innerHTML = 'Mission: Get inside the Bar.';
	
}


if (missionstate == 3){
	
	MbarD.innerHTML = 'Mission: Talk to the Bartender';
	
}

if (missionstate == 4){
	
	MbarD.innerHTML = 'Mission: Survive the Barfight';
	
}

if (missionstate == 5){
	
	MbarD.innerHTML = 'Mission: Talk to the Bartender';
	
}
if (missionstate == 6){
	
	MbarD.innerHTML = 'Mission: Bring the stuff to Rasta';
	
}

			
			
}, 1);