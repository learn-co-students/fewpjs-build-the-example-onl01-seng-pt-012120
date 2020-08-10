// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Your JavaScript code goes here!
// const likeButtons = document.querySelectorAll('.like')

function like() {
  mimicServerCall()
    .then(res => updateLike(res, this))
    .catch(err => displayError(err))
}

for (const button of likeButtons) {
  button.addEventListener('click', like)
}

function displayError(err) {
  const modal = document.getElementById('modal')
  const msg = modal.querySelector('h2')
  msg.innerText = err
  modal.classList.remove('hidden')
  setTimeout(function(){
    modal.classList.add('hidden')
  }, 5000)
}

function updateLike(res, entry) {
  console.log(res)
  const heart = entry.querySelector('.like-glyph')
  if (heart.innerText === EMPTY_HEART) {
    heart.innerText = FULL_HEART
    heart.classList.add('activated-heart')
  } else {
    heart.innerText = EMPTY_HEART
    heart.classList.remove('activated-heart')
  }
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
