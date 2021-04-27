// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


document.addEventListener('DOMContentLoaded', () => {
  let hearts = document.getElementsByClassName("like-glyph")


  Array.from(hearts).forEach((heart) => {

    heart.addEventListener('click', () =>{

      mimicServerCall().then(()=>{
        if (heart.classList.contains("activated-heart")){
          heart.classList.remove("activated-heart");
          heart.innerText = EMPTY_HEART
        } else {
          heart.classList.add("activated-heart");
          heart.innerText = FULL_HEART}
      }).catch(() => {
        document.getElementById("modal").classList.remove("hidden");

        setTimeout(function(){
          document.getElementById("modal").classList.add("hidden");
        }, 3000)
      })

    })


  })



})






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
