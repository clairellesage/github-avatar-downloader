// Alex Wilmer put this here because request was bombing out
var fetch = require('isomorphic-fetch')
var request = require('request');
var fs = require('fs');

var argowner = process.argv[2];
var argrepo = process.argv[3];

var options = {
  url: 'https://api.github.com/repos/jquery/jquery/contributors',
  headers: {
    'User-Agent': 'clairellesage'
	}
};

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "clairellesage";
var GITHUB_TOKEN = "43205e5bfcb6012e0c87ac41ab9585ebca5b08d0";

function downloadImageByURL(url, filePath) {

	if (!fs.existsSync("avatar")) {
    fs.mkdirSync('./avatar')
	}
 	request.get(url)
         .pipe(fs.createWriteStream(filePath));
}	

function listAvatarURL(data) {
 for (i= 0; i< data.length; i++) {
   downloadImageByURL(data[i].avatar_url, "avatar/" + data[i].login + ".jpg")
 	}
}

function getRepoContributors(repoOwner, repoName, cb) {
  if (argrepo === undefined || process.argv.length > 4) {
	 throw "need two arguments!"
  } else {
      var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
      fetch(options.url, options.headers).then(r => r.json()).then(data => {
   	  cb(data)
       // for (i=0; i<data.length; i++)
       // console.log(data[i].avatar_url)
   })

   //getting error here, but this is what I would do if request was working for me

   // request.get(options, function(error, response, body) {
   //   if (error) {
   //   console.log(error);
   //   return error;
   // }
   //   console.log(response.statusCode);

   //   if (response.statusCode === 200) {
   //     var data = JSON.parse(body);
   //     cb(data)
   //     // for (i=0; i<data.length; i++)
   //     // console.log(data[i].avatar_url)
   // 	}
   // })
  }
}

getRepoContributors(argowner, argrepo, listAvatarURL)