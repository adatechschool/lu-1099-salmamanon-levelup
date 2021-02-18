const http = require("http");
const fetch = require("node-fetch");

const host = 'localhost';
const port = 8000;
const requestListener = async function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    let affirmation = await affirmations()
    res.end(affirmation);
    res.end(postaffirmations)
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});



async function affirmations(){
   
    let sayaffirmation = await fetch('https://www.affirmations.dev/');
    try{
        let data = await sayaffirmation.json()
        return data['affirmation']

    } catch (error) {
        return `Error caught: ${error.message}`;
    }
};

async function postaffirmations(){
    let sendtojson = {"affirmation" : "Yes we can!!"}

    let reponse = await fetch('affirmations.json/', {
    method: 'post',
    headers: {
        'Accept' : 'application/json', 
        "Content-Type" : "application/json"
    },
    body: sendtojson,
});
const content = await reponse.json();
console.log(content)
}
//postaffirmations()