// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}


// Get the login form element
var loginForm = document.getElementById('login-form');

// Get the proceed button element
var proceedButton = document.getElementById('proceed-button');

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the entered username and password
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform validation and authentication logic here
  // You can use AJAX or fetch to send the credentials to your server for validation
  // Upon successful authentication, you can redirect the user to the desired page
});

// Add event listener for proceed button click
proceedButton.addEventListener('click', function(event) {
  // Proceed to the desired page without logging in
  // You can redirect the user to the desired page or perform any other action here
});
