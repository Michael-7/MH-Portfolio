// function scrollTo() {
	// document.body.scrollTop = 1000;
// };

// scrollTo();

var animation = bodymovin.loadAnimation({
	container: document.getElementById('lottie'), // Required
	path: './resources/lottie-leg.json', // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
	name: "Hello World", // Name for future reference. Optional.
  })