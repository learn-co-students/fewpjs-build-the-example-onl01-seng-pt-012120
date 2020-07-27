// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like-glyph');
  const modal = document.getElementById('modal');
  modal.setAttribute("class", "hidden");

  function displayError(error) {
    modal.removeAttribute('class');
    modal.textContent = error;
    setTimeout(function(){ modal.setAttribute('class','hidden') }, 5000);
  };

  function likeBtn(button) {
    button.addEventListener('click', (event) => {
      if (event.target.innerHTML === EMPTY_HEART) {
        mimicServerCall().then(() => {
            event.target.innerHTML = FULL_HEART;
            event.target.setAttribute('class', 'like-glyph activated-heart');
        }).catch((error) => {
            displayError(error);
        });
      } else {
        event.target.innerHTML = EMPTY_HEART
        event.target.setAttribute('class', 'like-glyph')
      }
    });
  };

  likeButtons.forEach(button => {
    likeBtn(button)
  });
});
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
