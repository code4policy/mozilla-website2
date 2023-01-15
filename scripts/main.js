const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
 // Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;
 function toggleImage() {
  var image = document.getElementById("my-image");
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
}
