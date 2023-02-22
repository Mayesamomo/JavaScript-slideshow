

let currentSlide = 0;

function next()
{

    // Increment slide counter by one
    currentSlide ++;

    // Create a reference to existing slides
    let slides = document.getElementsByClassName("slide");

    // Check currentSlide variable
    if (currentSlide >= slides.length)
    {
        currentSlide = 0;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i ++) 
    {
        slides[i].style.display = 'none';
        slides[i].style.transition = '3s';
       
    }

    // Display current slide
    slides[currentSlide].style.display = "block";

    updateCounter();
    
}

function previous() 
{

    // Increment slide counter by one
    currentSlide --;

    // Create a reference to existing slides
    let slides = document.getElementsByClassName("slide");

    // Check currentSlide variable
    if (currentSlide < 0)
    {
        currentSlide = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i ++) 
    {
        slides[i].style.display = 'none';
    }

    // Display current slide
    slides[currentSlide].style.display = "block";

    updateCounter();

}

function setSlide(slide) 
{

    // Set current slide variable
    currentSlide = slide;

    // Create a reference to existing slides
    let slides = document.getElementsByClassName("slide");

    // Check currentSlide variable
    if (currentSlide < 0)
    {
        currentSlide = slides.length - 1;
    }
    else if (currentSlide >= slides.length)
    {
        currentSlide = 0;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i ++) 
    {
        slides[i].style.display = 'none';
    }

    // Display current slide
    slides[currentSlide].style.display = "block";

    updateCounter();

}

function updateCounter()
{

    // Create a reference to the slides
    let slides = document.getElementsByClassName("slide");

    // Create a reference to the counter div
    let counter = document.getElementsByClassName("counter");

    // Update the content of the counter
    counter[0].innerHTML = (currentSlide + 1) + "/" + slides.length;

}

   
 
