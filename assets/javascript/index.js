title = "";

// Get the hash of the url
const hash = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';

// Set token
let _token = hash.access_token;

const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = '20db032cf5354ecc98d3c6f236ec5b28';
const redirectUri = 'file:///C:/Users/wayne/Documents/coding_boot_camp/hw/hw8/group-project1/index.html';
const scopes = [
  'user-top-read'
];




var albumSearch = function(title) {
// Make a call using the token
$.ajax({
   url: 'https://api.spotify.com/v1/search?q=' + title + '&type=album&limit=1',
   type: "GET",
   beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ' + _token );},
   success: function(response) { 
  // // Do something with the returned data
      var data = response;
      
      var albumURI = response.albums.items["0"].uri;
      console.log(albumURI);
      //accesses the album's uri for the web player;

// NEXT STEPS: figure out how to generate a spotify web player (dynamically?) using the uri;        

       var theGoods = response;
}

});

}

$('form').on('submit', '.validate', function(e) {

	e.preventDefault();

	let title = $('#text').val().trim();
	console.log(title);

	$('#text').val("");

	albumSearch(title);

  if (!_token) {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
}

	// If there is no token, redirect to Spotify authorization

})
