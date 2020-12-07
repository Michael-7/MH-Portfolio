
// Load functions
scrollListener();
loadAnimations();

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

	setTimeout(function(){ 
		document.getElementById('loading-overlay').style.display = 'none';
		charAnimationDesktop.play();
	}, 2000);
	

	var charAnimationMobile = bodymovin.loadAnimation({
		container: document.getElementById('lottie-mob'), // Required
		path: './resources/char-jump-coffee.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: true, // Optional
	});
}
