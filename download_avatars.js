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

function getAvatar(data) {
	for (i in data) {
	var avatar = data[i].avatar_url;
	console.log(avatar)
	}
}

function getRepoContributors(repoOwner, repoName, cb) {
	var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';	

	request.get(options, function(error, response, body) {
	  // If we have an error, we need to deal with it.
	  if (error) {
	    // console.log("Boom! Deal with it!");
	    // console.log(error);
	    return error;
	  }

	  if (response) {                        
	      console.log('Response Status Code: ', response.statusCode);
	  }

	  if (response.statusCode === 200) {
					var data = JSON.parse(body);
					cb(data)
		}



    })

}

getRepoContributors("jquery", "jquery", getAvatar)