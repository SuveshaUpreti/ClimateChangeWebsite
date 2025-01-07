
// Get the theme button element
let themeButton = document.getElementById("theme-button");

// Define the toggleDarkMode function
const toggleDarkMode = () => {
  // Toggle the dark-mode class on the body element
  document.body.classList.toggle("dark-mode");
}

// Add a click event listener to the theme button
themeButton.addEventListener("click", toggleDarkMode);



// Query for the sign now button and assign it to a variable
const signNowButton = document.querySelector('#sign-now-button');

// Define the addSignature function
const addSignature = (event, person) => { 
  event.preventDefault();
  // Create a new paragraph element for the new signature
  const signatures = document.querySelector('.signatures');
  const signature = document.createElement("p");
  // Format the new signature using the name and hometown we collected earlier
  signature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;

  // Find the signatures section on the page and add the new signature there
  signatures.appendChild(signature);
}

//  validation form

const validateForm = () => {

  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;

  
  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }
  
  for (let i = 0; i < petitionInputs.length; i++) {
    if (person.name.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else if (person.hometown.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else if (person.email.length < 2){
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if(!containsErrors){
    addSignature(event, person);
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = '';
      containsErrors = false;
    }
  }
}
    


signNowButton.addEventListener('click', validateForm);



let animation = {
  revealDistance: 50,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};


// Select all elements with class "revealable"
const revealableContainers = document.querySelectorAll('.revealable');

// Define the reveal function
const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainers = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainers < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    }
    else{
      revealableContainers[i].classList.remove('active');
    }
  }}
window.addEventListener('scroll', reveal);


const toggleModal = (person) =>{
    let modal = document.getElementById("thanks-modal");
    let modalContent = document.getElementById("thanks-modal-content");
    modal.style.display = 'flex';
    modalContent.textContent = "Thank you "+ person.name+"!" ;
let intervalId = setInterval(scaleImage,800);
  
    setTimeout(() => {
      
    modal.style.display = "none";
      clearInterval(intervalId);
    }, 4000);

    
}


let scaleFactor = 1
  //const modalImage = document.querySelector('.modal-content img');
let modalImage = document.images[0];

const scaleImage=()=>{
    if(scaleFactor === 1){
        scaleFactor = 0.8;
    }
    else{
        scaleFactor = 1;
    }
    modalImage.style.transform = `scale(${scaleFactor})`;
}
//strech 
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('#modal-close-btn');

function closeModal() {
  modal.style.display = 'none';
}

closeButton.addEventListener('click', closeModal);
