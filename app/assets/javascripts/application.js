// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {
  window.sr = ScrollReveal({ reset: true });

// Customizing a reveal set
  sr.reveal('.mov_left', { duration: 1000, origin: 'left',mobile: true });
  sr.reveal('.mov_right', { duration: 1000, origin: 'right',mobile: true });

  sr.reveal('.foo', { duration: 2000, mobile: true });
  sr.reveal('.foo2', { duration: 2100,delay: 400, mobile: true });
  sr.reveal('.foo3', { duration: 2200,delay: 600, mobile: true });
  sr.reveal('.foo4', { duration: 2300,delay: 800, mobile: true });

  sr.reveal('.foo5', { duration: 2000,delay: 100, mobile: true });
  sr.reveal('.toto', { duration: 2000,scale: 0.9,delay: 600, mobile: true });
  sr.reveal('.c1', { duration: 1000,mobile: true });
  sr.reveal('.c2', { duration: 1000,mobile: true });
  sr.reveal('.c3', { duration: 1000,delay: 400,mobile: true });
  sr.reveal('.c4', { duration: 1000,delay: 600,mobile: true });
  sr.reveal('.c5', { duration: 1000,delay: 800,mobile: true });
  sr.reveal('.c6', { duration: 1000,delay: 1000,mobile: true });
});
