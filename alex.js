var request = require('request');

var options = {
 url: 'https://api.github.com/repos/jquery/jquery/contributors',
  headers: {
    'User-Agent': 'alexsieben'
}
};

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "alexsieben";
var GITHUB_TOKEN = "0157dc16fb3b1e87f23a9c6be6574ea3b255a48c";


function getRepoContributors(repoOwner, repoName, cb) {
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
return requestURL
}

//getRepoContributors("jquery","jquery")

request.get(options)            // Note 1
      .on('error', function (err) {                                   // Note 2
        throw err;
      })
      .on('response', function (response) {                           // Note 3
        console.log('Response Status Code: ', response.statusCode);
      })


// getRepoContributors("jquery", "jquery", function(err, result) {
//   console.log("Errors:", err);
//   console.log("Result:", result);
// });