$('ul.navbar li a').on('click', function(e) {
    e.preventDefault();
    var navClicked = $(this).html();
    console.log(navClicked);
    var textInput = $('[name="toDoItem"]');
    var textInputValue = textInput.val

    /*if (navClicked == 'Sign In') {
        $('#signInParagraph').toggleClass("visibleParagraph");
        $('#defaultParagraph').toggleClass("visibleParagraph");
        $('html').css('background-image','url(img/strooper.jpg)');
    }*/
    clearParagraphs();
    switch (navClicked) {
      case 'Home':
        console.log ("Home was clicked");
        $('html').css('background-image','url(img/cupbw.jpg)');
        $('#defaultParagraph').toggleClass("visibleParagraph");
        $('#h2hEntry').toggleClass("visibleParagraph", true);
        $('#h2hCheck').toggleClass("visibleParagraph", true);
      break;

      case 'Buy H2H Credits':
        console.log ("Buy h2h credits was clicked");
        $('html').css('background-image','url(img/kidgive.jpg)');
        $('#buyParagraph').toggleClass("visibleParagraph");
      break;

      case 'Sign In':
        console.log ("Sign In was clicked");
        $('html').css('background-image','url(img/strooper.jpg)');
        $('#signInParagraph').toggleClass("visibleParagraph");
      break;

      case 'About':
        console.log ("About was clicked");
        $('html').css('background-image','url(img/buildhouse.jpg)');
        $('#aboutParagraph').toggleClass("visibleParagraph");
      break;

      case 'FEWD':
        console.log ("FEWD was clicked");
        $('html').css('background-image','url(img/ladieshelp.jpg)');
        $('#fewdParagraph').toggleClass("visibleParagraph");
      break;
    }
    /* Determine the menu item that was clicked
       Toggle the appropriate paragraph to be visibile
       Set the background to something else
       Make the input and verify button invisible
       Make the selected Navigation button be the same style as the on Hover with an entire box around it
    */

});

function clearParagraphs() {
  $('#defaultParagraph').toggleClass("visibleParagraph", false);
  $('#aboutParagraph').toggleClass("visibleParagraph", false);
  $('#signInParagraph').toggleClass("visibleParagraph", false);
  $('#buyParagraph').toggleClass("visibleParagraph", false);
  $('#fewdParagraph').toggleClass("visibleParagraph", false);
  $('#h2hEntry').toggleClass("visibleParagraph", false);
  $('#h2hCheck').toggleClass("visibleParagraph", false);

}

function toggleTheParagraph(id, para) {
       $('#'+'id').toggleClass('para');
}
      /*Create a list item with the text I entered, with a checkbox to the left
    alert("you are trying to submit" + textInputValue);

    var listItemToAdd = $('<li class='+ '"boxChecked"'+'><label><input type=' + '"checkbox"' + '/>'+ textInputValue + '</label><span>X</span></li>');
/* Add the list item to the list
    $('#theToDoList').append(listItemToAdd);
/* Update the amount of remaining items
    var amountChecked = $('input[type=checkbox]:checked');
    alert(amountChecked.length);
    $('h3').text(amountChecked.length);

  var input = $('[name="imageurl"]'),
      url = input.val();
  $('#target').attr('src',url);
  input.val('');
});

$('#theToDoList').on('click', ".boxChecked span", function(e) {
    /*Remove the item altogether

    $(this).parent().toggleClass('itemCompleted');
    $(this).parent().prop('checked', true);
    var amountChecked = $('input[type=checkbox]:checked');
    $('h3').text(amountChecked.length);
});

*/