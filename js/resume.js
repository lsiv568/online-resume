
var Resume = {

  init : function() {
    
    $(".nav-list li").click(function (element) {
    	Resume.handleNavSelect(element);
    });

  },

  handleNavSelect : function(element) {

  	// remove class from elements
  	$(".nav-list li").each(function (index, elementLI) {
  		$(elementLI).removeClass("active");
  	})

  	// add active class to selected element
  	$(element.toElement.parentElement).addClass("active");	
  }



};

$(document).ready(Resume.init);