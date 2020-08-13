// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


mimicServerCall()
.then(resp => {c()})
.catch(error => {b(error)})

function b(x) {
  let m = document.getElementById('modal');
  let mm = document.getElementById('modal-message');
  m.className = "";
  mm.innerHTML = x;
  setTimeout(() => {
    m.className = "hidden";
    mm.innerHTML = "";
  }, 5000);
}

function c() {
  const h = document.getElementsByClassName('like-glyph');
  for (const x of h) {
    x.addEventListener("click", function() {
  if (x.innerHTML == EMPTY_HEART) {
    x.innerHTML = FULL_HEART;
    x.classList.add("activated-heart");
  }
  else {
    x.innerHTML = EMPTY_HEART;
    x.classList.remove("activated-heart");
  };})}
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
