// Counter Code 
var button = document.getElementById('counter');

button.onclick = function() {
  
  // Create a request object
  
  var request = new XMLHttpRequest();
  
  // Capture the response and store in it a varaible
  
  request.onreadystatechange = function() {
    if ( request.readystate == XMLHttpRequest.DONE){
        if (request.status == 200) {
            var counter  = request.responseText;
            var span = document.getElementById('counter');    
        span.innerHTML = counter.toString();
            
        }
    }  
  };
  
  request.open('GET', 'http://ikslankit.imad.hasura-app.io/counter', true);
  request.send(null);
};
