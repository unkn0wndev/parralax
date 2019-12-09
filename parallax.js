var image = document.getElementsByClassName('thumbnail');
var image2 = document.getElementsByClassName('thumbnail2');
var image3 = document.getElementsByClassName('thumbnail3');

new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,2)'
});

new simpleParallax(image2, {
	orientation: 'left'
});

new simpleParallax(image3, {
	orientation: 'right'
});
