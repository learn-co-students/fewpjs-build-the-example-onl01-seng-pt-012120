// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById('modal');
errorModal.className = "hidden";

const hearts = document.getElementsByClassName('like-glyph')
for (const heart of hearts) {
  heart.addEventListener('click', (e) => {
    if (e.target.innerText == EMPTY_HEART) {
      e.target.innerText = FULL_HEART;
      e.target.className = 'activated-heart'
      mimicServerCall().catch((error)=>{
        errorModal.className = "";
        let p = document.getElementById('modal-message')
        p.innerText = error
      })
    } else {
      e.target.innerText = EMPTY_HEART;
      e.target.className = ''
    };
  });
}
// mimicServerCall().catch(()=>{
// })


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
