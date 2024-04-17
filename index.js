// Theme code starts here
let themeButton = document.getElementById("theme-button");


const toggleLightMode = () => {
  
document.body.classList.toggle("light-mode");

}

themeButton.addEventListener("click", toggleLightMode);
// Theme code ends here//


// Splash Screen code starts here //
var splashScreen = document.querySelector('.Splash');
splashScreen.addEventListener('click',() => {
  splashScreen.style.opacity = 0;
  setTimeout(() =>{
    splashScreen.classList.add('hidden')
  },610)
})

// Splash Screen code ends here //


// Petition Code starts here
let signNowButton = document.getElementById("sign-now-button");
let count = 3;

const addSignature = () => {
  // Validate form before adding signature
  if (validateForm()) {
    // old code
    let name = document.getElementById('name').value;
    let hometown = document.getElementById('hometown').value;
    count = count + 1;

    // Create new signature paragraph
    let signatureParagraph = document.createElement("p");
    // new code
    signatureParagraph.textContent = "🖊️" + name + " from " + hometown + " supports this.";
    
   

    // Find signatures section and append new signature
    let signaturesSection = document.getElementsByClassName("signatures")[0];  // Access the first element
    signaturesSection.appendChild(signatureParagraph);

    // Update signature count display (assuming there's an element with id "signature-count")
    document.getElementById("signature-count").textContent =
      "️ " + count + " people have signed this petition and support this cause.";
    
  }
};

const validateForm = () => {
  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value // accesses and saves value of first input
  }
  for (let i = 0; i < petitionInputs.length; i++) {
    // old code
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
    // refactored code 
  }

  return !containsErrors;  // Return true if no errors, false otherwise
};

// Add click event listener to the sign-now button
signNowButton.addEventListener('click', addSignature);
// Petition code ends here


// Slideshow code starts here
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}



