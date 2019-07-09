

var apiKey =  "key=rXJVNU62LGNJWrDACV6AfbWzNQ6pUEKM";
var apiURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-" + apiKey;

$.ajax({
    url: apiURL,
    method: "GET"
}).then(function(response) {
    console.log(response)

});