
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
	let loadingOverlay = document.getElementById('loading-overlay');
	var charAnimationDesktop = bodymovin.loadAnimation({
		container: document.getElementById('lottie-char'), // Required
		path: './resources/char-jump-coffee.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: false, // Optional
	});

	charAnimationDesktop.addEventListener('DOMLoaded', () => {
		loadingOverlay.classList.add('animate');
	});

	loadingOverlay.addEventListener('animationend', () => {
		charAnimationDesktop.play();
		document.getElementById('loading-overlay').style.display = 'none';
	});

	var charAnimationMobile = bodymovin.loadAnimation({
		container: document.getElementById('lottie-mob'), // Required
		path: './resources/char-jump-coffee.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: true, // Optional
	});
}
