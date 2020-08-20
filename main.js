// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hide = document.querySelector('#modal')
hide.className = 'hidden'

let heart = document.querySelector('.like-glyph')
heart.addEventListener('click', function() {
  mimicServerCall()
  .then(() => {
    if (heart.innerText == EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.classList.add('activated-heart')
    }
    else {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('activated-heart')
    };
  })
  .catch((error) => {
    console.error(error)
    hide.className = ''
    setTimeout(() => hide.className = 'hidden', 5000)
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
