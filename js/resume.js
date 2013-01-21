
var Resume = {

  init : function() {
    
    $(".nav-list li").click(function (event) {
    	Resume.handleNavSelect(event);
    });

    $('.carousel').carousel({interval: 10000, pause: "hover"});

    $("#tmwModal").modal({show: false});
    $("#gazelleModal").modal({show: false});
    $("#bisModal").modal({show: false});
    $("#rtnModal").modal({show: false});
    $("#tmw, #gazelle, #bis, #rtn").click(function (event) {
      var idString = "#" + event.target.id + "Modal";
      $(idString).modal("show");
    })

//    var sOffset = $(".sidebar-nav").offset().top;
//    $(window).scroll(function (event){
//      var scrollYpos = $(document).scrollTop();
//      if (scrollYpos > sOffset) {
//          $(".sidebar-nav").css({
//              'top': '5px',
//              'position': 'fixed'
//          });
//      } else {
//          $(".sidebar-nav").css({
//              'top': 'auto',
//              'position': 'relative'
//          });
//      }
//    });

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