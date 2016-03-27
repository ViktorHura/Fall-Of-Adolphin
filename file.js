  
			
			var tookvodka = false;
		    var loadingscreen = setInterval(function(){
			var distance;
			var HitO;
			
			if (loaded == true){
					document.getElementById('Info').innerHTML ='Click to Play';
					
					}
					
			}, 250);
			
			
			function getDistance(mesh1, mesh2) {
            var dx = mesh1.position.x - mesh2.position.x;
            var dy = mesh1.position.y - mesh2.position.y;
            var dz = mesh1.position.z - mesh2.position.z;
            distance = Math.sqrt(dx*dx+dy*dy+dz*dz);
			//console.log(distance);
           }
			
			
			var cleared = false;
			
		    var ClearChat = setInterval(function(){
			
			if (document.getElementById('dialog').innerHTML == '[Press E]' && cleared == false ){
			cleared = true;
            setTimeout(function(){ document.getElementById('dialog').innerHTML = ''; cleared = false; }, dialogtime);			
					
			}
					
			}, 1);
			

			var camera, scene, renderer;
			var geometry, material, mesh;
			var controls;
			
			var loaded = false;
			var cantv = false;

			var objects = [];

			var raycaster;

			var blocker = document.getElementById( 'blocker' );
			var instructions = document.getElementById( 'instructions' );

				

			var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

			if ( havePointerLock ) {

				var element = document.body;

				var pointerlockchange = function ( event ) {

					if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
                        
						if (loaded == true){
						controlsEnabled = true;
						controls.enabled = true;

						blocker.style.display = 'none';
						}
						

					} else {

						controls.enabled = false;

						blocker.style.display = '-webkit-box';
						blocker.style.display = '-moz-box';
						blocker.style.display = 'box';

						instructions.style.display = '';

					}

				};

				var pointerlockerror = function ( event ) {

					instructions.style.display = '';

				};

				// Hook pointer lock state change events
				document.addEventListener( 'pointerlockchange', pointerlockchange, false );
				document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
				document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

				document.addEventListener( 'pointerlockerror', pointerlockerror, false );
				document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
				document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

				instructions.addEventListener( 'click', function ( event ) {

					instructions.style.display = 'none';

					// Ask the browser to lock the pointer
					element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;

					if ( /Firefox/i.test( navigator.userAgent ) ) {

						var fullscreenchange = function ( event ) {

							if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {

								document.removeEventListener( 'fullscreenchange', fullscreenchange );
								document.removeEventListener( 'mozfullscreenchange', fullscreenchange );
								

								element.requestPointerLock();
							}

						};

						document.addEventListener( 'fullscreenchange', fullscreenchange, false );
						document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );

						element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;

						element.requestFullscreen();

					} else {

						element.requestPointerLock();

					}

				}, false );

			} else {

				instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';

			}

			init();
			animate();

			var controlsEnabled = false;

			var moveForward = false;
			var moveBackward = false;
			var moveLeft = false;
			var moveRight = false;
			var Ekey = false;
							

			var prevTime = performance.now();
			var velocity = new THREE.Vector3();

			function init() {

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );

				scene = new THREE.Scene();
				//scene.fog = new THREE.Fog( 0xffffff, 3000, 3000 );

				var light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 );
				light.position.set( 0.5, 1, 0.75 );
				scene.add( light );

				controls = new THREE.PointerLockControls( camera );
				scene.add( controls.getObject() );
				

				var onKeyDown = function ( event ) {

					switch ( event.keyCode ) {

						case 90: // up
						case 87: // w
							moveForward = true;
							break;

						case 81: // left
						case 65: // a
							moveLeft = true; break;

						case 40: // down
						case 83: // s
							moveBackward = true;
							break;

						case 39: // right
						case 68: // d
							moveRight = true;
							break;
							
						case 69: // E
							Ekey = true;
							
							break;
							
						
						case 16: // shift
							Sprint = true;
							break;

						case 32: // space
							if ( canJump === true ) velocity.y += 350;
							canJump = false;
							break;

					}

				};

				var onKeyUp = function ( event ) {

					switch( event.keyCode ) {

						case 90: // up
						case 87: // w
							moveForward = false;
							break;

						case 81: // left
						case 65: // a
							moveLeft = false;
							break;

						case 40: // down
						case 83: // s
							moveBackward = false;
							break;

						case 39: // right
						case 68: // d
							moveRight = false;
							break;
						
						case 69: // E
							Ekey = false;
							break;
							
							case 16: // shift
							Sprint = false;
							break;

					}

				};

				document.addEventListener( 'keydown', onKeyDown, false );
				document.addEventListener( 'keyup', onKeyUp, false );

				raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );

				// floor

				
				

               
				
				
				    
				renderer = new THREE.WebGLRenderer();
				renderer.setClearColor( 0xffffff );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );
				
                 
				 
				var url = window.location.href;
                var hash = url.substring(url.indexOf("#")+1);
                
				//
				
				var loader = new THREE.ObjectLoader();
                 loader.load("SceneHouse.json",function ( obj ) {
				 loaded = true;
                 scene.add( obj );
				 
				
				 controls.getObject().position.z = 100;
				 controls.getObject().position.x = 0;
				 controls.getObject().rotation.y = 0;
				 
				 
				 
				 
				 
                 });

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}
			
			
			
			
			
			
			var geometry1NPC = new THREE.PlaneGeometry( 90, 65, 1, 1 );
			var geometry2NPC = new THREE.PlaneGeometry( 90, 65, 1, 1 );
			
			geometry2NPC.applyMatrix( new THREE.Matrix4().makeRotationY( Math.PI ) );
			
			var textureFrontNPC = new THREE.ImageUtils.loadTexture('images/Rasta.png' );      
            var textureBackNPC = new THREE.ImageUtils.loadTexture('images/RastaBack.png' );

                // material
             var material1NPC = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureBackNPC } );
			 material1NPC.transparent = true;
             var material2NPC = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureFrontNPC } );
			 material2NPC.transparent = true;

              // Npc
             var npc = new THREE.Object3D();
             scene.add( npc );

                // mesh
             mesh1 = new THREE.Mesh( geometry1NPC, material1NPC );
            npc.add( mesh1 );
             mesh2 = new THREE.Mesh( geometry2NPC, material2NPC );
            npc.add( mesh2 );
			npc.position.y = 30;
			npc.position.z = -100;
			npc.position.x = 30;
			
			////invisible object for getting the y rotation///
			
			
			var rotObj1 = new THREE.Mesh( geometry1NPC, material2NPC );
			rotObj1.position.y = 32;
			rotObj1.position.z = -100;
			rotObj1.position.x = 30;
			rotObj1.visible = false;
			scene.add(rotObj1);
			
			
			
			
			var progression = 0;
			var playeds = 0;
		    
			
			var ScriptedEvents = setInterval(function(){
			
		    ////// Talk to Rasta/////
		    
			if ( controls.getObject().position.z < 0 && controls.getObject().position.z < 20 && progression == 0 ){
			progression = 1;
			document.getElementById('dialog').innerHTML ='Hey psst, come closer.' + '<br>'+'[Press E]';
			if(playeds == 0){
			createjs.Sound.play("R1" , {volume: fxvolume });
			playeds = 1;
			}
			}
			else if (progression == 1 && Ekey == true){
			progression = 2;
			setTimeout(function(){ progression = 3;}, 1000);		
			document.getElementById('dialog').innerHTML ="So you want to get inside the bunker huh? I left my stuff at the bar, but they won't let me inside. If you help me I can help you as well." + '<br>'+'[Press E]';
			if(playeds == 1){
			createjs.Sound.play("R2" , {volume: fxvolume });
			playeds = 2;
	        
			}
			}
			
			else if (progression == 3 && Ekey == true){
			progression = 4;
			setTimeout(function(){ progression = 5;}, 1000);	
			document.getElementById('dialog').innerHTML ="Ok, deal. First, take the Vodka. You can't get inside without it. Then find the bartender. Tell him 'Rasta' needs the stuff. Then bring the stuff back to me." + '<br>'+'[Press E]';
			if(playeds == 2){
			createjs.Sound.play("R3" , {volume: fxvolume });
			playeds = 3;
			}
			}
			
			
			else if (progression == 5 && Ekey == true){
			progression = 6;
			cantv = true;
			document.getElementById('dialog').innerHTML ="Good luck, se�or Gunter.";
			if(playeds == 3){
			createjs.Sound.play("R4" , {volume: fxvolume });
			playeds = 4;
			}
			
			}
			
			
			
			
			
			
			
			
			
			
			
			}, 0.1);
			
			
			
			
			
			
			
			
			
			
			
			
			var CollisionDetection = setInterval(function(){
			
			
			//// WALlS////////////////////////////////
			if (controls.getObject().position.x > 135){
					controls.getObject().position.x = 135;	
			}
			
			if (controls.getObject().position.x < -135){
					controls.getObject().position.x = -135;
			}
			
			if (controls.getObject().position.z > 135){
					controls.getObject().position.z = 135;	
			}
			
			if (controls.getObject().position.z < -135){
					controls.getObject().position.z = -135;
			}
			/////////////////////////////////////////////
			//BED/////////////////////////////////
			
			
			if ( controls.getObject().position.z < -20 && controls.getObject().position.z > -150  &&
		    controls.getObject().position.x > -150 && controls.getObject().position.x < -50){
			
		    if (controls.getObject().position.z > -40){ controls.getObject().position.z = -20; }
			else if (controls.getObject().position.z < -130){ controls.getObject().position.z = -150 }
			else if (controls.getObject().position.x < -130){ controls.getObject().position.x = -150; }
			else if (controls.getObject().position.x > -70){ controls.getObject().position.x = -50 }
			
			}
			/////////TABLE///////////////////////////////////
			if ( controls.getObject().position.z < -30 && controls.getObject().position.z > -150  &&
		    controls.getObject().position.x > 80 && controls.getObject().position.x < 150){
			
		    if (controls.getObject().position.z > -50){ controls.getObject().position.z = -30; }
			else if (controls.getObject().position.z < -130){ controls.getObject().position.z = -150 }
			else if (controls.getObject().position.x < 100){ controls.getObject().position.x = 80 }
			else if (controls.getObject().position.x > 130){ controls.getObject().position.x = 150 }
			
			}
			/////////FIRE///////////////////////////////////
			if ( controls.getObject().position.z < 100 && controls.getObject().position.z > -30  &&
		    controls.getObject().position.x > 80 && controls.getObject().position.x < 150){
			
		    if (controls.getObject().position.z > 80){ controls.getObject().position.z = 100; }
			else if (controls.getObject().position.z < -50){ controls.getObject().position.z = -30 }
			else if (controls.getObject().position.x < 100){ controls.getObject().position.x = 80 }
			else if (controls.getObject().position.x > 130){ controls.getObject().position.x = 150 }
			
			}
			
			
			}, 0.1);
			
			
		  
			///
			
			
			var Door = setInterval(function(){
			/////////////Opening Door//////////////
			
			
			if(controls.getObject().position.z > 100 && controls.getObject().position.z < 150 && controls.getObject().position.x > -30  && controls.getObject().position.x < 30 ){
			
			
			document.getElementById('dialog').innerHTML ='[Press E]';
			
			if ( Ekey == true){
			
		    if (tookvodka == false){
			
			window.open ('Hub.html#H4','_self',false);
			 }else if (tookvodka == true){
			 window.open ('Hub.html#Vodka','_self',false);
			 
			 }
		
			}
				
			
			
			}
			
		    
			////////////////////////////
			////////////////////////////
			/////////////////////////////
			}, 0.1);
			
			////////////////////////////
			
			////////////////////////////////////////////////////
			
			
			var geoVodka = new THREE.PlaneGeometry( 10, 30, 1, 1 );
            var matVodka = new THREE.MeshBasicMaterial( { color: 0xffffff, map: new THREE.ImageUtils.loadTexture('images/Vodka.png') ,depthWrite: false} );  
			
			 matVodka.transparent = true;
			 matVodka.side = THREE.DoubleSide;
            var Vodka = new THREE.Mesh( geoVodka, matVodka );
			Vodka.position.set(120,55,-60);
			Vodka.rotation.y = 2.31;
			
			Vodka.name = 'Vodka';
			objects.push( Vodka );
			
            scene.add( Vodka );
			
			var VodkaLoop = setInterval(function(){
			
			
	
	
	        if( HitO.name == 'Vodka'){
	        getDistance(npc, controls.getObject());	
	        if (distance < 100 && cantv == true){
			document.getElementById('dialog').innerHTML ='[Press E]';
		    if (Ekey == true){
		    document.getElementById('dialog').innerHTML ='';
			objects.pop();
			scene.remove(Vodka);
		    tookvodka = true;
		  
	          }
	         }
	        }
			
			
			
			}, 0.1);
			
			var raycaster = new THREE.Raycaster();
			intersectionss = raycaster.intersectObjects( objects );
			
			
			
			function animate() {

				requestAnimationFrame( animate );
				
				//console.log(controls.getObject().position.z);
				//console.log(controls.getObject().position.x);
				
				if ( controlsEnabled ) {
					raycaster.set( camera.getWorldPosition(), camera.getWorldDirection() );
					
					var intersections = raycaster.intersectObjects( objects );
		       

					var isOnObject = intersections.length > 0;
					
					
					
					for ( var i = 0; i < intersections.length; i++ ) {

	             	//getDistance(intersections[ i ].object, controls.getObject());
					HitO = intersections[ i ].object;
					
	                }
					
					if ( intersections.length > 0 ){
					
					}else {
					HitO = false;
					}

					var time = performance.now();
					var delta = ( time - prevTime ) / 1000;
					var speed = 4;
					
					if ( Sprint == true ){ 
					//console.log(speed);
					speed = 6;
					}
					else{
					
					speed = 3.5;
					}

					velocity.x -= velocity.x * 10.0 * delta;
					velocity.z -= velocity.z * 10.0 * delta;

					velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

					if ( moveForward ) velocity.z -= 400.0 * delta * speed;
					if ( moveBackward ) velocity.z += 400.0 * delta * speed;

					if ( moveLeft ) velocity.x -= 400.0 * delta * speed;
					if ( moveRight ) velocity.x += 400.0 * delta * speed;
                    
					
					
					if ( isOnObject === true ) {
						velocity.y = Math.max( 0, velocity.y );

						canJump = true;
					}
					
					rotObj1.lookAt( controls.getObject().position );
					npc.rotation.y = rotObj1.rotation.y + 3.14;
					
					if (sessionStorage.getItem("Vodka") == 'true'){ 
					
					progression = 6;
			        cantv = false;
			        document.getElementById('dialog').innerHTML ="Good luck, se�or Gunter.";
					
					
				    objects.pop();
			        scene.remove(Vodka);
		            tookvodka = true;
					
					
					}
					
					
                     
				
					 
					controls.getObject().translateX( velocity.x * delta );
					controls.getObject().translateY( velocity.y * delta );
					controls.getObject().translateZ( velocity.z * delta );

					if ( controls.getObject().position.y < 75 ) {

						velocity.y = 0;
						controls.getObject().position.y = 75;

						canJump = true;

					}
					
					

					prevTime = time;
					
					
					

				}

				
				renderer.render( scene, camera );

			}
			
            