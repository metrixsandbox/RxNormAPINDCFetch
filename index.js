













var obj = JSON.parse(results)
document.getElementById("demo").innerHTML = obj.ndcStatus.conceptName

function json_results() {
    var txt = results
    var obj = JSON.parse(txt)
    document.getElementById("demo").innerHTML = obj.ndcStatus
}

var text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

fetch(results)
.then(response => response.json())
.then((out) => {
console.log('Output: ', out);
}).catch(err => console.error(err))

async function postData(url = results, data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData(results)
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });


    //fetch('sample.txt')
       //.then(function(response) {
       //    return response.text()
       //})
       //.then(function(data)) {
       //    console.log(data)
       //}