/**
 * Created by Jeanphill on 31/07/2016.
 */

<script>
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1074453999302765',
    xfbml      : true,
    version    : 'v2.5'
  });
};

(function(d, s, id)
{
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}
    (document, 'script', 'facebook-jssdk'));

</script>
