/*
 *
 * login-register modal
 * Autor: Creative Tim
 * Web-autor: creative.tim
 * Web script: http://creative-tim.com
 * 
 */
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}
function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('Login with');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}

function loginAjax(){
    $.ajax({
        type: "POST",
        url: Routing.generate('fos_user_security_check'),
        dataType: 'json',
        data: {
            _username: $('#username-email').val(),
            _password: $('#password').val(),
            _remember_me: true,
            _csrf_token: $('#_csrf_token').val()
        }
    }).done(function(data) {
        if(data.success){
            hideLoginModal();
            $('#login').hide();
            $('#logout').show();
        }else{
            shakeModal();
        }

    }).fail(function(data) {
        shakeModal();
    });
}

function hideLoginForm(){
    $('#loginModal').fadeOut('fast',function(){
        $('.loginBox').fadeOut('fast');
        $('.registerBox').fadeOut('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeOut('fast');
        });

        $('.modal-title').html('Login with');
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function hideLoginModal(){
    hideLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');
    }, 230);

}

function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
             $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
             $('input[type="password"]').val('');
             setTimeout( function(){ 
                $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000 ); 
}

   