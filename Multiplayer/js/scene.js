var loader = new THREE.ObjectLoader();
        loader.load("scene.json",function ( obj ) {
		scene.add( obj );
				 
        });