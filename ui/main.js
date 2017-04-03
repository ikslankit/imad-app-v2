// Counter Code 
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
  
  // Make a request to the counter endpoint
  // Capture the response and store in it a varaible
  //Render the variable inn the correct span
  counter = counter +1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
    
};
