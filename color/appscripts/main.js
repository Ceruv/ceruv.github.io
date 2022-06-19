console.log("main.js loaded");

let guideOpenIcon = document.getElementById("guide-nav-openIcon");
let guideBody = document.getElementById("guide-nav-body");
let guideContent = document.getElementById("guide-content-container");
let guideCloseIcon = document.getElementById("guide-nav-closeIcon");
let colorOpenIcon = document.getElementById("color-nav-openIcon");
let colorBody = document.getElementById("color-nav-body");
let colorContent = document.getElementById("color-palette-container");
let colorCloseIcon = document.getElementById("color-nav-closeIcon");



guideOpenIcon.addEventListener("click", function(e){
	guideBody.style.width = "30%";
	setTimeout(function(){guideContent.style.opacity = "1"}, 500);
});

guideCloseIcon.addEventListener("click", function(e){
	guideContent.style.opacity = "0";
	guideBody.style.width = "0%";
});

colorOpenIcon.addEventListener("click", function(e){
	colorBody.style.width = "30%";
	setTimeout(function(){colorContent.style.opacity = "1"}, 500);	
});

colorCloseIcon.addEventListener("click", function(e){
	colorContent.style.opacity = "0";
	colorBody.style.width = "0%";
});

