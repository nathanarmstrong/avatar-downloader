var request = require('request');
var fs = require('fs');

var repo = process.argv[2]
var owner = process.argv[3]

console.log('Welcome to the GitHub Avatar Downloader!');

var options = {
  url: 'https://nathanarmstrong:0059bcb820e1ac8fc7b18fd2f826f0e4827836a0@api.github.com/repos/jquery/jquery/contributors',
  headers: {
    'User-Agent': 'request'
  }
}


  function displayname(name){
    console.log("name: ", name.avatar_url)
}

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      console.log(info)
    }

  process.argv.forEach((repo, owner) =>{
    cnosole.log(`${repo}: ${owner}`);
  });
  }

  function downloadImageByURL(url, filePath) {
    request.get(url)
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream(filePath))
     }


downloadImageByURL(repo, owner)




