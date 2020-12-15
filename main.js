
// Load functions
loadAnimations();
scrollListener();

function scrollListener() {
	el = document.getElementById('scroll-down-arrow');
	el.addEventListener('click', () => {
		console.log(document.getElementById('scroll-target'));
		document.getElementById('scroll-target').scrollIntoView({behavior: 'smooth'});
	});
};

function loadAnimations() {

	var charAnimationDesktop = bodymovin.loadAnimation({
		container: document.getElementById('lottie-char'), // Required
		path: './resources/char-jump-coffee.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: false, // Optional
	});

	var charAnimationMobile = bodymovin.loadAnimation({
		container: document.getElementById('lottie-mob'), // Required
		path: './resources/char-jump-coffee.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: true, // Optional
	});

	const loadingOverlay = document.getElementById('loading-overlay');
	const fistLoadLine = document.getElementById('fist-load-line');

	console.log(fistLoadLine);

	let fll = false;

	setTimeout(function(){
		 fll = true; 
	}, 2000);
	
	charAnimationDesktop.addEventListener('DOMLoaded', () => {
		if(fll){
			loadingOverlay.classList.add('animate');
		} else {
			setTimeout(function(){
				loadingOverlay.classList.add('animate');
			}, 1500);
		}
	});

	loadingOverlay.addEventListener('animationend', () => {
		charAnimationDesktop.play();
		document.getElementById('loading-overlay').style.display = 'none';
	});
}
