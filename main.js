// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'




document.addEventListener("DOMContentLoaded", () => {
  // let modal = document.querySelector('.hidden')
  const modal = document.getElementById('modal')
  const hearts = document.querySelectorAll("span.like-glyph")
  likePost(hearts);
 // have a collection of hearts
 // add an event listener to each heart
  })


const likePost = (hearts) => {
  for (const heart of hearts){
    heart.addEventListener("click", (e) => {
     // make a server call
     mimicServerCall()
     .then(() => {
       if(heart.innerHTML == EMPTY_HEART){
         heart.innerHTML = FULL_HEART
         heart.className = "activated-heart"
       }
       else {
         heart.innerHTML = EMPTY_HEART
         heart.className = "like-glyph"
       }

     })
     .catch(error => {
       modal.hidden = false;
       const modalMessage = document.querySelector("#modal-message")
       modalMessage.innerHTML = error
       setTimeout(() => {
       //do this during the timeout
       modal.hidden = true
       }, 5000)
     })
  })
 }
}



// fetch()
// .then(resp => resp.json()) //return another promise
// .then (data => {
//   //do something with teh  data
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
