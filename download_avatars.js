var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var options = {
  url: 'https://nathanarmstrong:0059bcb820e1ac8fc7b18fd2f826f0e4827836a0@api.github.com/repos/jquery/jquery/contributors',
  headers: {
    'User-Agent': 'request'
  }
};

function displayname(name){
  console.log("name: ", name.avatar_url)
}

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);
  }
  info.forEach(displayname)
}

request(options, callback)

