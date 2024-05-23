const ani = ScrollReveal({
	distance: '35px',
	duration: 2200,
	reset: true
});
ani.reveal('.side-1', {
	delay: 500,
	origin: 'top'
});
ani.reveal('.side-2', {
	delay: 600,
	origin: 'bottom'
});
ani.reveal('.about-img', {
	delay: 500,
	origin: 'top'
});
ani.reveal('.about-text', {
	delay: 600,
	origin: 'bottom'
});
ani.reveal('.section-header', {
	delay: 500,
	origin: 'top'
});
ani.reveal('.services-content', {
	delay: 700,
	origin: 'bottom'
});
ani.reveal('.contact-content', {
	delay: 700,
	origin: 'bottom'
});
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	var scrollToTopBtn = document.getElementById("scrollToTopBtn");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollToTopBtn.style.display = "block";
	} else {
		scrollToTopBtn.style.display = "none";
	}
}

function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}