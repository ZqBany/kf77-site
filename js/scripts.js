/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

(function() {
    "use strict";
  
    /**
     * Animation on scroll initialization
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    });

    window.addEventListener('DOMContentLoaded', event => {

      // Navbar shrink function
      var navbarShrink = function () {
          const navbarCollapsible = document.body.querySelector('#mainNav');
          if (!navbarCollapsible) {
              return;
          }
          if (window.scrollY === 0) {
              navbarCollapsible.classList.remove('navbar-shrink')
          } else {
              navbarCollapsible.classList.add('navbar-shrink')
          }
          const topSection = document.body.querySelector('#top');
          var tmp = 40 - window.scrollY
          if (tmp < 0 || window.getComputedStyle(topSection).display === 'none') {
            tmp = 0
          }
          navbarCollapsible.style.marginTop = tmp + "px";
  
      };
  
      // Shrink the navbar 
      navbarShrink();
  
      // Shrink the navbar when page is scrolled
      document.addEventListener('scroll', navbarShrink);
  
      // Activate Bootstrap scrollspy on the main nav element
      const mainNav = document.body.querySelector('#mainNav');
      const hero = document.body.querySelector('#hero');
      if (mainNav) {
          new bootstrap.ScrollSpy(document.body, {
              target: '#mainNav',
              rootMargin: '0px 0px -40%',
          });
          hero.style.paddingTop = mainNav.offsetHeight + 'px';
      };
  
      // Collapse responsive navbar when toggler is visible
      const navbarToggler = document.body.querySelector('.navbar-toggler');
      const responsiveNavItems = [].slice.call(
          document.querySelectorAll('#navbarResponsive .nav-link')
      );
      responsiveNavItems.map(function (responsiveNavItem) {
          responsiveNavItem.addEventListener('click', () => {
              if (window.getComputedStyle(navbarToggler).display !== 'none') {
                  navbarToggler.click();
              }
          });
      });

      const personDetailsItems = [].slice.call(
        document.querySelectorAll('.person-details')
      );

      personDetailsItems.map(function (personDetailItem) {
          personDetailItem.addEventListener('shown.bs.collapse', () => {
            personDetailItem.scrollIntoView();
          });
      });  
  });
  })()