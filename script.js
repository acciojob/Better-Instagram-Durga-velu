//your code here

let images=document.querySelectorAll("image")

images.forEach((img)=>{

	img.addEventListener("dragStart",function(event){
	event.dataTransfer.setData("image", event.target.id)	
	});
});

document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  document.addEventListener("drop", function(event) {
    event.preventDefault();
   
      var data = event.dataTransfer.getData("image");

	  var draggedImg=document.getElementById("data")

	  var targetImg=event.target;


	  if(targetImg.id !=== draggedImg.id && targetImg.className==="image"){
var change=document.createElement("div")
event.target.parentNode.insertBefore(change,event.target)
draggedImg.parentNode.insertBefore(event.target, draggedImage);

change.parentNode.insertBefore(draggedImg,change)

		  change.parentNode.removeChild(change)
	  }
    
  });



























