// Homepage Javascript 
const productContainers = [...document.querySelectorAll('.product-container')];
	//Next button
	const nextBtn = [...document.querySelectorAll('.next-btn')];
	//Previous button
	const preBtn = [...document.querySelectorAll('.prev-btn')];
	
	productContainers.forEach((item, i) => {
		let containerDimensions = item.getBoundingClientRect();
		let containerWidth = containerDimensions.width;
		
		//Each time button is pressed it moves images across by the size of the container
		nextBtn[i].addEventListener('click', () => {
			item.scrollLeft += containerWidth;
		})
		preBtn[i].addEventListener('click', () => {
			item.scrollLeft -= containerWidth;
		})
	})

// Product pages Javascript
const sizeBoxes = document.querySelectorAll('.size-box');
	sizeBoxes.forEach(box => {
		box.addEventListener('click', () => {
			// Remove 'selected' class from all size boxes
			sizeBoxes.forEach(b => b.classList.remove('selected'));
			// Add 'selected' class to the clicked size box
			box.classList.add('selected');


		});
	});
	const smallPhotos = document.querySelectorAll('.small-photo');
	const mainPhoto = document.querySelector('.main-photo');

	// Each click makes the image change
	smallPhotos.forEach(photo => {
		photo.addEventListener('click', () => {
			const tempSrc = mainPhoto.src;
			mainPhoto.src = photo.src;
			photo.src = tempSrc;
		});
	});

// Javascript for contact form
document.getElementById("contact-form").addEventListener("submit", function (event) {
	event.preventDefault();
	// Show thank you message
	document.getElementById("thank-you-message").style.display = "block";
	// Reset form
	document.getElementById("contact-form").reset();
	
});