{
  "title": "Log in",
  "description": "Placeholder for the Web-based log-in page"
}

<meta name="viewport" content="width=device-width, initial-scale=1">
<script src='https://www.google.com/recaptcha/api.js?render=6LeQ58wUAAAAAOO3JdYg_gxcIMwN9GXg8cWkz1i_'></script>

<style type="text/css">

html { 
font-family: sans-serif; font-size: large;
}

body {
overflow:auto;
background-color: #757473;
font-weight:bold;
}

input[type=text] {
  border: 1px solid black;
  padding: 2px;
}

input[type=password] {

  border: 1px solid black;
  padding: 2px;
}

#form {

text-align:center;
color: white;


}

a {

text-decoration:none;
color: white;

}

a:hover {

text-decoration:none;
color: #00aeef;

}

button {


background-color:#757473;
border: 1px solid black;
color: white;
padding: 2px 25px;
font-weight:bold;
font-size: large;
text-align: center;
text-decoration: none;
display: inline-block;

}

button:hover {

background-color:#00aeef;

}

#cont {

margin-top:12px;
text-align:center;

}
</style>


<form id="form">
  <label>Email</label>
  <input id="email" name="email" type="text" class="form-control" required />
  <label>Password</label>
  <input id="password" name="password" type="password" class="form-control" required />
  <button id="submit" type="submit" class="btn btn-lg btn-block">Login</button>
</form>

<div id='cont'>
 <a id='SignUp' href='/account/signup/' target='_blank'><button>Sign Up</button></a>
 <a id='Forgot' href='/account/forgot/' target='_blank'><button>Forgot Password</button></a>
</div>

<!-- TODO maybe use our own copy at /jquery-3.3.1.min.js -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.3/js.cookie.min.js"></script>

<script>

  // Copied from /layouts/_default/baseof.html
  function getQueryParameter(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  $(function () {

    $('#form').submit(function (e) {

      e.preventDefault();

      var email = $('#email').val();
      var password = $('#password').val();

      $('#submit').attr('disabled', 'disabled');
      $('#submit').text('Logging In...');
      grecaptcha.ready(function() {
          grecaptcha.execute('6LeQ58wUAAAAAOO3JdYg_gxcIMwN9GXg8cWkz1i_', {action: 'loginpage'}).then(function(token) {
              passed_token=token;
              $.ajax({
                url: 'https://backend.borisfx.com/loginv3',
                type:'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                  email: email,
                  password: password,
                  'g-recaptcha-response': passed_token
                }),
                success: function (data) {
                  data = JSON.parse(data);
                  // Need the leading dot in domain to match what Qt Web Engine does:
                  // "If cookie specifies a QNetworkCookie::domain() that does not start with a dot,
                  //  a dot is automatically prepended. (https://doc.qt.io/qt-5/qwebenginecookiestore.html#setCookie)
                  Cookies.set('bfx-user', data, { domain: '.borisfx.com' })
                  var redirect_url = getQueryParameter('redirect_url') || '../in-app_web-based_logout-page/'
                  window.location = redirect_url;
                },
                error: function(error) {
                  alert('Incorrect email/password combination. Please try again.')
                  $('#submit').removeAttr('disabled');
                  $('#submit').text('Log In');
                }
              })
          });
      });

    });

  });

</script>
