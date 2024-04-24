// Code/ aesthetic inspiration:
//Splash screen:https://dev.to/saikatbishal/how-to-make-a-splash-screen-using-html-css-and-javascript-240m
//"Landing Page":https://www.mckinsey.com/featured-insights/diversity-and-inclusion/women-in-the-workplace
//Slideshow: https://www.w3schools.com/howto/howto_js_slideshow.asp


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
    let name = document.getElementById('name').value;
    let hometown = document.getElementById('hometown').value;
    count = count + 1;


    // Create new signature paragraph
    let signatureParagraph = document.createElement("p");
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


  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  return !containsErrors;  
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
// Slideshow ends here

// Scroll animatin code starts here
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
}
let revealableContainers = document.querySelectorAll("revealable");

function reveal() {
  let revealableContainers = document.querySelectorAll(".revealable"); // Select all elements with class "revealable-container"

  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      // Add active class for smooth reveal with animation (replace 'animation.revealDistance' with your desired reveal distance)
      revealableContainers[i].classList.add("active");
    } else {
      // Remove active class to hide the container
      revealableContainers[i].classList.remove("active");
    }
  }
}

// Add event listener to window for smooth reveal on scroll
window.addEventListener("scroll", reveal);

// Reduce Motion Button


