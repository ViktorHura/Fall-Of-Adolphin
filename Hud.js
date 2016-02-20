function sethud(){
			
			document.getElementById('HUD').style.left ='0';
			document.getElementById('HUD').style.top ='0';
			
			document.getElementById('Crosshair').style.left = window.innerWidth / 2 - 25;
			document.getElementById('Crosshair').style.top = window.innerHeight / 2 - 25;
			document.getElementById('Crosshair').style.height = 50 + 'px';
			document.getElementById('Crosshair').style.width = 50 + 'px';
			
			
			
			
			document.getElementById('Play').style.left = window.innerWidth / 2 - 100;
		    document.getElementById('Play').style.top = window.innerHeight / 4;
		    document.getElementById('Play').style.height = 100 + 'px';
		    document.getElementById('Play').style.width = 200 + 'px';
			
				
			document.getElementById('dialog').style.zIndex = "-4";
			document.getElementById('HUD').style.zIndex = "1";
			document.getElementById('instructions').style.zIndex = "5";
		
			document.getElementById('Play').style.zIndex = "8";
			document.getElementById('Exit').style.zIndex = "8"
			
			document.getElementById('Exit').style.left = document.getElementById('Play').style.left;
		    document.getElementById('Exit').style.top = window.innerHeight / 4 + 150;
		    document.getElementById('Exit').style.height = 100 + 'px';
		    document.getElementById('Exit').style.width = 200 + 'px';
			
			document.getElementById('dialog').style.left = document.getElementById('dialogBg').style.left + 80;
			document.getElementById('dialog').style.top = window.innerHeight - 118;
			document.getElementById('dialog').style.zIndex = "3";
			
			document.getElementById('dialogBg').style.zIndex = "2";
			document.getElementById('dialogBg').style.left = 0;
			document.getElementById('dialogBg').style.top = window.innerHeight - 130;
			
			document.getElementById('Status').style.zIndex = "2";
			document.getElementById('Status').style.left = screen.width - 365;
			document.getElementById('Status').style.top = window.innerHeight - 130;
			
			document.getElementById('health').style.left = screen.width - 320;
			document.getElementById('health').style.top = window.innerHeight - 35;	
			document.getElementById('health').style.zIndex = "3";
			
			
			
			}
			
			sethud();
			

			var HUD = setInterval(function(){
			
		    document.getElementById('health').innerHTML = hp + '%';
			
			if (hp < 30){ document.getElementById('health').style.color = "red"; }
			else if (hp < 70){ document.getElementById('health').style.color = "yellow"; }
			
			sethud();
					
			}, 1);