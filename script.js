//your code here

document.addEventListener("dragstart",(event)=>{


    event.dataTransfer.setData("image", event.target.id)
})


document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  document.addEventListener("drop", function(event) {
    event.preventDefault();
   
      var data = event.dataTransfer.getData("image");
      event.target.appendChild(document.getElementById(data));
    
  });



























