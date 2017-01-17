// Alex Wilmer put this here because request was bombing out
var fetch = require('isomorphic-fetch')
var request = require('request');
var fs = require('fs');

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

	console.log('!!!', url)

	if (!fs.existsSync("avatar")) {
		fs.mkdirSync('./avatar')
	}
 	request.get(url)
       .pipe(fs.createWriteStream(filePath));


}	

function listAvatarURL(data){
 for (i= 0; i< data.length; i++) {
   downloadImageByURL(data[i].avatar_url, "avatar/" + data[i].login + ".jpg")
 }
}

function getRepoContributors(repoOwner, repoName, cb) {
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
var options = {
 url: requestURL,
  headers: {
    'User-Agent': 'clairellesage'
   }
 };

   fetch(options.url, options.headers).then(r => r.json()).then(data => {
   	  cb(data)
       // for (i=0; i<data.length; i++)
       // console.log(data[i].avatar_url)
   })

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

getRepoContributors("jquery","jquery", listAvatarURL)