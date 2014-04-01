/*  Load Some fake data and arrays for coupon codes as well as sign in */
var myCodes=new Array("12345abc","67890def","abc12345");
var myCodesCreditsRemaining=new Array("25","4","0");
var myUsernames=new Array("phayes","fewd","h2hadmin");
var myPasswords=new Array("password","password","password");
var lessonsIveClicked = 0;

$('.learned').on('click', function(e) {
    e.preventDefault();
    console.log ("lesson was clicked " + lessonsIveClicked);
    lessonsIveClicked++;
    console.log ("incremented to " + lessonsIveClicked);
    if (lessonsIveClicked == 9) {
      console.log ("I am at the 9th position, time to head back");
      $(this).find(':nth-child('+(lessonsIveClicked)+')').slideDown('1000');
      var reverseLessons;
      for (reverseLessons=lessonsIveClicked; reverseLessons>0; reverseLessons--) {
        console.log("My revers lessons number is" + reverseLessons);
        $(this).find(':nth-child('+(reverseLessons)+')').slideUp(10000);
      }
      lessonsIveClicked=0;
    }
    else {
      $(this).find(':nth-child('+(lessonsIveClicked)+')').slideDown('1000');
    }

    /*$("#secondLesson" ).slideDown( "slow", function() {
        console.log("I am done");
    });*/
});

$('#h2hCheck').on('click', function(e) {
    e.preventDefault();
    var codeFound = 0;
    console.log ("The verify button was clicked");
    var textInput = $('[name="h2hItem"]');
    var textInputValue = textInput.val();
    console.log (textInputValue);
  /*Check the value entered against the "database" to see if the code is valid
    */
    for (var i in myCodes) {
      if (textInputValue == myCodes[i]) {
        console.log ("Remaining Credits for " + myCodes[i] + " are " + myCodesCreditsRemaining[i]);
        $('#codeCheckResult').html("Credits remaining for " + myCodes[i] + ": " + myCodesCreditsRemaining[i]);
        $('#codeCheckResult').show();
        textInput.val('');
        textInput.focus();
        codeFound = 1;
      }
    }
    if (codeFound == 0) {
      console.log ("code not found " + textInputValue);
      $('#codeCheckResult').html("Invalid Code, " + textInputValue + ", try again.");
      $('#codeCheckResult').show();
    }
});

$('#loginSubmit').on('click', function(e) {
    e.preventDefault();
    var userFound = 0;
    console.log ("The Submit button was clicked");
    var textInput = $('[name="loginUsername"]');
    var textInputPassword = $('[name="loginPassword"]');
    var textInputValue = textInput.val();
    var textInputPasswordValue = textInputPassword.val();

    console.log (textInputValue + " was the username I got");
  /*Check the value entered against the "database" to see if the code is valid
    */
    for (var i in myUsernames) {
      if (textInputValue == myUsernames[i] && textInputPasswordValue == myPasswords[i]) {
        console.log ("username found " + myUsernames[i] + " and password is " + myPasswords[i]);
        /* do something to the table to the right or soemthign $('span').html("Remaining Credits for " + myCodes[i] + " are " + myCodesCreditsRemaining[i]);
        $('span').toggleClass("visibleElement",true);*/
        alert("successful login with " + myUsernames[i]);
        textInput.val('');
        textInputPassword.val('');
        textInput.focus();
        userFound = 1;
      }
    }
    if (userFound == 0) {
      console.log ("username not found " + textInputValue);
      alert ("username not found " + textInputValue); /*put something in the html here */
    }
});

$('ul.navbar li a').on('click', function(e) {
    e.preventDefault();
    var navClicked = $(this).html();
    clearParagraphs();
    $('ul.navbar').children().removeClass("navSelected");
    $('ul.navbar li').children().removeClass("navSelected");

    $(this).toggleClass("navSelected", true);
    /*($(this).parent().addClass("navSelected");*/

    switch (navClicked) {
      case 'Home':
        console.log ("Home was clicked");
        $('.codeCheck').show();
        $('html').css('background-image','url(img/cupbw.jpg)');
        /*$('#defaultParagraph').toggleClass("visibleElement");
        $('#h2hEntry')toggleClass("visibleElement", true);
        $('#h2hCheck')toggleClass("visibleElement", true);*/
        $('#defaultParagraph').show();
        $('.homeSubParagraph').show();
        $('#h2hEntry').show();
        $('#h2hCheck').show();
      break;

      case 'Buy H2H Credits':
        console.log ("Buy h2h credits was clicked");
        $('html').css('background-image','url(img/kidgive.jpg)');
        /*$('#buyParagraph').toggleClass("visibleElement");*/
        $('#buyParagraph').show();
        $('#buySubParagraph').show();
        $('.purchaseTable').show();
      break;

      case 'Sign In':
        console.log ("Sign In was clicked");
        $('html').css('background-image','url(img/strooper.jpg)');
        /*$('#signInParagraph').toggleClass("visibleElement");
        $('#loginUsername').toggleClass("visibleElement");
        $('#loginPassword').toggleClass("visibleElement");
        $('#loginSubmit').toggleClass("visibleElement");*/
        $('#signInParagraph').show();
        $('#loginUsername').show();
        $('#loginPassword').show();
        $('#loginSubmit').show();
        $('.codeCheck').hide();
        $('.signInCheck').show();
      break;

      case 'About':
        console.log ("About was clicked");
        $('html').css('background-image','url(img/buildhouse.jpg)');
        /*$('#aboutParagraph').toggleClass("visibleElement");*/
        $('#aboutParagraph').show();
      break;

      case 'FEWD':
        console.log ("FEWD was clicked");
        $('html').css('background-image','url(img/ladieshelp.jpg)');
        /*$('#fewdParagraph').toggleClass("visibleElement");*/
        $('#fewdParagraph').show();
        $('.learned').show();
      break;
    }
});

function clearParagraphs() {
/*
  $('#defaultParagraph').toggleClass("visibleElement", false);
  $('#aboutParagraph').toggleClass("visibleElement", false);
  $('#signInParagraph').toggleClass("visibleElement", false);
  $('#buyParagraph').toggleClass("visibleElement", false);
  $('#few8dParagraph').toggleClass("visibleElement", false);
  $('#h2hEntry').toggleClass("visibleElement", false);
  $('#h2hCheck').toggleClass("visibleElement", false);
  $('#loginUsername').toggleClass("visibleElement", false);
  $('#loginPassword').toggleClass("visibleElement", false);
  $('#loginSubmit').toggleClass("visibleElement", false);
  $('.codeCheck').toggleClass("visibleElement", false);
*/
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
