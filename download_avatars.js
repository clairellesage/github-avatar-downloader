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
	return requestURL;		
	}

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
					console.log("This is the Response body:", data);
					for (i in data) {
						var avatar = data[i].avatar_url;
						console.log(avatar)
					}

					console.log("Found avatar url:", avatar);
					// cb(avatar);
		}



      })





getRepoContributors("jquery", "jquery")