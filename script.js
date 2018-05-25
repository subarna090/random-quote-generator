var text;
var author;
function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#quote").html("<p id='random_quote' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
          text=response.quoteText;
          author=response.quoteAuthor; 
      }
  });
}

$(function() {
  randomQuote();
});

$("#quoteButton").click(function(){
  randomQuote();
});

$("#tweetButton").click(function(){
    $("#tweet").attr("href", 'https://twitter.com/intent/tweet?text=' + text + " ~ " + author + " ~ " );
  });

