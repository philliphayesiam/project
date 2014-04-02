/*Define initial variables and other small arrays for fake backend stuff*/


var myCodes=new Array("12345abc","67890def","abc12345");
var myCodesCreditsRemaining=new Array("25","4","0");
var myUsernames=new Array("phayes","fewd","h2hadmin");
var myPasswords=new Array("password","password","password");
var lessonsIveClicked = 0;

/* Final FEWD page click to iterate through the lessons learned and things demonstrated on the site */
$('.learned').on('click', function(e) {
    e.preventDefault();
    /*console.log ("lesson was clicked " + lessonsIveClicked);*/
    lessonsIveClicked++;
    /*console.log ("incremented to " + lessonsIveClicked);*/
    if (lessonsIveClicked == 9) {
      /*console.log ("I am at the 9th position, time to head back");*/
      $(this).find(':nth-child('+(lessonsIveClicked)+')').slideDown('1000');
      var reverseLessons;
      for (reverseLessons=lessonsIveClicked; reverseLessons>0; reverseLessons--) {
        /*console.log("My revers lessons number is" + reverseLessons);*/
        $(this).find(':nth-child('+(reverseLessons)+')').slideUp(10000);
      }
      lessonsIveClicked=0;
    }
    else {
      $(this).find(':nth-child('+(lessonsIveClicked)+')').slideDown('1000');
    }
});

/* Verification of coded entered on main splash page.  Checks against array and displays a message accordingly */
$('#h2hCheck').on('click', function(e) {
    e.preventDefault();
    var codeFound = 0;
    /*console.log ("The verify button was clicked");*/
    var textInput = $('[name="h2hItem"]');
    var textInputValue = textInput.val();
    /*console.log (textInputValue);*/
    for (var i in myCodes) {
      if (textInputValue == myCodes[i]) {
        /*console.log ("Remaining Credits for " + myCodes[i] + " are " + myCodesCreditsRemaining[i]);*/
        $('#codeCheckResult').html("Credits remaining for " + myCodes[i] + ": " + myCodesCreditsRemaining[i]);
        $('#codeCheckResult').show();
        textInput.val('');
        textInput.focus();
        codeFound = 1;
      }
    }
    if (codeFound == 0) {
      /*console.log ("code not found " + textInputValue);*/
      $('#codeCheckResult').html("Invalid Code, " + textInputValue + ", try again.");
      $('#codeCheckResult').show();
    }
});

/* Login for users on the sign up page.  See if they are a valid user and display a message accordingly */
$('#loginSubmit').on('click', function(e) {
    e.preventDefault();
    var userFound = 0;
    /*console.log ("The Submit button was clicked");*/
    var textInput = $('[name="loginUsername"]');
    var textInputPassword = $('[name="loginPassword"]');
    var textInputValue = textInput.val();
    var textInputPasswordValue = textInputPassword.val();

    /*console.log (textInputValue + " was the username I got");*/
    for (var i in myUsernames) {
      if (textInputValue == myUsernames[i] && textInputPasswordValue == myPasswords[i]) {
        /*console.log ("username found " + myUsernames[i] + " and password is " + myPasswords[i]);*/
        alert("successful login with " + myUsernames[i]);
        textInput.val('');
        textInputPassword.val('');
        textInput.focus();
        userFound = 1;
      }
    }
    if (userFound == 0) {
      /*console.log ("username/password combination not found " + textInputValue);*/
      alert ("username/password combination not found " + textInputValue);
    }
});

/* Navigation of the entire site is handled here on a switch */
$('ul.navbar li a').on('click', function(e) {
    e.preventDefault();
    var navClicked = $(this).html();
    clearParagraphs();
    $('ul.navbar').children().removeClass("navSelected");
    $('ul.navbar li').children().removeClass("navSelected");

    $(this).toggleClass("navSelected", true);
    switch (navClicked) {
      case 'Home':
        /*console.log ("Home was clicked");*/
        $('.codeCheck').show();
        $('html').css('background-image','url(img/cupbw.jpg)');
        $('#defaultParagraph').show();
        $('.homeSubParagraph').show();
        $('#h2hEntry').show();
        $('#h2hCheck').show();
      break;

      case 'Buy H2H Credits':
        /*console.log ("Buy h2h credits was clicked");*/
        $('html').css('background-image','url(img/kidgive.jpg)');
        $('#buyParagraph').show();
        $('#buySubParagraph').show();
        $('.purchaseTable').show();
      break;

      case 'Sign In':
        /*console.log ("Sign In was clicked");*/
        $('html').css('background-image','url(img/strooper.jpg)');
        $('#signInParagraph').show();
        $('#loginUsername').show();
        $('#loginPassword').show();
        $('#loginSubmit').show();
        $('.codeCheck').hide();
        $('.signInCheck').show();
      break;

      case 'About':
        /*console.log ("About was clicked");*/
        $('html').css('background-image','url(img/buildhouse.jpg)');
        $('#aboutParagraph').show();
      break;

      case 'FEWD':
        /*console.log ("FEWD was clicked");*/
        $('html').css('background-image','url(img/ladieshelp.jpg)');
        $('#fewdParagraph').show();
        $('.learned').show();
      break;
    }
});


/* A reset function so to speak */
function clearParagraphs() {
  $('#defaultParagraph').hide();
  $('#aboutParagraph').hide();
  $('#buySubParagraph').hide();
  $('#buyParagraph').hide();
  $('.homeSubParagraph').hide();
  $('#buySubParagraph').hide();
  $('#fewdParagraph').hide();
  $('#h2hEntry').hide();
  $('#h2hCheck').hide();
  $('#signInParagraph').hide();
  $('#loginUsername').hide();
  $('#loginPassword').hide();
  $('#loginSubmit').hide();
  $('.codeCheck').hide();
  $('.signInCheck').hide();
  $('.purchaseTable').hide();
  $('.learned').hide();
  $('#codeCheckResult').hide();
}
