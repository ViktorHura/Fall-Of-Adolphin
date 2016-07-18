var dialogtime;
var sensitivity;
var fxvolume = 1;
var aa;

var W_key;
var A_key;
var S_key;
var D_key;
var Space_key;
var Shift_key;
var E_key;


function getsettings(){
	if (document.cookie.replace(/(?:(?:^|.*;\s*)sensitivity\s*\=\s*([^;]*).*$)|^.*$/, "$1") != ''){
		
		sensitivity = document.cookie.replace(/(?:(?:^|.*;\s*)sensitivity\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		dialogtime = document.cookie.replace(/(?:(?:^|.*;\s*)dialogtime\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		fxvolume = document.cookie.replace(/(?:(?:^|.*;\s*)volume\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		aa = document.cookie.replace(/(?:(?:^|.*;\s*)aa\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		
		W_key = document.cookie.replace(/(?:(?:^|.*;\s*)W_key\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		A_key = document.cookie.replace(/(?:(?:^|.*;\s*)A_key\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		S_key = document.cookie.replace(/(?:(?:^|.*;\s*)S_key\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		D_key = document.cookie.replace(/(?:(?:^|.*;\s*)D_key\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		
		Space_key = document.cookie.replace(/(?:(?:^|.*;\s*)Space_key\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		Shift_key = document.cookie.replace(/(?:(?:^|.*;\s*)Shift_key\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		E_key = document.cookie.replace(/(?:(?:^|.*;\s*)E_key\s*\=\s*([^;]*).*$)|^.*$/, "$1");
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
	    W_key = 87;
        A_key = 65;
        S_key = 83;
        D_key = 68;
        Space_key = 32;
        Shift_key = 16;
        E_key = 69;
		document.cookie="W_key=" + 87;
		document.cookie="A_key=" + 65;
		document.cookie="S_key=" + 83;
		document.cookie="D_key=" + 68;
		document.cookie="Space_key=" + 32;
		document.cookie="Shift_key=" + 16;
		document.cookie="E_key=" + 69;
	}
	
	
	
	
}
getsettings();

var getset = setInterval(function(){
			
		 getsettings();
					
			}, 250);