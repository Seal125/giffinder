// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
    function appendImageToBody(srcURL) {
        $(".text-center").html("<img src=" + srcURL + ">");
}

    function callGiphyAPIWithSearchTerm(searchTerm) {
        $.ajax({
            url: "https://api.giphy.com/v1/stickers/search?q=" + searchTerm +"&api_key=dc6zaTOxFJmzC",
            method: "GET",
            success: function(response) {
                var random = Math.floor(Math.random() * Math.floor(response.data.length));
                var url = response.data[random].images.original.url;
                appendImageToBody(url);
      },
    }); 
}

    $("button").click(function(){
        var searchTerm = $("input").val();
        callGiphyAPIWithSearchTerm(searchTerm);
});
  
  $("#srch-term").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#button").click();
    }
});
});
