      //Starts my count at 0
      var giphyCount = 0;

      //when user clicks the element with id add-giphy...
      $("#add-giphy").on("click", function(event) {
      event.preventDefault();

      //...take input value from the html span with id gifaction
      var giphyTask = $("#gifaction").val().trim();
      
      //creates a p tag
      var giphyItem = $("<p>");

      //gives giphyItem element an id of item-#
      giphyItem.attr("id", "item-" + giphyCount);

      //formats giphyItem by appending a space and what was input to gifaction
      giphyItem.append(" " + giphyTask);

      //makes a button called giphyClose
      var giphyClose = $("<button>");

      //gives that button a giphyCount attribute
      giphyClose.attr("data-to-do", giphyCount);

      //prepends giphyClose button  before giphyItem
      giphyItem = giphyItem.prepend(giphyClose);

      //appends giphyItem to html div with id gifs-appear-here
      $("#gifs-appear-here").append(giphyItem);

      //clears gifaction search for next input
      $("#gifaction").val("");

      //increments the count for item-#
      giphyCount++;
      });

