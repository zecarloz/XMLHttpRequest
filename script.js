// calls "addEventListener" to detect a click on the submit button, cleaner code
const btn = document.getElementById('botao');
btn.addEventListener('click', loadXMLDoc, false);
//

function loadXMLDoc() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirma_password = document.getElementById("confirma_password").value;

    // FETCH is modern replacement for XMLHttpRequest
    // Fetch makes it easier to make asynchronous requests and 
    // handle responses better than with the older XMLHttpRequest
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

  fetch('http://52.91.139.190/fsapi/users/auth/register-jwt', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      confirma_password: confirma_password,
    }),
  })
      .then(function(response) {
        if (response.ok) {
          document.getElementById("com").innerHTML = 'Success';
        } else {
          document.getElementById("com").innerHTML = 'Error';
        }
      });
  event.preventDefault();
}
