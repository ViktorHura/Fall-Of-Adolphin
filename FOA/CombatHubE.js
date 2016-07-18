
            var geometryWing = new THREE.PlaneGeometry( 50, 5, 1, 1 );

			var textureWing = new THREE.ImageUtils.loadTexture('images/Wing.png' );      
            
			
                // material
            var materialWing = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureWing } );
			materialWing.transparent = true;
			materialWing.side = THREE.DoubleSide;
            
			
             
			//Wing = new THREE.Mesh( geometryWing, materialWing );
			
			
			var slapanimation = false;
			var resetpos = false;
			var ofpos = camera.getWorldPosition();
			
			/////////////
            document.body.onmousedown = function() { 
			if (controls.enabled == true){
				
            slapanimation = true;
			IsHitting = true;
			setTimeout(function(){ IsHitting = false }, 10);
			
			if(IsHitting == true){
			scene.remove ( arrow );
			ofpos = camera.getWorldPosition();
			ofpos.z = ofpos.z - 100;
            arrow = new THREE.ArrowHelper( camera.getWorldDirection(), ofpos, 100000, Math.random() * 0xffffff );
            scene.add( arrow );
			setTimeout(function(){ scene.remove ( arrow ); }, 200);
			}
			
			}
            }
			
			
            document.body.onmouseup = function() {
            
            }
			
			
			
			var SlapAnimationLoop = setInterval(function(){
			
		    if ( slapanimation == true ){
				
				
				if (Wing.rotation.z > 6.38){
					
					slapanimation = false;
					Wing.rotation.z = -0.1;	
					
			 
			 
				
					
				}else {
					Wing.rotation.z += 0.03;
					
				}
				
				
			}
		    
			}, 1);
			
			
			
			
			function HitPlayer(x){
				
			hp = hp - x;	
		    


				
				
			}
			
			
			var Combat = setInterval(function(){
			
		    if ( hp < 0 ){
			hp = 0;	
			window.open('GameOver.html','_self',false)
				
				
			}
		    
			}, 1);
			
			
			
			