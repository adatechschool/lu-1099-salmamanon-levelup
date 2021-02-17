var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function reqListener () {
  console.log(this.responseText);
}

var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', 'https://www.affirmations.dev/', true);
req.onload  = reqListener;
req.send(null);

// remplacer XLMHttpRequest par la méthode fetch()
//avec une promise

const fetch = require("node-fetch");

fetch('https://www.affirmations.dev/')
.then(function(reponse) {
  return reponse.json();
})
.then(function(ok) {
  console.log(ok);
});

//avec async/await

async function affirmations(){
  let sayaffirmation = await fetch('https://www.affirmations.dev/');
  let data = await sayaffirmation.json();
  console.log(data);
}
affirmations();