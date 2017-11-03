$(document).ready(function() {
      //This is a list of item strings that is going to be used to make buttons
      var gifs = ['trash','chair', 'table', 'coffee', 'laptop'];

      function createButtons (arrayOfGifs) {
            for (var i=0; i < arrayOfGifs.length;i++) {
                  var button = $('<button>');
                  button.addClass("giff")
                  button.attr("data-name", arrayOfGifs[i]);
                  button.text(arrayOfGifs[i]);
                  $('#gif-Buttons').append(button);
            }
      };

      

      $(document).on('click', ".giff", function() {
            console.log('i clicked a button')
      });

      createButtons(gifs)
})

var searchTerm = $("#gifaction").val();

//401
var queryURL = "https://api.giphy.com/v1/gifs/" + searchTerm + "api_key=dc6zaTOxFJmzC";


$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
            console.log(response);
    });
//Next, examine the console logged object to find the gif in key value pairs
//Use jQuery to connect to div with id gifs-appear-here



      // //Starts my count at 0
      // var giphyCount = 0;

      // //when user clicks the element with id add-giphy...
      // $("#add-giphy").on("click", function(event) {
      // event.preventDefault();

      // //...take input value from the html span with id gifaction
      // var giphyTask = $("#gifaction").val().trim();
      
      // //creates a p tag
      // var giphyItem = $("<p>");

      // //gives giphyItem element an id of item-#
      // giphyItem.attr("id", "item-" + giphyCount);

      // //formats giphyItem by appending a space and what was input to gifaction
      // giphyItem.append(" " + giphyTask);

      // //makes a button called giphyClose
      // var giphyClose = $("<button>");

      // //gives that button a giphyCount attribute
      // giphyClose.attr("data-to-do", giphyCount);

      // //prepends giphyClose button  before giphyItem
      // giphyItem = giphyItem.prepend(giphyClose);

      // //appends giphyItem to html div with id gifs-appear-here
      // $("#gifs-appear-here").append(giphyItem);

      // //clears gifaction search for next input
      // $("#gifaction").val("");

      // //increments the count for item-#
      // giphyCount++;
      // });

