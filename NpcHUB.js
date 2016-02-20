
var agro;
 var canattack;
var geometry1NPC = new THREE.PlaneGeometry( 30, 60, 1, 1 );
var geometry2NPC = new THREE.PlaneGeometry( 30, 60, 1, 1 );
			
			geometry2NPC.applyMatrix( new THREE.Matrix4().makeRotationY( Math.PI ) );
			
			var textureFrontNPC = new THREE.ImageUtils.loadTexture('images/Dolphin.png' );      
            var textureBackNPC = new THREE.ImageUtils.loadTexture('images/DolphinBack.png' );

                // material
             var material1NPC = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureBackNPC ,depthWrite: false} );
			 material1NPC.transparent = true;
             var material2NPC = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureFrontNPC ,depthWrite: false} );
			 material2NPC.transparent = true;
			 
			 // VARIABLES
			 var rotObj1;
			 
			 var npc;
			 var mesh1;
			 var mesh2;
			 
			 var npc2;
			 var mesh3;
			 var mesh4;
			 
			 var npc3;
			 var mesh5;
			 var mesh6;
			 
			 var npc4;
			 var mesh7;
			 var mesh8;
			 
			  var npc5;
			 var mesh9;
			 var mesh10;
			 
			 var npc6;
			 var mesh11;
			 var mesh12;
			 
			 var npc7;
			 var mesh13;
			 var mesh14;
			 
///////MAKE NPC//////////
function createMarchingNpc (){

             npc = new THREE.Object3D();
			
             scene.add( npc );

                // mesh
             mesh1 = new THREE.Mesh( geometry1NPC, material1NPC );
            npc.add( mesh1 );
             mesh2 = new THREE.Mesh( geometry2NPC, material2NPC );
            npc.add( mesh2 );
			npc.position.y = 33;
			npc.position.z = 200;
			npc.position.x = -100;
			
			 objects.push( mesh1 );
			 objects.push( mesh2 );
			 
			 

			 
			 mesh1.name = 'NPC1';
			 mesh2.name = 'NPC1.2';
			

}

function createMarchingNpc2 (){

             npc2 = new THREE.Object3D();
			
             scene.add( npc2 );

                // mesh
             mesh3 = new THREE.Mesh( geometry1NPC, material1NPC );
            npc2.add( mesh3 );
             mesh4 = new THREE.Mesh( geometry2NPC, material2NPC );
            npc2.add( mesh4 );
			npc2.position.y = 33;
			npc2.position.z = 200;
			npc2.position.x = 100;
			
			 objects.push( mesh3 );
			 objects.push( mesh4 );
			 
			 

			 
			 mesh3.name = 'NPC2';
			 mesh4.name = 'NPC2.2';

}

function createNpc3 (){

             npc3 = new THREE.Object3D();
			
             scene.add( npc3 );

                // mesh
             mesh5 = new THREE.Mesh( geometry1NPC, material1NPC );
            npc3.add( mesh5 );
             mesh6 = new THREE.Mesh( geometry2NPC, material2NPC );
            npc3.add( mesh6);
			npc3.position.y = 33;
			npc3.position.z = 1075;
			npc3.position.x = 100;
			
			 objects.push( mesh5 );
			 objects.push( mesh6 );
			 
			 

			 
			 mesh5.name = 'NPC3';
			 mesh6.name = 'NPC3.2';

}
function createNpc4 (){

             npc4 = new THREE.Object3D();
			
             scene.add( npc4 );

                // mesh
             mesh7 = new THREE.Mesh( geometry1NPC, material1NPC );
            npc4.add( mesh7 );
             mesh8 = new THREE.Mesh( geometry2NPC, material2NPC );
            npc4.add( mesh8);
			npc4.position.y = 33;
			npc4.position.z = 1075;
			npc4.position.x = -100;
			
			 objects.push( mesh7 );
			 objects.push( mesh8 );
			 
			 

			 
			 mesh7.name = 'NPC4';
			 mesh8.name = 'NPC4.2';

}

function createNpc5 (){

             npc5 = new THREE.Object3D();
			
             scene.add( npc5 );

                // mesh
             mesh9 = new THREE.Mesh( geometry1NPC, material1NPC );
            npc5.add( mesh9 );
             mesh10 = new THREE.Mesh( geometry2NPC, material2NPC );
            npc5.add( mesh10);
			npc5.position.y = 33;
			npc5.position.z = -725;
			npc5.position.x = 100;
			
			 objects.push( mesh9 );
			 objects.push( mesh10 );
			 
			 npc5.rotation.y = Math.PI;

			 
			 mesh9.name = 'NPC5';
			 mesh10.name = 'NPC5.2';

}
function createNpc6 (){

             npc6 = new THREE.Object3D();
			
             scene.add( npc6 );

                // mesh
             mesh11 = new THREE.Mesh( geometry1NPC, material1NPC );
            npc6.add( mesh11 );
             mesh12 = new THREE.Mesh( geometry2NPC, material2NPC );
            npc6.add( mesh12);
			npc6.position.y = 33;
			npc6.position.z = -725;
			npc6.position.x = -100;
			
			 objects.push( mesh11 );
			 objects.push( mesh12 );
			 
			npc6.rotation.y = Math.PI; 

			 
			 mesh11.name = 'NPC6';
			 mesh12.name = 'NPC6.2';

}

function createNpc7 (){

             npc7 = new THREE.Object3D();
			
             scene.add( npc7 );

                // mesh
             mesh13 = new THREE.Mesh( geometry1NPC, material1NPC );
            npc7.add( mesh13 );
             mesh14 = new THREE.Mesh( geometry2NPC, material2NPC );
            npc7.add( mesh14);
			npc7.position.y = 33;
			npc7.position.z = -13;
			npc7.position.x = -785;
			
			 objects.push( mesh13 );
			 objects.push( mesh14 );
			 
			npc7.rotation.y = Math.PI / 2 + 3.14; 

			 
			 mesh13.name = 'NPC7';
			 mesh14.name = 'NPC7.2';

}





createMarchingNpc();
createMarchingNpc2();
createNpc3();
createNpc4();
createNpc5();
createNpc6();
createNpc7();





var left = false;
var left2 = true;

var canmarch = true;



var NPCMarchingLoop = setInterval(function(){
		
		if (canmarch == true){
		//Marching
		
		if (npc.position.z < 1000 && left == false ){
       	npc.rotation.y = Math.PI ;		
		npc.position.z += 2.5;	
			
		}
		
		else if ( npc.position.z > 999){
			npc.rotation.y = 0;
			left = true;
		}
		
		if (npc.position.z > -750 && left == true ){
       	npc.rotation.y = 0;		
		npc.position.z -= 2.5;	
			
		}
		else if ( npc.position.z < -748){
			npc.rotation.y = Math.PI;
			left = false;
		}
		
		
		//Marching2
		if (npc2.position.z < 1000 && left2 == false ){
       	npc2.rotation.y = Math.PI ;		
		npc2.position.z += 2.5;	
			
		}
		
		else if ( npc2.position.z > 999){
			npc2.rotation.y = 0;
			left2 = true;
		}
		
		if (npc2.position.z > -750 && left2 == true ){
       	npc2.rotation.y = 0;		
		npc2.position.z -= 2.5;	
			
		}
		else if ( npc2.position.z < -748){
			npc2.rotation.y = Math.PI;
			left2 = false;
		}
		
		
		}
		
			
}, 31.25);








    var talked1 = false;
	var talked2 = false;
	var talked3 = false;
	var talked4 = false;
	var talked5 = false;
	var talked6 = false;
	var talked7 = false;
	var playeds = false;
	var ppos = new THREE.Vector3(0,200,0);
	var rotobj1 = new THREE.Object3D;
	
	var Acc = 6;
	
	var rn = Math.floor(Math.random() * 3) + 1;
	
	

var attack = setInterval(function(){
	
	
	
	
	
	
	
	
	     if (controls.enabled == true){
		 if (canattack == true){
		    rn = Math.floor(Math.random() * Acc) + 1;
			createjs.Sound.play("Shot" , {volume: fxvolume / 2 });
            if (rn == 1){			
			HitPlayer(10); 
			} 
            else{
			MisPlayer();;
			}			
			 
		 }	
		 }		

}, 500);	
	
	
	
	
var NPCLoop = setInterval(function(){
	
	if (controls.enabled == true){
	
	//////////////////////////////////////////////
	if( HitO.name == 'NPC1' || HitO.name == 'NPC1.2' ){
	getDistance(npc, controls.getObject());	
	
	if(distance < WingDistance && IsHitting == true){
		agro = true;
		
	}
	
	if (distance < 100){
	
    document.getElementById('dialog').innerHTML ='[Press E]';
	
	if(Ekey == true || talked1 == true){
	document.getElementById('dialog').innerHTML ="*Speaks in dolphin* I can't talk right now, I have my orders.*Speaks in dolphin*";	
		talked1 = true;
		if (playeds != 'Busy'){
			createjs.Sound.play("Busy" , {volume: fxvolume });
			playeds = 'Busy';
		}
	
		setTimeout(function(){  talked1 = false;  playeds = false; }, dialogtime);
		
	}
	
	
	}
	
	}
	
	
	/////////////////////////////////////////////////
	
	
	
	if( HitO.name == 'NPC2' || HitO.name == 'NPC2.2' ){
	getDistance(npc2, controls.getObject());	
	
	if(distance < WingDistance && IsHitting == true){
		agro = true;
		
	}
	
	if (distance < 100){
	
    document.getElementById('dialog').innerHTML ='[Press E]';
	
	if(Ekey == true || talked2 == true){
	document.getElementById('dialog').innerHTML ="*Speaks in dolphin* I can't talk right now, I have my orders.*Speaks in dolphin*";	
		talked2 = true;
		
		if (playeds != 'Busy'){
			createjs.Sound.play("Busy" , {volume: fxvolume });
			playeds = 'Busy';
		}
	
	setTimeout(function(){ talked2 = false; playeds = false;}, dialogtime);
		
	}
	
	
	}
	
	}
	///////////////////////////////////////////////////////
	
	
	if( HitO.name == 'NPC3' || HitO.name == 'NPC3.2' ){
	getDistance(npc3, controls.getObject());	
	
	if(distance < WingDistance && IsHitting == true){
		agro = true;
		
	}
	
	if (distance < 100){
	
    document.getElementById('dialog').innerHTML ='[Press E]';
	
	if(Ekey == true || talked3 == true){
	document.getElementById('dialog').innerHTML ="*Speaks in dolphin* YOU SHALL NOT PASS!*Speaks in dolphin*";	
		talked3 = true;
		
		if (playeds != 'NP'){
			createjs.Sound.play("NoPass" , {volume: fxvolume });
			playeds = 'NP';
		}
		
	
	setTimeout(function(){ talked3 = false; playeds = false; }, dialogtime);
		
	}
	
	
	}
	
	
	}
	
	//////////////////////////////////////////////
	
	
	
	if( HitO.name == 'NPC4' || HitO.name == 'NPC4.2' ){
	getDistance(npc4, controls.getObject());	
	
	if(distance < WingDistance && IsHitting == true){
		agro = true;
		
	}
	
	if (distance < 100){
	
    document.getElementById('dialog').innerHTML ='[Press E]';
	
	if(Ekey == true || talked4 == true){
	document.getElementById('dialog').innerHTML ="*Speaks in dolphin* YOU SHALL NOT PASS!*Speaks in dolphin*";	
		talked4 = true;
		
		if (playeds != 'NP'){
			createjs.Sound.play("NoPass" , {volume: fxvolume });
			playeds = 'NP';
		}
	
	setTimeout(function(){ talked4 = false; playeds = false; }, dialogtime);
		
	}
	
	
	}
	
	
	}
	
	//////////////////////////////////////////////
	
	if( HitO.name == 'NPC5' || HitO.name == 'NPC5.2' ){
	getDistance(npc5, controls.getObject());	
	
	if(distance < WingDistance && IsHitting == true){
		agro = true;
		
	}
	
	if (distance < 100){
	
    document.getElementById('dialog').innerHTML ='[Press E]';
	
	if(Ekey == true || talked5 == true){
	document.getElementById('dialog').innerHTML ="*Speaks in dolphin* YOU SHALL NOT PASS!*Speaks in dolphin*";	
		talked5 = true;
		
		if (playeds != 'NP'){
			createjs.Sound.play("NoPass" , {volume: fxvolume });
			playeds = 'NP';
		}
	
	setTimeout(function(){ talked5 = false; playeds = false;  }, dialogtime);
		
	}
	
	
	}
	
	
	}
	
	//////////////////////////////////////////////
	
	if( HitO.name == 'NPC6' || HitO.name == 'NPC6.2' ){
	getDistance(npc6, controls.getObject());
    
	if(distance < WingDistance && IsHitting == true){
		agro = true;
		
	}
	
	if (distance < 100){
	
    document.getElementById('dialog').innerHTML ='[Press E]';
	
	if(Ekey == true || talked6 == true){
	document.getElementById('dialog').innerHTML ="*Speaks in dolphin* YOU SHALL NOT PASS!*Speaks in dolphin*";	
		talked6 = true;
		
		if (playeds != 'NP'){
			createjs.Sound.play("NoPass" , {volume: fxvolume });
			playeds = 'NP';
		}
	
	setTimeout(function(){ talked6 = false;  playeds = false; }, dialogtime);
		
	}
	}
	
	
	}
	
	//////////////////////////////////////////////
	
	
	if( HitO.name == 'NPC7' || HitO.name == 'NPC7.2' ){
	getDistance(npc7, controls.getObject());
    
	if(distance < WingDistance && IsHitting == true){
		agro = true;
		
	}
	
	if (distance < 100){
	
    document.getElementById('dialog').innerHTML ='[Press E]';
	
	if(Ekey == true || talked7 == true){
	document.getElementById('dialog').innerHTML ="*Speaks in dolphin* YOU SHALL NOT PASS!*Speaks in dolphin*";	
		talked7 = true;
		
		if (playeds != 'NP'){
			createjs.Sound.play("NoPass" , {volume: fxvolume });
			playeds = 'NP';
		}
	
	setTimeout(function(){ talked7 = false;  playeds = false;}, dialogtime);
		
	}
	}
	
	
	}
	
	//////////////////////////////////////////////
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/////////////////////AI//////////////////////
	
    
    
	
	if(agro == true){
    
	canmarch = false;
	
	ppos.y = 30;
	ppos.x = controls.getObject().position.x;
	ppos.z = controls.getObject().position.z;
	
	npc6.translateOnAxis( npc6.worldToLocal(ppos) ,0.002);
	npc6.rotation.y = controls.getObject().rotation.y + 3.14;
	
	npc5.position.x = npc6.position.x - 20;
	npc5.position.z = npc6.position.z;
	npc5.rotation.y = controls.getObject().rotation.y + 3.14;
	
	
	npc4.position.x = npc6.position.x + 20;
	npc4.position.z = npc6.position.z;
	npc4.rotation.y = controls.getObject().rotation.y + 3.14;
	
	npc3.position.x = npc6.position.x + 20;
	npc3.position.z = npc6.position.z + 20;
	npc3.rotation.y = controls.getObject().rotation.y + 3.14;
	
	npc2.position.x = npc6.position.x - 20;
	npc2.position.z = npc6.position.z + 20;
	npc2.rotation.y = controls.getObject().rotation.y + 3.14;
	
	npc.position.x = npc6.position.x;
	npc.position.z = npc6.position.z + 20;
	npc.rotation.y = controls.getObject().rotation.y + 3.14;
	
	getDistance(npc6, controls.getObject());
	if ( distance < 1000 ){
		
    
     canattack = true;
		
	}
	else{
		
		canattack = false;
	}
	
	
	
	
	
	
	
	}

	
	
	
	getDistance(npc6, controls.getObject());
	if (distance < 100){
	Acc = 1;	
		
		
		
	}
	else if (distance < 200){
	Acc = 2;	
		
		
		
	}else if (distance < 500){
	Acc = 4;	
		
		
		
	}
	else if (distance < 650){
	Acc = 6;	
		
		
		
	}else if (distance < 1000){
	Acc = 7;	
		
		
		
	}
	
	
	
	
	
	
	
	
	
	}
	
	

	
		
		
}, 1);


var CollisionDetectionNPC = setInterval(function(){
			
			
			// WALS////////////////////////////////
			if (npc6.position.x > 1155){
					npc6.position.x = 1155;	
			}
			
			if (npc6.position.x < -1240){
					npc6.position.x = -1240;
			}
			
			if (npc6.position.z > 1060){
					npc6.position.z = 1060;	
			}
			
			if (npc6.position.z < -700){
					npc6.position.z = -700;
			}
			/////////////////////////////////////////////
			//HOUSE1/////////////////////////////////
			
			
			if ( npc6.position.z < 230 && npc6.position.z > 25  &&
			npc6.position.x > 180 && npc6.position.x < 480){
			
		    if (npc6.position.z > 210){ npc6.position.z = 230; }
			else if (npc6.position.z < 50){ npc6.position.z = 25 }
			else if (npc6.position.x < 200){ npc6.position.x = 180 }
			else if (npc6.position.x > 470){ npc6.position.x = 480 }
			
			}
			
			/////////////////////////////////////////////////
			
			/////////////////////////////////////////////
			//HOUSE2/////////////////////////////////
			
			
			if ( npc6.position.z < 230 && npc6.position.z > 25  &&
			npc6.position.x > 535 && npc6.position.x < 840){
			
		    if (npc6.position.z > 220){ npc6.position.z = 230; }
			else if (npc6.position.z < 35){ npc6.position.z = 25 }
			else if (npc6.position.x < 545){ npc6.position.x = 535 }
			else if (npc6.position.x > 830){ npc6.position.x = 840 }
			
			}
			
			/////////////////////////////////////////////////
			
			/////////////////////////////////////////////
			//HOUSE3/////////////////////////////////
			
			
			if ( npc6.position.z < -150 && npc6.position.z > -340  &&
			npc6.position.x > 180 && npc6.position.x < 480){
			
		    if (npc6.position.z > -160){ npc6.position.z = -150; }
			else if (npc6.position.z < -290){ npc6.position.z = -340 }
			else if (npc6.position.x < 200){ npc6.position.x = 180 }
			else if (npc6.position.x > 470){ npc6.position.x = 480 }
			
			}
			
			/////////////////////////////////////////////////
			
			/////////////////////////////////////////////
			//HOUSE4/////////////////////////////////
			
			
			if ( npc6.position.z < -120 && npc6.position.z > -320  &&
			npc6.position.x > 535 && npc6.position.x < 840){
			
		    if (npc6.position.z > -140){ npc6.position.z = -120; }
			else if (npc6.position.z < -290){ npc6.position.z = -320 }
			else if (npc6.position.x < 545){ npc6.position.x = 535 }
			else if (npc6.position.x > 830){ npc6.position.x = 840 }
			
			}
			
			/////////////////////////////////////////////////
			
			/////////////////////////////////////////////
			//HOUSE5/////////////////////////////////
			
			
			if ( npc6.position.z < -500 && npc6.position.z > -700  &&
			npc6.position.x > 535 && npc6.position.x < 840){
			
		    if (npc6.position.z > -520){ npc6.position.z = -500; }
			else if (npc6.position.z < -680){ npc6.position.z = -700 }
			else if (npc6.position.x < 545){ npc6.position.x = 535 }
			else if (npc6.position.x > 830){ npc6.position.x = 840 }
			
			}
			
			/////////////////////////////////////////////////
			
			/////////////////////////////////////////////
			//HOUSE6/////////////////////////////////
			
			
			if ( npc6.position.z < -500 && npc6.position.z > -700  &&
			npc6.position.x > 180 && npc6.position.x < 480){
			
		    if (npc6.position.z > -520){ npc6.position.z = -500; }
			else if (npc6.position.z < -680){ npc6.position.z = -700 }
			else if (npc6.position.x < 200){ npc6.position.x = 180 }
			else if (npc6.position.x > 470){ npc6.position.x = 480 }
			
			}
			
			/////////////////////////////////////////////////
			
			/////////////////////////////////////////////
			//BUNKER/////////////////////////////////
			
			
			if ( npc6.position.z < 480 && npc6.position.z > -560  &&
			npc6.position.x > -1250 && npc6.position.x < -770){
			
		    if (npc6.position.z > 440){ npc6.position.z = 480; }//
			else if (npc6.position.z < -540){ npc6.position.z = -560 }
			else if (npc6.position.x < -1170){ npc6.position.x = -1250 }
			else if (npc6.position.x > -800){ npc6.position.x = -770 }
			
			}
			
			/////////////////////////////////////////////////
			
			///TANKS/////
			
			if ( npc6.position.z < 1140 && npc6.position.z > 470  &&
			npc6.position.x > -1250 && npc6.position.x < -280){
			
		    if (npc6.position.z > 1100){ npc6.position.z = 1140; }//
			else if (npc6.position.z < 490){ npc6.position.z = 470 }
			else if (npc6.position.x < -1170){ npc6.position.x = -1250 }
			else if (npc6.position.x > -340){ npc6.position.x = -280 }
			
			}
			
			////////////////////////////////////////////////////
			
			/////Cart///////////////////////////////////////////
			
			
			if ( npc6.position.z < 1040 && npc6.position.z > 930  &&
			npc6.position.x > 400 && npc6.position.x < 620){
			
		    if (npc6.position.z > 1020){ npc6.position.z = 1040; }
			else if (npc6.position.z < 960){ npc6.position.z = 930 }
			else if (npc6.position.x < 420){ npc6.position.x = 400 }
			else if (npc6.position.x > 580){ npc6.position.x = 620 }
			
			}
			
			
			////////////////////////////////////////////
			/////////////////////////////////////////////
			
			/////BAR///////////////////////////////////////////
			
			
			if ( npc6.position.z < 870 && npc6.position.z > 450 &&
			npc6.position.x > 830 && npc6.position.x < 1030){
			
		    if (npc6.position.z > 850){ npc6.position.z = 870; }
			else if (npc6.position.z < 500){ npc6.position.z = 450 }
			else if (npc6.position.x < 850){ npc6.position.x = 830 }
			else if (npc6.position.x > 1000){ npc6.position.x = 1030 }
			
			}
			
			
			
			
			
			}, 0.0025);




