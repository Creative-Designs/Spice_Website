var modal, img,img1,img2,modalImg,captionText;

$(document).ready(function(){
	
	modal = document.getElementById("myModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	img = document.getElementById("myImg");
	img1 = document.getElementById("myImg1");
	img2 = document.getElementById("myImg2");

	modalImg = document.getElementById("img01");
	captionText = document.getElementById("caption");
	
});
	


	function myImg_OnClick(){
	  modal.style.display = "block";
	  modalImg.src = img.src;
	  captionText.innerHTML = img.alt;
   }
   
	function myImg1_OnClick()
	{
	  this.modal.style.display = "block";
	  this.modalImg.src = img1.src;
	  captionText.innerHTML = img1.alt;
	}
	
	function myImg2_Click()
	 {
	   modal.style.display = "block";
	   modalImg.src = img2.src;
	   captionText.innerHTML = img2.alt;
	 }
	 
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	function closeClick() { 
		modal.style.display = "none";
	}
	
	
	
	
	
	
	
	
	