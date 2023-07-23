const starEl=document.querySelectorAll('.fa-star');
const emojiEl=document.querySelectorAll(".far");
const colors=["red","darkred","orange","blue","green"];

updateRating(0);

starEl.forEach((starEl,index)=>{
    starEl.addEventListener("click",()=>{
        updateRating(index);
        })
})


//Rating star
function updateRating(index){
    starEl.forEach((starEl,idx)=>{
      if(idx < index + 1){
        starEl.classList.add("active");  //here the click starts going to be gold color
      }
      else{
        starEl.classList.remove("active");  //here the colored stars click again then disappear the color from above star.
      }
    });

    //emoji change
    emojiEl.forEach((emojiEl)=>{
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color=colors[index];
    })
}

