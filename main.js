// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');
modal.classList.add('hidden');

document.addEventListener('DOMContentLoaded', function () {
  const spans = document.querySelectorAll('span.like-glyph');
  Array.from(spans).forEach(span => {
    span.addEventListener('click', function() {
      if (span.textContent === EMPTY_HEART) {
        mimicServerCall(url="http://mimicServer.example.com", config={}).then(resp =>{
          alert(resp);
          span.textContent = FULL_HEART;
          span.classList.add('activated-heart');
        }).catch(error => {
            modal.removeAttribute('class');
            modal.lastElementChild.innerHTML = error;
            setTimeout(() => {
              modal.classList.add('hidden');
            }, 5000);
        })
      } else {
        span.textContent = EMPTY_HEART;
        span.classList.remove('activated-heart');
      }
    })
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
