let commentInput = document.querySelector(".input");
let totalComment = document.querySelector(".comment-num");

let commentbox = document.querySelector(".all-comment");
let counter = 0;
function addComment(){
  let text = commentInput.value.trim();
  if(text){
    counter++;
    
    totalComment.innerHTML =`${counter} <h3>Comments</h3>`
       console.log(text);
       let div = document.createElement("div");
       div.classList.add("comment-list");
       div.innerHTML =`<div class="commenter-details">
                      <div class="left-c-details flex-c">
                      <div class="random-dp ">
                 <img src="https://picsum.photos/33/33?random=${Math.floor(Math.random()*10)}">
                </div>
                        <div class="comment">
                          <p>@shauryaraj125 <span>18 hours ago</span></p>
                          <p>${text}</p>
                          <button class=" c-btn">
                            <i class="bi bi-hand-thumbs-up"></i>
                          <span>1.1K</span>
                            <i class="bi bi-hand-thumbs-down"></i>
                          </button>
                        </div>
                      </div>
                      <div class="right-c-details">
                        <i class="bi bi-three-dots-vertical"></i>
                      </div>
                    </div>`; 
                    commentbox.appendChild(div)
   }
   
   commentInput.value ='';
}
commentInput.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        addComment();
    }
})