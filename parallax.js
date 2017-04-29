"use strict";

/*
Author: Brian Dai
parallax.js file that creates the parallax effect
*/

(function() {

  //like window.onload
  //longer version same thing: $(document).ready(function() { ... });
  $(function() {
    //selector works like css selectors
    //can chain together methods
    $(window).scroll(updateBackground).resize(updateBackground);
    updateBackground();
  });

  //referenced https://ianlunn.co.uk/plugins/jquery-parallax/
  function updateBackground() {
    //document.getElementById("background").style.backgroundPosition = '0px ' + (window.pageYOffset * .4 - 100) + 'px';
    var element = $("#background");
    var eleTop = element.offset().top;
    var pos = $(window).scrollTop();
    var yPos = Math.round((pos - eleTop) * .4);

    // Check if totally above or totally below viewport
		if (eleTop + element.height() < pos || eleTop > pos + $(window).height()) {
			return;
		}

    element.css('background-position', '0px ' + yPos + 'px');
  }

})();
