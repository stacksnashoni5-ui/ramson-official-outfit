document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    alert("Thank you for contacting Ramson Official Outfit. We will get back to you shortly!");

    this.reset();
});