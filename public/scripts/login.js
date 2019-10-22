
$(document).ready(function() {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  $(function() {
    $("#loginEmail").focus();
  });

  signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    $("#registerName").focus();
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    $("#loginEmail").focus();
  });

});


