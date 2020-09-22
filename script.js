 function loadXMLDoc() {
            
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var confirma_password = document.getElementById("confirma_password").value;
            
            var xhttp = new XMLHttpRequest(); 
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) { document.getElementById("demo").innerHTML = this.responseText; }
            };
            xhttp.open("POST", "http://52.91.139.190/fsapi/users/auth/register-jwt", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify({ 
                
                "name": name,
                "email": email,
                "password": password,
                "confirma_password": confirma_password
                
            }));
            event.preventDefault();
            }
    