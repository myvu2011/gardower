/*Slider Revolution*/
(function ($) {
    /*USE STRICT*/
    "use strict";
    /*Slider Revolution For Homepage1-3-4*/
    try {
		/* initialize the slider based on the Slider's ID attribute FROM THE WRAPPER above */
		jQuery('#rev_slider_1').show().revolution({

		   	responsiveLevels: [1200, 992, 768, 576],

	        autoHeight: 'on',
            sliderLayout: 'fullscreen',
		 		
		    /* [DESKTOP, LAPTOP, TABLET, SMARTPHONE] */		    
		    navigation: {

		        arrows: {
		            enable: true,
		            style: 'metis',
		            hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 576,

		        },

		        bullets: {
		            enable: false,
		            style: 'hermes',
		            hide_onleave: false,
		            h_align: "center",
		            v_align: "bottom",
		            h_offset: 0,
		            v_offset: 20,
		            space: 5
		        }
		    }
		});			
    } catch(err) {
        console.log(err);
    }
    /*End Slider Revolution For Homepage1-3-4*/

    /*Slider Revolution For Homepage2*/
    /* initialize the slider based on the Slider's ID attribute FROM THE WRAPPER above */
        jQuery('#rev_slider_2').show().revolution({

            responsiveLevels: [1200, 992, 768, 576],

            gridheight:[588, 588, 750, 950],
                
            /* [DESKTOP, LAPTOP, TABLET, SMARTPHONE] */         
            navigation: {

                arrows: {
                    enable: true,
                    style: 'metis',
                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 576,

                },

                bullets: {
                    enable: false,
                    style: 'hermes',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        }); 
    /*End Slider Revolution For Homepage2*/  

})(jQuery);
/*End Slider Revolution*/


(function ($) {
    /*USE STRICT*/
    "use strict";
    /*Header Scroll*/
    try {
	/*Fixed Navbar When Scroll*/
        var navbarFix = $("#js-navbar-fixed");
        var headerOffset = navbarFix.offset().top + 1;
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > headerOffset) {
                navbarFix.addClass('fixed').removeClass("unfixed");
            } else {
                navbarFix.addClass('unfixed').removeClass("fixed");
            }
        });

        var navbarSelect = document.querySelector("#js-navbar-fixed.section-navbar-4, #js-navbar-fixed.section-navbar-6");

        if (navbarSelect) {
            var headroom  = new Headroom(navbarSelect, {
                classes : {
                    /*when element is initialised*/
                    initial : "headroom",
                    /*when scrolling up*/
                    pinned : "headroom--pinned",
                    /*when scrolling down*/
                    unpinned : "headroom--unpinned",
                    /* when above offset*/
                    top : "unfixed",
                    /*when below offset*/
                    notTop : "headroom--not-top",
                    /*when at bottom of scoll area*/
                    bottom : "headroom--bottom",
                    /*when not at bottom of scroll area*/
                    notBottom : "headroom--not-bottom"
                }
            });
            /*Initialise*/
            headroom.init();
        }
    } catch(err) {
        console.log(err);
    }
    /*End Header Scroll*/

    /*Mobile Menu*/
    /*Hamburger Button*/
    $('.hamburger').on("click", function () {
        $(this).toggleClass("is-active");
        $('.au-navbar-mobile').slideToggle(200, 'linear');
    });
    /*Navbar menu dropdown*/
    $('.au-navbar-mobile .au-navbar-menu .drop .drop-link').on('click', function (e) {
        $(this).siblings('.drop-menu').slideToggle(200, 'linear');
        $(this).toggleClass('clicked');
        e.stopPropagation();
    });
    /*End Mobile Menu*/

    /* Video*/
    $.fn.bmdIframe = function( options ) {
        var self = this;
        var settings = $.extend({
            classBtn: '.bmd-modalButton',
            defaultW: 640,
            defaultH: 360
        }, options );
      
        $(settings.classBtn).on('click', function(e) {
          var allowFullscreen = $(this).attr('data-bmdVideoFullscreen') || false;
          
          var dataVideo = {
            'src': $(this).attr('data-bmdSrc'),
            'height': $(this).attr('data-bmdHeight') || settings.defaultH,
            'width': $(this).attr('data-bmdWidth') || settings.defaultW
          };
          
          if ( allowFullscreen ) dataVideo.allowfullscreen = "";
          
          // stampiamo i nostri dati nell'iframe
          $(self).find("iframe").attr(dataVideo);
        });
      
        // se si chiude la modale resettiamo i dati dell'iframe per impedire ad un video di continuare a riprodursi anche quando la modale è chiusa
        this.on('hidden.bs.modal', function(){
          $(this).find('iframe').html("").attr("src", "");
        });
      
        return this;
    };
    jQuery("#modal-video").bmdIframe();
    /*End Video*/

    /*Back To Top Button*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
          $('#back-to-top').fadeIn('slow');
        } else {
          $('#back-to-top').fadeOut('slow');
        }
      });
    $('#back-to-top').on( 'click', function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });     
    /*End Back To Top Button*/
    
})(jQuery);



(function ($) {
    /*USE STRICT*/
    "use strict";
    /*Owl Carousel 2 hp-1*/
    try {
        /* initialize the slider based on the Slider's ID attribute FROM THE WRAPPER above */
        $('#client').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                576:{
                    items:2
                    
                },
                992:{
                    items:2
                }
            }
        })
    } catch(err) {
        console.log(err);
    }
    /*End Owl Carousel 2 hp-1*/

    /*Owl Carousel 2 hp-2*/
    try {
        /* initialize the slider based on the Slider's ID attribute FROM THE WRAPPER above */
        $('#client-2').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            navText: [ 
                        "<i class='fas fa-chevron-left'></i>",
                        "<i class='fas fa-chevron-right'></i>"],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                576:{
                    items:1
                    
                },
                992:{
                    items:1
                }
            }
        })
    } catch(err) {
        console.log(err);
    }
    /*End Owl Carousel 2 hp-2*/




    /*Request A Quote*/
    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "au-select":*/
    x = document.getElementsByClassName("au-select");
    for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 0; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                for (k = 0; k < y.length; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
          /*when the select box is clicked, close any other select boxes,
          and open/close the current select box:*/
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
      except the current select box:*/
      var x, y, i, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
    /*End Request A Quote*/

        /*Isotope Section*/
        $(window).on('load', function() {
            var $topeContainer = $('.isotope-grid');
            var $filter = $('.filter-tope-group');

            /*filter items on button click*/
            $filter.each(function () {
                $filter.on('click', 'li span', function () {
                    var filterValue = $(this).attr('data-filter');
                    $topeContainer.isotope({filter: filterValue});
                });
                var $buttonGroup = $('.filter-tope-group');
                $buttonGroup.on('click', 'li', function () {
                    $buttonGroup.find('.active').removeClass('active');
                    $(this).addClass('active');
                });
            });
            /*init Isotope*/
            var $grid = $topeContainer.each(function () {
                $(this).isotope({
                    itemSelector: '.isotope-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.isotope-item'
                    }
                });
            });
        });
        /*End Isotope Section*/

        /*Services List*/
        $('.services-detail-content-1-list ul li').on('click', function() {
        $('.services-detail-content-1-list ul').find('.active').removeClass("active");
        $(this).addClass("active");
        });
        /*End Services List*/

        /*Owl Carousel Image Thumbnails*/
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            loop: true,
            items: 1,
            thumbs: true,
            thumbImage: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item'
        });
        /*End Owl Carousel Image Thumbnails*/

        /*Images Loader*/
        $(window).on('load', function() {
        $('.images-preloader').fadeOut();
        });
        /* End Images Loader*/

})(jQuery);

 

