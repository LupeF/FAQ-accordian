// const plusIcon = document.getElementById('plus-icon');
const plusOne = document.getElementById('svg-one');
const minusOne = document.getElementById('svg-two');
const plusTwo = document.getElementById('svg-three');
const minusTwo = document.getElementById('svg-four');
const plusThree = document.getElementById('svg-five');
const minusThree = document.getElementById('svg-six');
const plusFour= document.getElementById('svg-seven');
const minusFour = document.getElementById('svg-eight');
const paragraphOne = document.getElementById('content-one');
const paragraphTwo = document.getElementById('content-two');
const paragraphThree = document.getElementById('content-three');
const paragraphFour = document.getElementById('content-four');

//* Section One
plusOne.addEventListener('click', (e)=>{
    plusOne.style.display = 'none';
    paragraphOne.classList.toggle('content-display');
    minusOne.classList.toggle('content-display');
});
plusOne.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter'){
        plusOne.style.display = 'none';
        paragraphOne.classList.toggle('content-display');
        minusOne.classList.toggle('content-display');
    }
});

minusOne.addEventListener('click', (e)=>{
    plusOne.style.display = 'block';
    paragraphOne.classList.toggle('content-display');
    minusOne.classList.toggle('content-display');
});
minusOne.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter'){
        plusOne.style.display = 'block';
        paragraphOne.classList.toggle('content-display');
        minusOne.classList.toggle('content-display');
    }
    
});
//* Section Two
plusTwo.addEventListener('click', (e)=>{
    plusTwo.style.display = 'none';
    paragraphTwo.classList.toggle('content-display');
    minusTwo.classList.toggle('content-display');
});
plusTwo.addEventListener('keyup', (e)=>{
    if(e.key === "Enter"){
        plusTwo.style.display = 'none';
        paragraphTwo.classList.toggle('content-display');
        minusTwo.classList.toggle('content-display');
    }
});
minusTwo.addEventListener('click', (e)=>{
    plusTwo.style.display = 'block';
    paragraphTwo.classList.toggle('content-display');
    minusTwo.classList.toggle('content-display');
});
minusTwo.addEventListener('keyup', (e)=>{
    if(e.key === "Enter"){
        plusTwo.style.display = 'block';
        paragraphTwo.classList.toggle('content-display');
        minusTwo.classList.toggle('content-display');
    }
});
//Section Three
plusThree.addEventListener('click', (e)=>{
    plusThree.style.display = 'none';
    paragraphThree.classList.toggle('content-display');
    minusThree.classList.toggle('content-display');
});
minusThree.addEventListener('click', (e)=>{
    plusThree.style.display = 'block';
    paragraphThree.classList.toggle('content-display');
    minusThree.classList.toggle('content-display');
});
//Section Four
plusFour.addEventListener('click', (e)=>{
    plusFour.style.display = 'none';
    paragraphFour.classList.toggle('content-display');
    minusFour.classList.toggle('content-display');
});
minusFour.addEventListener('click', (e)=>{
    plusFour.style.display = 'block';
    paragraphFour.classList.toggle('content-display');
    minusFour.classList.toggle('content-display');
});