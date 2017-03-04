//手动
/*var slideIndex=1;
showSlides(slideIndex);

function showSlides(n){
	var i;
	var slides=document.getElementsByClassName("myslide");
	var dots=document.getElementsByClassName("dot");
	// 第一种情况
	if(n>slides.length) {slideIndex=1}
	if(n<1) {slideIndex=slides.length}
	for(i=0;i<slides.length;i++){
		slides[i].style.display="none";
	}
	for(i=0;i<dots.length;i++){
		dots[i].className=dots[i].className.replace("active","");
	}
	slides[slideIndex-1].style.display="block";
	dots[slideIndex-1].className+=" active";
}
function currentSlide(n) {
	showSlides(slideIndex=n);
}
function plusSlide(n){
	showSlides(slideIndex+=n);
}



*/
//自动
var slideIndex=0;
showSlides();
function showSlides() {
	// body...
	var i;
	var slides=document.getElementsByClassName("myslide");
	for(i=0;i<slides.length;i++){
		slides[i].style.display="none";
	}
	slideIndex++;
	if(slideIndex>slides.length){slideIndex=1}
	slides[slideIndex-1].style.display="block";
	setTimeout(showSlides,2000);
}