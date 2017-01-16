var request = require('request');

var options = {
 url: 'https://api.github.com/repos/jquery/jquery/contributors',
  headers: {
	'User-Agent' : 'clairellesage',
	}
};

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "clairellesage";
var GITHUB_TOKEN = "43205e5bfcb6012e0c87ac41ab9585ebca5b08d0";

var repoOwner = "clairellesage"
var repoName = "github-avatar-downloader"


function getRepoContributors(repoOwner, repoName, cb) {
	var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
	return requestURL
	}

request.get(options)            // Note 1
      .on('error', function (err) {                                   // Note 2
        throw err;
      })
      .on('response', function (response) {                           // Note 3
        console.log('Response Status Code: ', response.statusCode);
      })


getRepoContributors("jquery", "jquery")