
var Resume = {

  init : function() {
    
    $(".nav-list li").click(function (event) {
    	Resume.handleNavSelect(event);
    });

    $("#tmwModal").modal({show: false});
    $("#gazelleModal").modal({show: false});
    $("#bisModal").modal({show: false});
    $("#rtnModal").modal({show: false});
    $("#tmw, #gazelle, #bis, #rtn").click(function (event) {
      var idString = "#" + event.target.id + "Modal";
      $(idString).modal("show");
    })

    var sOffset = $(".sidebar-nav").offset().top;
    var shareheight = $(".sidebar-nav").height() + 43;
    $(window).scroll(function (event){
      var scrollYpos = $(document).scrollTop();
      if (scrollYpos > sOffset - shareheight) {
          $(".sidebar-nav").css({
              'top': '61px',
              'position': 'fixed'
          });
      } else {
          $(".sidebar-nav").css({
              'top': 'auto',
              'position': 'relative'
          });
      }
    });

  },

  handleNavSelect : function(event) {

  	// remove class from elements
  	$(".nav-list li").each(function (index, elementLI) {
  		$(elementLI).removeClass("active");
  	})

  	// add active class to selected element
  	$(event.target.parentElement).addClass("active");	
  }



};

$(document).ready(Resume.init);