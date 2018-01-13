$(document).ready(function($) {
    
    step = $(".form-wrap").children(".form-wrap__step");
    // $(step[0]).show();
    now_step = 0;

    $(".next").click(function(){
			$('.twoblock-flex__right').addClass('open')
			$('.form-wrap__step').addClass('open')
			$('.footer').addClass('open')
			$('.overlay').addClass('start')
			if (now_step == step.length-2) { 
				$('.block_p').hide();
				$('.twoblock-flex__right').addClass('last')
				$('.overlay').removeClass('start')
				$('.overlay').addClass('last')

			}
    		now_step++; 
			stepReplace(now_step);
			 
	});

    $('.st-2').click(function(event) {
    	if($(this).is(':checked')) {
    		$('.next').show();
    		number = $(this).attr('data-precent')
    		bukva = $(this).attr('data-variant')
    		$('.overlay').addClass('active')
    		$('.block_p p span').text(bukva)
    		$('.block_p').show();
    		$('.precent h2').animate({ num: number - 5 }, {
    			duration: 200,
    			step: function (num){
        			this.innerHTML = (num + 5).toFixed(0) + '%'
    				}
				});
    	}
    });


    function stepReplace(i) {
		$(step).hide();
		$(step[i]).show();

	}

	$('form').each(function() {
        var form = $(this),
            subbtn = form.find('.subbut');
        	form.find('.pole').addClass('empty');

        function inputCheck() {
            form.find('.pole').each(function() {
                if ($(this).val() != '') {
                    $(this).removeClass('empty');
                } else {
                    $(this).addClass('empty');
                }
            });
        }

        function pEmpty() {
            form.find('.empty').addClass('error');
            setTimeout(function() {
                form.find('.empty').removeClass('error');

            }, 500);
        }

        var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
        function valid() {
            namei = form.find('.imia')
            pass = form.find('.password')
            mail = form.find('.email');

            if (namei.val() != '') {
        		namei.removeClass('error')
        	} else {
        		namei.addClass('error')
        		namei.val('Введите свое имя')
            	setTimeout(function() {
                	namei.removeClass('error');
                	namei.val('')
           	 	}, 500);
        	}


            if (pass.val() != '') {
        		pass.removeClass('error')
        	} else {
        		pass.addClass('error')
        		pass.attr('type', pass.attr('type') === 'password' ? 'text' : 'password');
        		pass.val('Придумайте новый пароль')
            	setTimeout(function() {
                	pass.removeClass('error');
                	pass.attr('type', pass.attr('type') === 'password' ? 'text' : 'password');
                	pass.val('')
           	 	}, 500);
        	}


        if (mail.val() != '') {
        if (mail.val().search(pattern) == 0) {
        	mail.removeClass('error')
        } else {
        	mail.addClass('error')
        	mail.val('Неверный формат e-mail')
            setTimeout(function() {
                mail.removeClass('error');
                mail.val('')
            }, 500);
        }
    } else {
    	mail.val('Введите e-mail')
            setTimeout(function() {
                mail.removeClass('error');
                mail.val('')
            }, 500);
    }
        }


        setInterval(function() {
            inputCheck();
            var lengthEmpty = form.find('.empty').length,
            	lengthError = form.find('.error').length
            if (lengthEmpty > 0 || lengthError > 0) {
                if (subbtn.hasClass('disabled')) {
                    return false
                } else {
                    subbtn.addClass('disabled')
                }
            } else {
                subbtn.removeClass('disabled')
            }
        }, 500);
        subbtn.click(function() {
            if ($(this).hasClass('disabled')) {
                valid()
                pEmpty()

                return false
            } else {
                $("form").submit(function(event) {
                    console.log('Отправлено')
                });
            }
        });
    });


});