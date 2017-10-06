var giphyCount = 0;

    
    $("#add-giphy").on("click", function(event) {
      event.preventDefault();

      var giphyTask = $("#gifaction").val().trim();
      
      var giphyItem = $("<p>");

      giphyItem.attr("id", "item-" + giphyCount);

      giphyItem.append(" " + giphyTask);


      var giphyClose = $("<button>");

      giphyClose.attr("data-to-do", giphyCount);

      
      giphyItem = giphyItem.prepend(giphyClose);

      
      $("#gifs-appear-here").append(giphyItem);

      
      $("#gifaction").val("");

      giphyCount++;
    });

