const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Add animation on hover for contact items
const contactItems = document.querySelectorAll('.contact-item');

contactItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('animate');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('animate');
  });
});

document.addEventListener("DOMContentLoaded", function() {
	const icons = document.querySelectorAll(".icon");
  
	icons.forEach(icon => {
	  icon.addEventListener("click", function(e) {
		e.preventDefault();
		const link = this.parentNode.href;
		window.open(link, "_blank");
	  });
	});
  });
  
  function flipImage() {
	var image = document.querySelector('.flipping-image');
	image.classList.toggle('flip');
  }
  
  setTimeout(flipImage, 3000); // Flip the image after 3 seconds
  
