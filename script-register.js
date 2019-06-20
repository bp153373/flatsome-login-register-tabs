<script type="text/javascript">
jQuery(document).ready( function($){
    var tabs =$('<div class="row login-tabs"><div class="col large-6 login active-tab"><a href="#login"><h3>Login</h3></a></div><div class="col large-6 register inactive-tab"><a href="#register"><h3>Register</h3></a></div></div>');
    var tab = $('#login-form-popup .pb-0');
    var register =$('#login-form-popup #customer_login .col-2');
    var login = $('#login-form-popup #customer_login .col-1');

    $(tab).removeClass('large-6').addClass('large-12');
    $(tabs).prependTo('#login-form-popup .account-container');
    $(login).addClass('active');
    $(register).addClass('inactive');

    $('.login-tabs .login').click( function() {
         $(login).removeClass('inactive').addClass('active');
         $(register).removeClass('active').addClass('inactive');
         $('.login-tabs .login').removeClass('inactive-tab').addClass('active-tab');
         $('.login-tabs .register').removeClass('active-tab').addClass('inactive-tab');
    });
    $('.login-tabs .register').click( function() {
         $(register).removeClass('inactive').addClass('active');
         $(login).removeClass('active').addClass('inactive');
         $('.login-tabs .register').removeClass('inactive-tab').addClass('active-tab');
         $('.login-tabs .login').removeClass('active-tab').addClass('inactive-tab');
    });
});
</script>
