{
  "title": "Log out",
  "description": "Placeholder for the Web-based log-out page"
}

<meta name="viewport" content="width=device-width, initial-scale=1">

<style type="text/css">

html { 
font-family: sans-serif; 
}

body {

overflow:auto;
background-color: #757473;

}

#cont {

text-align:center;

}

button {

background-color:#757473;
border: 1px solid black;
color: white;
font-weight:bold;
padding: 2px 25px;
text-align: center;
font-size: large;
text-decoration: none;
display: inline-block;

}

button:hover {

background-color:#00aeef;

}

a {


text-decoration:none;
color: white;

}
.grecaptcha-badge { visibility: hidden; }
</style>


<div id='cont'><br />
 <a id='LogOut' href='#'><button>Log out</button></a>
 <a id='Account' href='/account/' target='_blank'><button>Account</button></a>
</div>


<!-- TODO maybe use our own copy at /jquery-3.3.1.min.js -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.3/js.cookie.min.js"></script>

<script>

  $('#LogOut').click(function () {
    var data = Cookies.getJSON('bfx-user');
    // Need the leading dot in domain to match what Qt Web Engine does:
    // "If cookie specifies a QNetworkCookie::domain() that does not start with a dot,
    //  a dot is automatically prepended. (https://doc.qt.io/qt-5/qwebenginecookiestore.html#setCookie)
    Cookies.remove('bfx-user', { domain: '.borisfx.com' });
    $.post('https://backend.borisfx.com/logout', {
      email: data.email,
      token: data.token,
    })
    .done(function (data) {
      window.location = '../in-app_web-based_login-page/'
    });

  });

</script>
