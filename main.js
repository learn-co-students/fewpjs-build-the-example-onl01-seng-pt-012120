// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errDiv = document.getElementById("modal")

document.addEventListener("DOMContentLoaded", () => {
  hideError();
});

function hideError() {
  errDiv.className = "hidden";
};

const hearts = document.querySelectorAll(".like-glyph");

for (let glyph of hearts) {
  glyph.addEventListener("click", likeCallback);
}

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      alert(serverMessage);
      changeHeart(heart);
    })
    .catch(function(error) {
      errDiv.className = "";
      errDiv.querySelector("p").textContent = error;
      setTimeout(hideError, 5*1000)
    });
};

function changeHeart(heart) {
  if (heart.innerText == EMPTY_HEART) {
    heart.innerText = FULL_HEART;
    heart.className = "activated-heart"
  } else {
    heart.innerText = EMPTY_HEART;
    heart.className = ""
  };
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
