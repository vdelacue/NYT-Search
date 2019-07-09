

var apiKey =  "key=1f8412f8-a516-467f-be58-3ec773fd36c0";
var apiURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-" + apiKey;

$.ajax({
    url: apiURL,
    method: "GET"
}).then(function(response) {
    console.log(response)

});