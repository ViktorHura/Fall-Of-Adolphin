var dialogtime;

var sensitivity;
var fxvolume = 1;
var aa;


function getsettings(){
	if (document.cookie.replace(/(?:(?:^|.*;\s*)sensitivity\s*\=\s*([^;]*).*$)|^.*$/, "$1") != ''){
		sensitivity = document.cookie.replace(/(?:(?:^|.*;\s*)sensitivity\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		dialogtime = document.cookie.replace(/(?:(?:^|.*;\s*)dialogtime\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		fxvolume = document.cookie.replace(/(?:(?:^|.*;\s*)volume\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		aa = document.cookie.replace(/(?:(?:^|.*;\s*)aa\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	}
	else{
		sensitivity = 0.0015;
		dialogtime = 3000;
		fxvolume = 1;
		aa = false;
		document.cookie="dialogtime=" + 3000;
		document.cookie="sensitivity=" + 0.0015;
		document.cookie="volume=" + 1;
		document.cookie="aa=" + 0;
	}
	
	
	
	
}
getsettings();

var getset = setInterval(function(){
			
		 getsettings();
					
			}, 250);