// To handle to scroll to top
document.addEventListener("scroll", handleScroll);
  // get a reference to the button  
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");

scrollToTopBtn.addEventListener("click", scrollToTop);


// To handle navbar clicks on same page sections
function scrolltoSection(id){

    const node=document.getElementById(id);
  
   node.scrollIntoView({
    behavior: "smooth", 
    block: "start",
    inline: "nearest"
});
}


// To handle to scroll to top
function handleScroll() {

  // check whether we need to show or hide the button
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 
  var GOLDEN_RATIO = 0.095;
  
  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    //show button
     scrollToTopBtn.style.display = "block";
  } else {
    //hide button
    scrollToTopBtn.style.display = "none";
  }
}

// Scroll to top with smooth transition
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }