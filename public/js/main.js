"use strict"


// fetch
fetch('http://localhost:3000/api/v0')
  .then( res => res.json())
  .then( images => { displayImages(images) })


// For loop that generates the gallery.
//used querySelector to to return the first element
// to a specific css selector. 
  const container = document.querySelector('.container');

  // callback
const displayImages = (myImages)=>{
  for (let i = 0; i < myImages.length ; i++) {

    // Creating the figure That grabs my images.
    //nested with one element {my Images}.
    
    const figure = document.createElement('figure');
    figure.style.maxWidth = `${myImages[i].width}px`;
    figure.style.maxheight = `${myImages[i].height}px`;
    container.appendChild(figure);
    
    // Title for each image.
    // This was what we just learned. 
    //this allows me to creat a new div.
    //behind the scenes instead of in the html
      const title = document.createElement('h2');
      title.innerText = `${myImages[i].title}`;
      figure.appendChild(title);
    
    // Creating the link for the images.
    //Div (a)created 
    
    const figLink = document.createElement('a');
    figLink.href = `${myImages[i].linkURL}`;
    figLink.target = "_blank";
    figure.appendChild(figLink);
    
    // Creating image and links
    //Div (img)created 
    
    const figLinkImg = document.createElement('img');
    figLinkImg.src = `${myImages[i].pathURL}`;
    figLinkImg.alt = `${myImages[i].description}`;
    figLink.appendChild(figLinkImg);
    
    // Adding fig caption with the credits.
    //Div (Figcaption) created 
    
    const figCap = document.createElement('figcaption');
    figure.appendChild(figCap);
    
    //Div (a)created. Fig, Figcaption (a)
    
}


  

const figCapLink = document.createElement('a');
figCapLink.href = `${myImages[i].creditURL}`;
figCapLink.target = "_blank";
figCapLink.innerText = `Photo by: ${myImages[i].credit}`;
figCap.appendChild(figCapLink);
}