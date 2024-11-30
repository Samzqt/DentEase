$(function() {
	'use strict';

  $('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});

});

// // Your Google OAuth client ID
// const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
// const REDIRECT_URI = 'http://localhost:5500'; // Replace with your redirect URI
// const AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/v2/auth';
// const RESPONSE_TYPE = 'token'; // or 'code' for server-side exchange
// const SCOPE = 'https://www.googleapis.com/auth/userinfo.profile';

// // Attach the login functionality to the button
// document.getElementById('googleLogin').addEventListener('click', () => {
//   // Build the Google OAuth URL
//   const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
//     REDIRECT_URI
//   )}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPE)}`;
  
//   // Redirect the user to Google's OAuth login
//   window.location.href = authUrl;
// });

// // After the user is redirected back to your app, parse the token
// function parseAccessToken() {
//   const hash = window.location.hash.substring(1);
//   const params = new URLSearchParams(hash);
//   const accessToken = params.get('access_token');

//   if (accessToken) {
//     fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('User Info:', data); // Display user data
//         alert(`Welcome, ${data.name}`);
//       })
//       .catch((error) => console.error('Error fetching user data:', error));
//   }
// }

// // Call this function on page load to handle the redirect
// window.onload = parseAccessToken;


// // Your Facebook App ID
// const APP_ID = '530909349810998';

// // Load Facebook SDK asynchronously
// (function(d, s, id) {
//   const fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   const js = d.createElement(s);
//   js.id = id;
//   js.src = 'https://connect.facebook.net/en_US/sdk.js';
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, 'script', 'facebook-jssdk');

// // Initialize Facebook SDK
// window.fbAsyncInit = function() {
//   FB.init({
//     appId: APP_ID,
//     cookie: true, // Enables cookies for session management
//     xfbml: true, // Parses social plugins on this page
//     version: 'v16.0', // Facebook Graph API version
//   });

//   // Check the login status on page load
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// };

// // Function to handle login status changes
// function statusChangeCallback(response) {
//   if (response.status === 'connected') {
//     // Logged into your app and Facebook
//     fetchUserInfo(response.authResponse.accessToken);
//   } else {
//     document.getElementById('status').innerText = 'Please log in.';
//   }
// }

// // Attach login functionality to the button
// document.getElementById('fbLogin').addEventListener('click', () => {
//   FB.login(
//     function(response) {
//       if (response.authResponse) {
//         fetchUserInfo(response.authResponse.accessToken);
//       } else {
//         alert('User cancelled login or did not fully authorize.');
//       }
//     },
//     { scope: 'public_profile,email' } // Request permissions
//   );
// });

// // Fetch user info using the access token
// function fetchUserInfo(accessToken) {
//   FB.api('/me', { fields: 'name,email' }, function(response) {
//     document.getElementById('status').innerText = `Hello, ${response.name}`;
//     console.log('User Info:', response); // Display user info
//   });
// }
