$(document).ready(function($) {

    $('.test_s2').click(function(e) {
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

    $('.sl_item').click(function(event) {

        var c = $('<div class="box-modal" id="pop_sl_' + $(this).data('sl') + '" />');
        
        c.prepend('<div class="flex_slide"><h2>' + $(this).find('p').text() + '</h2>' +
            '<div class="close_pop box-modal_close arcticmodal-close"><img src="img/close_zak.png" alt="close_zak"></div>' +
            '<div class="dva_fl">' +
            '<div class="left_img_sl"><img src="' + $(this).children('img').attr('src') + '" alt="bg"></div>' +
            '<div class="right_text_sl">' +
            '<p class="text_pop_sl">' + $(this).data('info') + '</p>' +
            '<a href="#" class="knopka zakaz_pop3" >Получить каталог</a>' +
            '</div>' +
            '</div>' +
            '</div>'


        );
        $.arcticmodal({
            beforeOpen: function(a, b) {
                $("body,header").css({
                    overflow: "hidden",
                    "padding-right": "16px"
                }), $(b).closest(".arcticmodal-container_i").css("width", "100%")
                $(".zakaz_pop3").click(function(a) {
                    a.preventDefault(), $("#zakaz_pop3").arcticmodal({
                        overlay: {
                            css: {
                                backgroundColor: '#000',
                                opacity: 0.6
                            }
                        }
                    });
                    yaCounter44576791.reachGoal('form-callback');
        ga('send','event','form','form-callback');
                    return false;
                });
            },
            afterOpen: function(a, b) {},
            beforeClose: function(a, b) {},
            afterClose: function(a, b) {
                $("body,header").css({
                    overflow: "visible",
                    "padding-right": "0px"
                })
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
                'background': '#ecf0f5',
                '-webkit-box-shadow': '0 5px 27px rgba(0, 0, 0, 0.1);',
                'box-shadow': '0 5px 27px rgba(0, 0, 0, 0.1)'
            });

            $('.text p').addClass('scrop');
            $('.phonekn').addClass('scr_p');
            $('.knopka_zakaz').addClass('scr_k');

            $('.logo').attr('src', 'img/logo_k.png')
            $('.menua img').attr('src', 'img/menu_k.svg')

        } else {
            $('header').css({
                'background': 'transparent',
                '-webkit-box-shadow': 'none',
                'box-shadow': 'none'
            });
            $('.text p').removeClass('scrop');
            $('.phonekn').removeClass('scr_p');
            $('.knopka_zakaz').removeClass('scr_k');

            $('.logo').attr('src', 'img/logo.png')
            $('.menua img').attr('src', 'img/menu-icon.svg')
        }

    });

    $('.pager img').click(function(event) {
        var now_img = $(this).parent().parent().find('.glav')
        now_img = now_img.attr('src')
        var this_img = $(this).attr('src')
        $(this).parent().parent().find('.glav').attr('src', this_img)
        $(this).attr('src', now_img)
    });


    $('.ofissl1').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<span class="str_r_s4" id="sld4r">',
  prevArrow: '<span class="str_l_s4" id="sld4l">'
});
    $('.ofissl2').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<span class="str_r_s5" id="sld5r">',
  prevArrow: '<span class="str_l_s5" id="sld5l">'
});
    $('.ofissl3').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<span class="str_r_s6" id="sld6r">',
  prevArrow: '<span class="str_l_s6" id="sld6l">'
});

   

$('.sl_bol').slick({
    dots: false,
  infinite: true,
  draggable:false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: 30,
  prevArrow: '<span class="str_l_s3" id="sld3l">', 
  nextArrow: '<span class="str_r_s3" id="sld3r">'
})
$('.slider1').slick({
  dots: false,
  infinite: true,
  draggable:false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: 30,
  prevArrow: '<span class="str_l_s2 slick-prev" id="sld1l"></span>',
  nextArrow: '<span class="str_r_s2 slick-next" id="sld1r"></span>',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        centerMode: true,
        centerPadding: '10px'
      }
    }]
});

$('.slider2').slick({
    draggable:false,
  dots: false,
  infinite: true,
  arrows:true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<span class="str_l_s2 slick-prev" id="sld2l"></span>',
  nextArrow: '<span class="str_r_s2 slick-next" id="sld2r"></span>',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        centerMode: true,
        centerPadding: '10px'
      }
    }]
});

    if (isMobile != true) {
        $("body").addClass("loaded"),

            $.arcticmodal("setDefault", {
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
            })
    }
$('.cssload-container').fadeOut(250);
    $(".zakaz_pop_k").click(function(a) {
        a.preventDefault(),

            $("#zakaz_pop").arcticmodal({
                overlay: {
                    css: {
                        backgroundColor: '#111',
                        opacity: 0.5
                    }
                }
            });
            yaCounter44576791.reachGoal('form-callback');
        ga('send','event','form','form-callback');
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
            });
            yaCounter44576791.reachGoal('form-callback');
        ga('send','event','form','form-callback');
    });



    $(".test").click(function(a) {
        $('.smena').val('form-test-out')
        a.preventDefault(), $("#test").arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#ecf0f5',
                    opacity: 1
                }
            }
        });
        yaCounter44576791.reachGoal('form-test-in');
        ga('send','event','form','form-test-in');
        return false;
    });

    $(".test_vtoroi").click(function(a) {

        $('.smena').val('form-test-out2')

        a.preventDefault(), $("#test").arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#ecf0f5',
                    opacity: 1
                }
            }
        });
        yaCounter44576791.reachGoal('form-test-in2');
        ga('send','event','form','form-test-in2');
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
    $(".back").click(function() {
        if (current_step == 1) {
            $(this).hide();
            $('.nom span').text(current_step - 0);
        } else {
            $('.nom span').text(current_step);
        }

        var now = $('.skidka span').text();
        $('.skidka span').text(parseInt(now) - 625);
        current_step--;
        changeStep(current_step);
    });




    $("form").submit(function() {
        var th = $(this);
        var track_event=$(this).find('input[name="event"]').val();
        $.ajax({
            type: "POST",
            url: "mail.php", 
            data: th.serialize()
        }).done(function() {

            yaCounter44576791.reachGoal(track_event);
            ga('send','event','form',track_event);
            $.arcticmodal('close');
            $('#thank').arcticmodal({
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
                },
                overlay: {
                            css: {
                                backgroundColor: '#000',
                                opacity: 0.6
                            }
                        }
            });
            // alert("Thank you!");
            setTimeout(function() {
              
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

   
});