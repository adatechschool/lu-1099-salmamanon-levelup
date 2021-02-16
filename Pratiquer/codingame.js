/* Comsignes :
The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data*/

function job() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('hello world');
        }, 2000);
    })
};

job()
.then(function(data) {
    console.log(data);
});

/* Consignes : 
Your function must always return a promise
If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string) */

function job(data) {
    return new Promise(function(resolve, reject) {
        if (isNaN(data)) {
            reject("error")
        } else if (data%2 !== 0) {
            setTimeout(function() {
                resolve("odd")
            }, 1000)
        } else if (data%2 === 0) {
            setTimeout(function() {
                reject("even")
            }, 2000)
        }
    });
}

job(2)
  .then(function(txt) {
    console.log(txt);
  })
  .catch(function(error) {
    console.log(error);
  });


module.exports = job;