var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function get(url, success, error) {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            if (req.status === 200) {
                success(req.responseText);
            } else {
                error(req);
            }
        }
    }
    req.open('GET', url, true);
    req.send();
}

function getCat() {
    get('https://api.thecatapi.com/v1/images/search?format=json', 
    function(response) {
        var cat = JSON.parse(response);
        console.log(cat[0]['url']);
    },
    function (error) {
        console.error(error);
    })
}

getCat();