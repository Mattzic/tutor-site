// toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggle_btn = document.querySelector('.mobile-menu-toggle');
  const mobile_menu_items = document.querySelector('.mobile-menu-items');
  toggle_btn.addEventListener('click', function () {
    mobile_menu_items.classList.toggle('active');
  });
});

// Change navbar background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

// Testimonial
const testimonials = document.querySelectorAll('.testimonial');
const length = testimonials.length;
const btn_prev = document.querySelector('.prev');
const btn_next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let index = 0;

btn_prev.addEventListener('click', function () {
  if (index === 0) {
    return;
  } else {
    testimonials[index].classList.remove('active');
    dots[index].classList.remove('active');
    index--;
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
  }
});

btn_next.addEventListener('click', function () {
  if (index === length - 1) {
    return;
  } else {
    testimonials[index].classList.remove('active');
    dots[index].classList.remove('active');
    index++;
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
  }
});
