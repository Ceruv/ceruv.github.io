let body= document.querySelector("body");
let mainHeader= document.querySelector("#mainHeader");

let bodyHeight = body.offsetHeight;

let mainHeaderHeight = mainHeader.offsetHeight;

//lastscroll
let lastScroll=0;

let mainHeaderHidden=false;

let hideHeader = function(){
	mainHeader.style.transform = `translate(0px,${-mainHeaderHeight*2}px)`
	mainHeaderHidden=true;	
}

let showHeader = function(){
	mainHeader.style.transform = `translate(0px,0px)`
	mainHeaderHidden=false;	
}


let scrollFunction= function(){
	if(window.pageYOffset< mainHeaderHeight && !mainHeaderHidden){
		return
		console.log("returned");
	}
	else if(window.pageYOffset< mainHeaderHeight && mainHeaderHidden){
		showHeader();
	}

	//If scrolling down and body offset is more than mainheader height and not hidden, translate mainheader Y by mainheader height
	else if(window.pageYOffset> mainHeaderHeight && lastScroll<window.pageYOffset && !mainHeaderHidden){
		hideHeader();
	}
	//If scrolled up, reveal headerbar
	else if(window.pageYOffset> mainHeaderHeight && lastScroll>window.pageYOffset && mainHeaderHidden){
		showHeader();
	};

	lastScroll=window.pageYOffset;
}

window.onscroll=scrollFunction;
