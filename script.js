//your code here

et images = document.querySelectorAll(".image");

images.forEach((img) => {
    img.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("image", event.target.id);
    });
});

document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
  
    var data = event.dataTransfer.getData("image");
    var draggedImg = document.getElementById(data);
    var targetImg = event.target;

    if (targetImg.id !== draggedImg.id && targetImg.className === "image") {
       var changeImg=targetImg.style.backgroundImage;

targetImg.style.backgroundImage=draggedImg.style.backgroundImage;
		draggedImg.style.backgroundImage=changeImg

	}
});



























