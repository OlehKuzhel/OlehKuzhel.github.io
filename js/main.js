jQuery(document).ready(function($) {

    $('.nextstr').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });

    $('.menu_a').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        $('#menu_pop').arcticmodal('close');
    });

    $('.close_m').click(function(event) {
       $('#menu_pop').arcticmodal('close');
    });


    $(".menua").click(function(a) {
        a.preventDefault(), 
        $("#menu_pop").arcticmodal({
            overlay: {
                    css: {
                        backgroundColor: '#c5a47e',
                        opacity: 1
                    }
            }
        })
        return false;
    });

$('.slider1 .sl_item').click(function(event) {
 
   var c = $('<div class="box-modal" id="pop_sl_'+ $(this).data('sl') +'" />');
                            // c.prepend('<div class="close_pop box-modal_close arcticmodal-close"><img src="img/close_zak.png" alt="close_zak"></div>');
                            c.prepend('<div class="flex_slide"><h2>'+ $(this).find('p').text() + '</h2>'+
                                '<div class="close_pop box-modal_close arcticmodal-close"><img src="img/close_zak.png" alt="close_zak"></div>'+
                                    '<div class="dva_fl">'+
   '<div class="left_img_sl"><img src="' + $(this).children('img').attr('src') +'" alt="bg"></div>'+
   '<div class="right_text_sl">'+
      '<p class="text_pop_sl">'+  $(this).data('info') + '</p>'+
       '<a href="#" class="knopka test" >Получить каталог</a>'+
   '</div>'+
'</div>'+
                                '</div>'
                                    

                                );
                            $.arcticmodal({
                                beforeOpen: function(data, el) {
         $(".test").click(function(a) {
        a.preventDefault(), $("#test").arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#ecf0f5',
                    opacity: 1
                }
            }
        })
        return false;
    });
    },
                                content: c
    });
});


    var isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    function stabilize() {

        $('section:not(:hidden)').each(function(index, el) {

            var eTop = $(this).offset().top;
            var posTop = eTop - $(window).scrollTop();

            if (posTop > -$(window).height() / 2 && posTop < $(window).height() / 2) {
                $("html, body").animate({
                    scrollTop: $(this).offset().top
                }, 250);
            }

        });

    }

    $("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function() {
        $("html, body").stop();
    });

    if (isMobile != true) {
        $(window).scroll(function() {

            clearTimeout($.data(this, 'scrollTimer'));

            $.data(this, 'scrollTimer', setTimeout(stabilize, 1500));

        });
    }

    $(window).scroll(function(event) {
        var sec_s = 1;
        var s = $(this).scrollTop();


        if (s > sec_s) {

            $('header').css({
                'background':'#ecf0f5',
                '-webkit-box-shadow':'0 5px 27px rgba(0, 0, 0, 0.1);',
                'box-shadow':'0 5px 27px rgba(0, 0, 0, 0.1)'
        });

            $('.text p').addClass('scrop');
            $('.phonekn').addClass('scr_p');
            $('.knopka_zakaz').addClass('scr_k');

            $('.logo').attr('src', 'img/logo_k.png')
            $('.menua img').attr('src', 'img/menu_k.svg')

        } else {
            $('header').css({
                'background':'transparent',
                '-webkit-box-shadow':'none',
                'box-shadow':'none'
        });
            $('.text p').removeClass('scrop');
            $('.phonekn').removeClass('scr_p');
            $('.knopka_zakaz').removeClass('scr_k');

            $('.logo').attr('src', 'img/logo.png')
            $('.menua img').attr('src', 'img/menu-icon.svg')
        }

    });

    $('.pager img').click(function(event) {
        var now_img =  $(this).parent().parent().find('.glav')
        now_img = now_img.attr('src')
        var this_img = $(this).attr('src')
        $(this).parent().parent().find('.glav').attr('src', this_img)
        $(this).attr('src',now_img)
    });

    $('.sl_bol').bxSlider({
        minSlides: 1,
        // slideWidth: 276,
        maxSlides: 1,
        slideMargin: 0,
        pager: false,
        speed: 500,
        nextSelector: '#sld3r',
        prevSelector: '#sld3l',
        moveSlides: 1
    });
     // if (isMobile != true) {
    $('.slider1').bxSlider({
        minSlides: 1,
        startSlide: 1,
        slideWidth: 276,
        maxSlides: 3,
        slideMargin: 30,
        pager: false,
        speed: 500,
        nextSelector: '#sld1r',
        prevSelector: '#sld1l',
        controls: true,
 		auto: false,
		moveSlides: 1
    });


     // $('.bxslider').bxSlider();
// var slideQty = slider.getSlideCount();
// console.log(slideQty)


    $('.slider2').bxSlider({
        minSlides: 1,
        startSlide: 1,
        slideWidth: 276,
        maxSlides: 3,
        slideMargin: 30,
        pager: false,
        speed: 500,
        nextSelector: '#sld2r',
        prevSelector: '#sld2l',
        controls: true,
 		auto: false,
		moveSlides: 1
    });



    $('.ofissl1').bxSlider({
    	nextSelector: '#sld4r',
        prevSelector: '#sld4l',
        slideWidth: 450,
        // startSlide: 1,
        slideMargin: 5,
        adaptiveHeight: true,
        captions: true,
        pager: true
    });
    $('.ofissl2').bxSlider({
    	nextSelector: '#sld5r',
        prevSelector: '#sld5l',
        slideWidth: 450,
        // startSlide: 1,
        slideMargin: 5,
        adaptiveHeight: true,
        captions: true,
        pager: true
    });
    $('.ofissl3').bxSlider({
    	nextSelector: '#sld6r',
        prevSelector: '#sld6l',
        slideWidth: 450,
        // startSlide: 1,
        slideMargin: 5,
        adaptiveHeight: true,
        captions: true,
        pager: true
    });
    if (isMobile != true) {
    $("body").addClass("loaded"), $("#test").arcticmodal("setDefault", {
        beforeOpen: function(a, b) {
            $("body,header").css({
                overflow: "hidden",
                "padding-right": "16px"
            }), $(b).closest(".arcticmodal-container_i").css("width", "100%")
        },
        afterOpen: function(a, b) {},
        beforeClose: function(a, b) {},
        afterClose: function(a, b) {
            $("body,header").css({
                overflow: "visible",
                "padding-right": "0px"
            })
        }
    })} 

    $(".zakaz_pop_k").click(function(a) {
        a.preventDefault(), 
       
        $("#zakaz_pop").arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#111',
                    opacity: 0.5
                }
            }
        })
        return false;
    });
$('.zakaz_pop_k_n').click(function(a) {
    a.preventDefault(), 
    $('#zakaz_pop' + $(this).data('body')).arcticmodal({
            overlay: {
                css: {
                   backgroundColor: '#c5a47e',
                        opacity: 1
                }
            }
        })
});



    $(".test").click(function(a) {
        a.preventDefault(), $("#test").arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#ecf0f5',
                    opacity: 1
                }
            }
        })
        return false;
    });



    var steps = $(".calc").children(".step");
    $(steps[0]).fadeIn(100);
    var current_step = 0;
    $('.kn_a').click(function(event) {
        if ($(this).hasClass('act')) {
            $(this).removeClass('act')
        } else {
            $(this).addClass('act');
        }
        $('.error').fadeOut();

    });
    $(".next_step").click(function() {



        if ($('.act_step .kn_a').hasClass('act')) {
            $(".back").show();
            current_step++;
            changeStep(current_step);

            var now = $('.skidka span').text();
            $('.skidka span').text(parseInt(now) + 625);
            $('.nom span').text(current_step + 1);
        } else {
            $('.error').fadeIn();
        };

        if (current_step == 7) {
            $('.bl_s_kn').css('display', 'none')
        }

        return false;

    });

    $('.rad').click(function(event) {

        $('.rad').removeClass('act')
        $(this).addClass('act');

        var vubor_step = $(this).children('input').attr('name');
        vubor_step = '.' + vubor_step;
        var vubor = $(this).children('input').val();

        $(vubor_step).val(vubor)


        return false;
    });

var $text4 = $('.step2'),
        $box4 = $('input:checkbox[name="step2[]"]');

    $box4.on('click change', function() {
        var values = [];

        $box4.filter(':checked').each(function() {
            values.push(this.value);
        });
        $text4.val(values.join(','));
    });
    var $text1 = $('.step3'),
        $box1 = $('input:checkbox[name="step3[]"]');

    $box1.on('click change', function() {
        var values = [];

        $box1.filter(':checked').each(function() {
            values.push(this.value);
        });
        $text1.val(values.join(','));
    });
    var $text2 = $('.step4'),
        $box2 = $('input:checkbox[name="step4[]"]');

    $box2.on('click change', function() {
        var values = [];

        $box2.filter(':checked').each(function() {
            values.push(this.value);
        });
        $text2.val(values.join(','));
    });
    var $text3 = $('.step5'),
        $box3 = $('input:checkbox[name="step5[]"]');

    $box3.on('click change', function() {
        var values = [];

        $box3.filter(':checked').each(function() {
            values.push(this.value);
        });
        $text3.val(values.join(','));
    });

    function changeStep(i) {
        $(steps).fadeOut(100);
        $(steps[i]).fadeIn(600);
        $(steps).removeClass('act_step')
        $(steps[i]).addClass('act_step')


    }

    //Кнопка назад
    $(".back").click(function(){
        if (current_step == 1) {
            $(this).hide();
            $('.nom span').text(current_step - 0);
        } else {
            $('.nom span').text(current_step);
        }

        var now = $('.skidka span').text();
            $('.skidka span').text(parseInt(now) - 625);
            

        // $("form input[type=submit]").hide();
        // $("a.next").show();
        current_step--;
        changeStep(current_step);
    });



    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var mapOptions = {
            zoom: 17,
            scrollwheel: false,
            center: new google.maps.LatLng(55.770884, 37.633209),
            styles: [{
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                }, {
                    "color": "#000000"
                }, {
                    "lightness": 40
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#000000"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }, {
                    "weight": 1.2
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 21
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 29
                }, {
                    "weight": 0.2
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 19
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }]
            }]
        };

        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.770884, 37.633209),
            map: map,
            icon: {
                url: 'img/Point map.svg',
                origin: new google.maps.Point(-151, 0),
                origin: new google.maps.Point(0, 0),
                size: new google.maps.Size(60, 80),
            },
            title: 'Россия, г. Москва, ул.Сретенка 28'
        });
    }




});



