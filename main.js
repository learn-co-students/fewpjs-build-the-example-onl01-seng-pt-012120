// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeGlyphs = document.querySelectorAll('.like-glyph')
const error = document.getElementById('modal')

// Your JavaScript code goes here!
error.classList.add('hidden')

function likeCallback(e) {
  let heart = e.target
  mimicServerCall()
    .then(function(serverMessage){
      alert(serverMessage);
      if (heart.innerText === EMPTY_HEART){
        heart.innerText = FULL_HEART
        heart.classList.add('activated-heart')
      }
      else {
        heart.innerText = EMPTY_HEART
        heart.classList.remove('activated-heart')
      }
    })
    .catch(function(error) {
      alert("Something went wrong!");
      error.classList.remove('hidden')
    });
}

for (let glyph of likeGlyphs){
  glyph.addEventListener("click",likeCallback)
}






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
