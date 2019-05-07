var topics = [
  "music",
  "jazz",
  "rock n' roll",
  "guitar",
  "sax",
  "drums",
  "beats",
  "sing",
  "trumpet",
  "trombone",

]

function setup() {
  for (x=0; x<topics.length; x++) {
    renderButton(topics[x]);
  }
}

//button render function 
function renderButton(x) {
  var gifButton = $('<button>')
    gifButton.attr('data-topic', x);
    gifButton.addClass("btn btn-success");
    gifButton.text(x);
    $("#buttons").append(gifButton);
}

//ajax request & print gifs to document
$(document.body).on("click", ".btn", function() {
  var searchTerm = $(this).attr("data-topic");
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=nrylwrZG52SmIojDMTKvClp4ZWGL6osm&q=" + searchTerm + "&limit=10&offset=0&rating=R&lang=en"
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      console.log(response);

      var gifs = ''
      for (x=0; x<response.data.length; x++) {
        var gifResponse = response.data[x].images.original.url;
        var rating = response.data[x].rating;
        gifs += '<p>' + rating + '</p><img src="' + gifResponse + '">';
        
      }
      $("#gifs").html(gifs);
    });
});

//add button:
$("#submit").on('click', function() {
  var newButton = $("#userInput").val();
  renderButton(newButton)
});




