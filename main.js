// function scrollTo() {
	// document.body.scrollTop = 1000;
// };

// scrollTo();

var animation = bodymovin.loadAnimation({
	container: document.getElementById('lottie-1'), // Required
	path: './resources/char-jump-coffee.json', // Required
	renderer: 'svg', // Required
	loop: false, // Optional
	autoplay: true, // Optional
	name: "Hello World", // Name for future reference. Optional.
});

var animation = bodymovin.loadAnimation({
	container: document.getElementById('lottie-mob'), // Required
	path: './resources/char-jump-coffee.json', // Required
	renderer: 'svg', // Required
	loop: false, // Optional
	autoplay: true, // Optional
	name: "Hello World", // Name for future reference. Optional.
});