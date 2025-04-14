let images = document.querySelectorAll(".image");

images.forEach((img) => {
    img.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("imageId", event.target.id);
        event.target.classList.add("selected");
    });

    img.addEventListener("dragend", function(event) {
        event.target.classList.remove("selected");
    });
});

document.addEventListener("dragover", function(event) {
    event.preventDefault();
});


document.addEventListener("drop", function(event) {
    event.preventDefault();

    var draggedId = event.dataTransfer.getData("imageId");
    var draggedImg = document.getElementById(draggedId);

    
    var targetImg = event.target.closest(".image");

    if (targetImg && targetImg.id !== draggedImg.id) {
        
        let draggedStyle = window.getComputedStyle(draggedImg).backgroundImage;
        let targetStyle = window.getComputedStyle(targetImg).backgroundImage;

        targetImg.style.backgroundImage = draggedStyle;
        draggedImg.style.backgroundImage = targetStyle;

        console.log("Swapped: ", draggedImg.id, " with ", targetImg.id);
    }
});

















