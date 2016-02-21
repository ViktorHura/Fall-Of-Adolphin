
            var geometryWing = new THREE.PlaneGeometry( 50, 5, 1, 1 );

			var textureWing = new THREE.ImageUtils.loadTexture('images/Wing.png' );      
            
			

                // material
            var materialWing = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureWing } );
			materialWing.transparent = true;
			materialWing.side = THREE.DoubleSide;
            
			
             
			var Wing = new THREE.Mesh( geometryWing, materialWing );
			Wing.position.y = -4;
	        Wing.position.z = -5;
	        Wing.position.x = 10;
			Wing.rotation.y = 1.57;
			Wing.visible = false;
			
			
            camera.add( Wing );
			
			var slapanimation = false;
			var resetpos = false;
			
			/////////////
            document.body.onmousedown = function() { 
			if (controls.enabled == true){
				
            slapanimation = true;
			IsHitting = true;
			setTimeout(function(){ IsHitting = false }, 100);
			
			
			
			}
            }
			
			
            document.body.onmouseup = function() {
            
            }
			
			var SlapAnimationLoop = setInterval(function(){
			
		    if ( slapanimation == true ){
				
				Wing.visible = true;
				if (Wing.rotation.y > 3.7){
					slapanimation = false;
					Wing.rotation.y = 1.57;
					Wing.visible = false;
					
				}else {
					Wing.rotation.y += 0.03;
					
				}
				
				
			}
		    
			}, 1);
			
			
			
			
			function HitPlayer(x){
			if (controls.enabled == true){	
			hp = hp - x;	
			
		    scene.remove ( arrow );
            arrow = new THREE.ArrowHelper( npc.getWorldDirection(), camera.getWorldPosition(), 100000, Math.random() * 0xffffff);
            scene.add( arrow );
			setTimeout(function(){ scene.remove ( arrow ); }, 200);
            createjs.Sound.play("HitP" , {volume: fxvolume * 10 });
            pitchObject.rotation.x = pitchObject.rotation.x + 0.1;
			setTimeout(function(){ pitchObject.rotation.x = pitchObject.rotation.x - 0.1; }, 200);
			
				
			}	
			}
			
			var mispos = camera.getWorldPosition();
			
			function MisPlayer(){
				
			mispos = camera.getWorldPosition();
			mispos.y = mispos.y + Math.floor(Math.random() * 20) + 1;
			mispos.x = mispos.y + Math.floor(Math.random() * 20) + 1;
			
            scene.remove ( arrow );
            arrow = new THREE.ArrowHelper( npc.getWorldDirection(), mispos, 100000, Math.random() * 0xffffff);
            scene.add( arrow );
			setTimeout(function(){ scene.remove ( arrow ); }, 200);			
				
				
			}
			
			var dead = false;
			var Combat = setInterval(function(){
			
		    if ( hp < 1 && dead == false){
			dead = true;
			hp = 0;	
			window.open('GameOver.html','_self',false)
				
				
			}
		    
			
			
			
			}, 1);
			
			
			
			