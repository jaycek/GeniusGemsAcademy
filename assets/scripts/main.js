// To handle to scroll to top
document.addEventListener("scroll", handleScroll);
  // get a reference to the button  
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");

scrollToTopBtn.addEventListener("click", scrollToTop);

var whatsappfloat = document.querySelector(".whatsappfloat");
var gmailfloat= document.querySelector(".gmailfloat");

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
    whatsappfloat.style.display="block";
    gmailfloat.style.display="block";

  } else {
    //hide button
    scrollToTopBtn.style.display = "none";
    whatsappfloat.style.display="none";
    gmailfloat.style.display="none";
  }
}

// Scroll to top with smooth transition
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function validateEmail(){

    let email= document.getElementById("email").value;
    let error = document.getElementById("error");
    // let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,4})(.[a-z]{2,4})?$/
    // let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,4})(.[a-z]{2,4})?$/
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(regexp.test(email))
        {
            console.log("Passed email check");
            error.textContent = ""
            return true;
    
        }
        else
        {
            console.log(`Failed email check for ${email}`);
          
            // Changing content and color of content
            error.textContent = "Please enter a valid email id"
            error.style.color = "red"
            return false;
        }
    
    }