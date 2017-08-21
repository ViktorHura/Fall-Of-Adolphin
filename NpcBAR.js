
var agro;

var killedall = false;

var oldsen;

var tookweed = false;

var sht = false;
 var canattack;
var geometry1NPC = new THREE.PlaneGeometry( 33, 55, 1, 1 );
var geometry2NPC = new THREE.PlaneGeometry( 33, 55, 1, 1 );

var geometry1NPCg = new THREE.PlaneGeometry( 33, 65, 1, 1 );
var geometry2NPCg = new THREE.PlaneGeometry( 33, 65, 1, 1 );

var geometry1NPCn = new THREE.PlaneGeometry( 30, 60, 1, 1 );
var geometry2NPCn = new THREE.PlaneGeometry( 30, 60, 1, 1 );
			
			geometry2NPC.applyMatrix( new THREE.Matrix4().makeRotationY( Math.PI ) );
			
			var textureFrontNPC = new THREE.ImageUtils.loadTexture('images/Dancer.png' );      
            var textureBackNPC = new THREE.ImageUtils.loadTexture('images/DancerB.png' );
			
			var textureFrontNPCg = new THREE.ImageUtils.loadTexture('images/Gregory.png' );      
            var textureBackNPCg = new THREE.ImageUtils.loadTexture('images/GregoryB.png' );
			
			var textureFrontNPCn = new THREE.ImageUtils.loadTexture('images/Dolphin.png' );      
            var textureBackNPCn = new THREE.ImageUtils.loadTexture('images/DolphinBack.png' );
			
			var textureFrontNPCb = new THREE.ImageUtils.loadTexture('images/Bartender.png' );      
            var textureBackNPCb = new THREE.ImageUtils.loadTexture('images/BartenderB.png' );

                // material
             var material1NPC = new THREE.MeshLambertMaterial( { color: 0xffffff, map: textureBackNPC ,depthWrite: false, } );
			 material1NPC.transparent = true;
			 material1NPC.anisotropy = renderer.getMaxAnisotropy();
             var material2NPC = new THREE.MeshLambertMaterial( { color: 0xffffff, map: textureFrontNPC ,depthWrite: false} );
			 material2NPC.transparent = true;
			 material2NPC.anisotropy = renderer.getMaxAnisotropy();
			 
			 var material1NPCg = new THREE.MeshLambertMaterial( { color: 0xffffff, map: textureBackNPCg ,depthWrite: false, } );
			 material1NPCg.transparent = true;
			 material1NPCg.anisotropy = renderer.getMaxAnisotropy();
             var material2NPCg = new THREE.MeshLambertMaterial( { color: 0xffffff, map: textureFrontNPCg ,depthWrite: false} );
			 material2NPCg.transparent = true;
			 material2NPCg.anisotropy = renderer.getMaxAnisotropy();
			 
			  var material1NPCn = new THREE.MeshLambertMaterial( { color: 0xffffff, map: textureBackNPCn ,depthWrite: false, } );
			 material1NPCn.transparent = true;
			 material1NPCn.anisotropy = renderer.getMaxAnisotropy();
             var material2NPCn = new THREE.MeshLambertMaterial( { color: 0xffffff, map: textureFrontNPCn ,depthWrite: false} );
			 material2NPCn.transparent = true;
			 material2NPCn.anisotropy = renderer.getMaxAnisotropy();
			 
			 var material1NPCb = new THREE.MeshLambertMaterial( { color: 0xffffff, map: textureBackNPCb ,depthWrite: false, } );
			 material1NPCb.transparent = true;
			 material1NPCb.anisotropy = renderer.getMaxAnisotropy();
             var material2NPCb = new THREE.MeshLambertMaterial( { color: 0xffffff, map: textureFrontNPCb ,depthWrite: false} );
			 material2NPCb.transparent = true;
			 material2NPCb.anisotropy = renderer.getMaxAnisotropy();
			 
            
			 
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
			 
			 var canr3 = true;
			 
			 var f1 = true;
			 var f2 = true;
			 var f3 = true;
			 var f4 = true;
			 var f5 = true;
			 var f6 = true;
			 var f7 = true;
			
			 
///////MAKE NPC//////////

function createMarchingNpc (){

             npc = new THREE.Object3D();
			
             scene.add( npc );

                // mesh
             mesh1 = new THREE.Mesh( geometry1NPCn, material1NPCn );
            npc.add( mesh1 );
             mesh2 = new THREE.Mesh( geometry2NPCn, material2NPCn );
            npc.add( mesh2 );
			mesh2.rotation.y = 3.14;
			npc.position.y = 35;
			npc.position.z = 73;
			npc.position.x = 140;
			npc.rotation.y = -1;
			npc.hp = 100;
			 objects.push( mesh1 );
			 objects.push( mesh2 );
			 
			 

			 
			 mesh1.name = 'NPC1';
			 mesh2.name = 'NPC1.2';
			

}

function createMarchingNpc2 (){

             npc2 = new THREE.Object3D();
			
             scene.add( npc2 );

                // mesh
             mesh3 = new THREE.Mesh( geometry1NPCn, material1NPCn );
            npc2.add( mesh3 );
             mesh4 = new THREE.Mesh( geometry2NPCn, material2NPCn );
			 mesh4.rotation.y = 3.14;
            npc2.add( mesh4 );
			npc2.position.y = 130;
			npc2.position.z = 250;
			npc2.position.x = 230;
			npc2.hp = 100;
			npc2.rotation.y = 1;
			
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
			npc3.position.y = 52.5;
			npc3.position.z = 228;
			npc3.position.x = 184;
			npc3.hp = 50;
			 objects.push( mesh5 );
			 objects.push( mesh6 );
			 
			 

			 
			 mesh5.name = 'NPC3';
			 mesh6.name = 'NPC3.2';

}

function createNpc4 (){

             npc4 = new THREE.Object3D();
			
             scene.add( npc4 );

                // mesh
             mesh7 = new THREE.Mesh( geometry1NPCg, material1NPCg );
			 
            npc4.add( mesh7 );
             mesh8 = new THREE.Mesh( geometry2NPCg, material2NPCg );
            npc4.add( mesh8);
			mesh7.rotation.y = 3.14;
			npc4.position.y = 37.5;
			npc4.position.z = 153;
			npc4.position.x = 40;
			npc4.rotation.y = 1.57;
			npc4.hp = 200;
			 objects.push( mesh7 );
			 objects.push( mesh8 );
			 
			 
            
			 
			 mesh7.name = 'NPC4';
			 mesh8.name = 'NPC4.2';

}

function createNpc5 (){

             npc5 = new THREE.Object3D();
			
             scene.add( npc5 );

                // mesh
             mesh9 = new THREE.Mesh( geometry1NPCn, material1NPCn );
            npc5.add( mesh9 );
             mesh10 = new THREE.Mesh( geometry2NPCn, material2NPCn );
            npc5.add( mesh10);
			mesh10.rotation.y = 3.14;
			npc5.position.x = 270;
			npc5.position.y = 35;
			npc5.position.z = 78;
			
			 objects.push( mesh9 );
			 objects.push( mesh10 );
			 
			 npc5.rotation.y = 1.30;
             npc5.hp = 100;
			 
			 mesh9.name = 'NPC5';
			 mesh10.name = 'NPC5.2';

}

function createNpc6 (){

             npc6 = new THREE.Object3D();
			
             scene.add( npc6 );

                // mesh
             mesh11 = new THREE.Mesh( geometry1NPCn, material1NPCn );
            npc6.add( mesh11 );
             mesh12 = new THREE.Mesh( geometry2NPCn, material2NPCn );
			 mesh12.rotation.y = 3.14;
            npc6.add( mesh12);
			npc6.position.y = 35;
			npc6.position.z = 180;
			npc6.position.x = 260;
			
			 objects.push( mesh11 );
			 objects.push( mesh12 );
			 
			npc6.rotation.y = 0.4; 
            npc6.hp = 100;
			 
			 mesh11.name = 'NPC6';
			 mesh12.name = 'NPC6.2';

}

function createNpc7 (){

             npc7 = new THREE.Object3D();
			
             scene.add( npc7 );

                // mesh
             mesh13 = new THREE.Mesh( geometry1NPCn, material1NPCb );
            npc7.add( mesh13 );
             mesh14 = new THREE.Mesh( geometry2NPCn, material2NPCb );
			 mesh14.rotation.y = 3.14;
            npc7.add( mesh14);
			npc7.position.y = 35;
			npc7.position.z = -121;
			npc7.position.x = 191;
			
			 objects.push( mesh13 );
			 objects.push( mesh14 );
			 
			npc7.rotation.y = Math.PI; 
			
			npc7.hp = 100;

			 
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

/*



var left = false;
var left2 = true;

var canmarch = true;

*/

var NPCMarchingLoop = setInterval(function(){
		/*
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
		*/
		
		if (canr3 == true){
		npc3.rotation.y += 0.1;
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
			createjs.Sound.play("StepSound" , {volume: fxvolume / 2 });
            if (rn == 1){			
			HitPlayer(10); 
			} 
            else{
			//MisPlayer();;
			}			
			 
		 }	
		 }		

}, 500);	


var dialogstagebar = 0;
	
var toggled = false;
	
var NPCLoop = setInterval(function(){
	
	if (controls.enabled == true){
	
	//////////////////////////////////////////////
	if( HitO.name == 'NPC1' || HitO.name == 'NPC1.2' ){
	getDistance(npc, controls.getObject());	
	
	if(distance < WingDistance && IsHitting == true && battle == true){
		IsHitting = false;
		npc.hp = npc.hp - playerdmg;
		createjs.Sound.play("Umf" , {volume: fxvolume });
		
	}
	
	
	if (distance < 100 && battle == false){
	
    document.getElementById('dialog').innerHTML ='[Press E]';
	
	if(Ekey == true || talked1 == true){
	document.getElementById('dialog').innerHTML ="*Speaks in dolphin* I can't talk right now, I have my orders.*Speaks in dolphin*";	
		talked1 = true;
		if (playeds != 'Busy'){
			createjs.Sound.play("Busy" , {volume: fxvolume * 1.5 });
			playeds = 'Busy';
		}
	
		setTimeout(function(){  talked1 = false;  playeds = false; }, dialogtime);
		
	}
	
	
	}
	
	}
	
	
	/////////////////////////////////////////////////
	
	
	
	if( HitO.name == 'NPC2' || HitO.name == 'NPC2.2' ){
	getDistance(npc2, controls.getObject());	
	
	if(distance < WingDistance && IsHitting == true && battle == true){
		IsHitting = false;
		npc2.hp = npc2.hp - playerdmg;
		createjs.Sound.play("Umf" , {volume: fxvolume });
		
	}
	
	if (distance < 100 && battle == false){
	
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
	
	if(distance < WingDistance && IsHitting == true && battle == true){
		IsHitting = false;
		npc3.hp = npc3.hp - playerdmg;
		createjs.Sound.play("Umf" , {volume: fxvolume });
		
	}
	
	
	if (distance < 100 && battle == false){
	if (sht == false){
    document.getElementById('dialog').innerHTML ='[Press E]';
	}
	if(Ekey == true || talked3 == true){
	document.getElementById('dialog').innerHTML ="Hi! :)";	
	    if (ttmg == 0){
		pr = controls.getObject().rotation.y;
	    ttmg = 1;
		}
		talked3 = true;
		
		if (playeds != 'NP'){
			createjs.Sound.play("Hi!" , {volume: fxvolume });
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
		IsHitting = false;
		npc4.hp = npc4.hp - playerdmg;
		createjs.Sound.play("Umf" , {volume: fxvolume });
		
	}
	
	if (distance < 100 && battle == false && battle == true){
	if(sht = false){
    document.getElementById('dialog').innerHTML ='[Press E]';
	}
	if(Ekey == true || talked4 == true){

	document.getElementById('dialog').innerHTML ="*Speaks in dolphin* Umffff! *Speaks in dolphin*";	
		talked4 = true;
		
		if (playeds != 'NP'){
			createjs.Sound.play("Umf" , {volume: fxvolume });
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
		IsHitting = false;
		npc5.hp = npc5.hp - playerdmg;
		createjs.Sound.play("Umf" , {volume: fxvolume });
		
	}
	
	
	if (distance < 100 && battle == false && battle == true){
	
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
	
	//////////////////////////////////////////////
	
	if( HitO.name == 'NPC6' || HitO.name == 'NPC6.2' ){
	getDistance(npc6, controls.getObject());
    
	if(distance < WingDistance && IsHitting == true && battle == true){
		IsHitting = false;
		npc6.hp = npc6.hp - playerdmg;
		createjs.Sound.play("Umf" , {volume: fxvolume / 2 });
		
	}
	
	
	if (distance < 100 && battle == false){
	
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
	
	//////////////////////////////////////////////
	
	
	if( HitO.name == 'NPC7' || HitO.name == 'NPC7.2' || talked7 == true){
	getDistance(npc7, controls.getObject());
    
	
	
	if (distance < 100 && battle == false || killedall == true){
	
	if (tookweed == false){
    document.getElementById('dialog').innerHTML ='[Press E]';
	}
	
	if(Ekey == true || talked7 == true){
	
    if (talked7 == false && killedall == false){
		
		oldsen = sensitivity;
	}	
		
		talked7 = true;
    if (Ekey == true){ dialogstagebar = dialogstagebar + 1; Ekey = false;}
	if (dialogstagebar == 1){
	document.getElementById('dialog').innerHTML ="You're here for Rasta you say? [Press E] ";
	
	if (playeds != 'D1'){
			createjs.Sound.play("D1" , {volume: fxvolume });
			playeds = 'D1';
		}
	
	speed = 'none';
	ep = true;
	if (toggled == false && soundvol == true){
		
	toggled = true;
	ToggleSound(true);
	}
    }
    if (dialogstagebar == 2){
	document.getElementById('dialog').innerHTML ="I told that turtle to never come here again. If you want the stuff, you'll have to get it from me! [Press E] ";
	
	if (playeds != 'D2'){
			createjs.Sound.play("D2" , {volume: fxvolume });
			playeds = 'D2';
		}
	
    }
	if (dialogstagebar == 3){
	document.getElementById('dialog').innerHTML ="Get him boys!";
	
	if (playeds != 'D3'){
			createjs.Sound.play("D3" , {volume: fxvolume });
			playeds = 'D3';
		}
	
	speed = 3.5;
	talked7 = false;
	sensitivity = oldsen;
	missionstate = 4;
	agro = true;
	battle = true;
	canr3 = false;
	dialogstagebar = 1000000000;
    }
	
	if (killedall == true && tookweed == false){
		
	document.getElementById('dialog').innerHTML ="Take it and get out! [Press E] ";
	if (playeds != 'D4'){
			createjs.Sound.play("D4" , {volume: fxvolume });
			playeds = 'D4';
		}
	Stuff.visible = true;
    	
		
	}
	
	
    	
	
	
	
		
	
	//setTimeout(function(){ talked7 = false;  playeds = false;}, dialogtime);
		
	}
	}
	
	
	}
	
	//////////////////////////////////////////////
	
	
	
	if (talked7 == true && killedall == false){
		
	   velocity.x = 0;
	   velocity.y = 0;
	   velocity.z = 0;
	   
	   sensitivity = 0;
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/////////////////////AI//////////////////////
	
    
    
	
	if(agro == true){
    
	canmarch = false;
	
	ppos.y = 30;
	ppos.x = controls.getObject().position.x;
	ppos.z = controls.getObject().position.z;
	
	npc6.translateOnAxis( npc6.worldToLocal(ppos) ,0.002);
	npc6.rotation.y = controls.getObject().rotation.y + 3.14;
	
	if (f5 == true){
	npc5.position.x = npc6.position.x - 20;
	npc5.position.z = npc6.position.z;
	npc5.position.y = npc6.position.y;
	npc5.rotation.y = controls.getObject().rotation.y + 3.14;
	}
	
	if (f4 == true){
	npc4.position.x = npc6.position.x + 20;
	npc4.position.z = npc6.position.z;
	npc4.position.y = npc6.position.y;
	npc4.rotation.y = controls.getObject().rotation.y;
	}
	
	if (f3 == true){
	npc3.position.x = npc6.position.x + 20;
	npc3.position.z = npc6.position.z + 20;
	npc3.position.y = npc6.position.y;
	npc3.rotation.y = controls.getObject().rotation.y + 3.14;
	}
	
	if (f2 == true){
	npc2.position.x = npc6.position.x - 20;
	npc2.position.z = npc6.position.z + 20;
	npc2.position.y = npc6.position.y;
	npc2.rotation.y = controls.getObject().rotation.y + 3.14;
	}
	
	if (f1 == true){
	npc.position.x = npc6.position.x;
	npc.position.z = npc6.position.z + 20;
	npc.position.y = npc6.position.y;
	npc.rotation.y = controls.getObject().rotation.y + 3.14;
	}
	
	getDistance(npc6, controls.getObject());
	if ( distance < 100 ){
		
    
     canattack = true;
		
	}
	else{
		
		canattack = false;
	}
	
	
	
	
	
	
	
	}

	
	
	
	getDistance(npc6, controls.getObject());
	if (distance < 100){
	Acc = 4;	
		
		
		
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
	
	if (npc6.hp < 1){
		
		npc6.visible = false;
		
		
	}
	if (npc3.hp < 1){
		
		npc3.rotation.z = 1.57;
		npc3.rotation.x = 1.57;
		f3 = false;
		npc3.position.y = 10;
		
		
	}
	
	if (npc2.hp < 1){
		
		npc2.rotation.z = 1.57;
		npc3.rotation.x = 1.57;
		f2 = false;
		npc2.position.y = 10;
		
		
	}
	
	if (npc.hp < 1){
		
		npc.rotation.z = 1.57;
		npc.rotation.x = 1.57;
		f1 = false;
		npc.position.y = 10;
		
		
	}
	
	if (npc4.hp < 1){
		
		npc4.rotation.z = 1.57;
		npc4.rotation.x = 1.57;
		f4 = false;
		npc4.position.y = 10;
		
		
	}
	
	if (npc5.hp < 1){
		
		npc5.rotation.z = 1.57;
		npc5.rotation.x = 1.57;
		f5 = false;
		npc5.position.y = 10;
		
		
	}
	
	
	if (f1 == false && f2 == false && f3 == false && f4 == false && f5 == false){
		
	agro = false;
	canattack = false;
	missionstate = 5;
	killedall = true;
				
	}
	
	if (HitO.name == 'Weed'){
		
	
		 tookweed = true;
		
       			
		Stuff.visible = false;
		sessionStorage.setItem("Stuff", "true");
		missionstate = 6;
		
		
		
	
	
		
	}
	
	
	
	
	
	
	
	
	
	
	}
	

}, 1);


var CollisionDetectionNPC = setInterval(function(){


			TestandPrevCol(npc6, BOXC, 300,30,30 );
			TestandPrevCol(npc6, BOXC2, 30,30,60 );
			TestandPrevCol(npc6, BOXC3, 410,200,20 );
			TestandPrevCol(npc6, BOXC4, 410,200,20 );
			TestandPrevCol(npc6, BOXC5, 20,200,550 );
			TestandPrevCol(npc6, BOXC6, 20,200,550 );
			TestandPrevCol(npc6, BOXC7, 75,20,20 );
			TestandPrevCol(npc6, BOXC8, 75,20,40 );
		    TestandPrevCol(npc6, BOXC9, 75,20,40 );
			TestandPrevCol(npc6, BOXC10, 75,5,250 );
			TestandPrevCol(npc6, BOXC11, 350,5,75 );
			TestandPrevCol(npc6, BOXC12, 5,30,170 );
			TestandPrevCol(npc6, BOXC13, 400,20,600 );
			TestandPrevCol(npc6, BOXC14, 350,30,5 );
			TestandPrevCol(npc6, BOXC15, 200,20,100 );
			TestandPrevCol(npc6, BOXC16, 40,30,40 );
			TestandPrevCol(npc6, BOXC17, 40,30,40 );
			TestandPrevCol(npc6, BOXC18, 40,30,40 );
			TestandPrevCol(npc6, BOXC19, 40,30,40 );
			TestandPrevCol(npc6, BOXC20, 40,30,40 );
			TestandPrevCol(npc6, BOXC21, 40,30,40 );			
			
			
			
			

			
}, 1000 / 32);



////////////////////SCRIPTED EVENTS/////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


////////////////////TALK TO MY GIRL???///////////////////////////////////			
var ttmg = 0;
var ttmgs = false;
var spos = new THREE.Vector3(0,0,0);
var pr;
	
var Talktomygirl = setInterval(function(){
			
if (ttmg == 1){
	

canmove = false;

spos.x = 62;
spos.y = 37.5;
spos.z = 250;	
	
npc4.translateOnAxis( npc4.worldToLocal(spos) ,0.004);	

if (npc4.position.x < 65 && npc4.position.x > 60 && npc4.position.z < 255 && npc4.position.z > 245 ){
	
//sensitivity = document.cookie.replace(/(?:(?:^|.*;\s*)sensitivity\s*\=\s*([^;]*).*$)|^.*$/, "$1");	
ttmg = 2;	

}
	
}

if (ttmg == 2){



spos.x = 62;
spos.y = 100;
spos.z = 250;		

npc4.translateOnAxis( npc4.worldToLocal(spos) ,0.004);

if (npc4.position.y > 56.5){
	
	
ttmg = 3;	
	
}
	
	
}

if (ttmg == 3){




spos.x = 175;
spos.y = 56.6;
spos.z = 245;		

npc4.translateOnAxis( npc4.worldToLocal(spos) ,0.004);

if (npc4.position.x < 165 && npc4.position.x > 160 && npc4.position.z < 250 && npc4.position.z > 240 ){
	
npc4.rotation.y = 3.14;
canr3 = false;
npc3.rotation.y = 0;
sht = true;
document.getElementById('dialog').innerHTML ="*Speaks in dolphin* You talking to my girl, or what? *Speaks in dolphin*";

if (ttmgs == false){
createjs.Sound.play("MyGirl" , {volume: fxvolume * 1.5 });
ttmgs = true;

}

;
setTimeout(function(){ ttmg = 4; sht = false; canmove = true; }, 1000);
}
	
	
}



			
			
			
			
}, 1);			
			
			
			


