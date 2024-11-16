
var   typed = new Typed(".loop",{
    strings : [ "Frontend Developer" , "Web Developer" , "Frontend Developer" ],
    typeSpeed : 150,
    backSpeed : 150,
    looped : true
})
let form = document.querySelector("form");
      let submitButton = document.querySelector(".submit");

      submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        let data = new FormData(form);

        // Make the fetch request to the Google Apps Script URL
        fetch("https://script.google.com/macros/s/AKfycbwPrBCbmJl3ofllIe3MdVdzEt8WC1OkMV1tr8iSZV-Se7z7JTgri-6dbqTaVAl9yQaI/exec", {
          method: "POST",
          body: data,
        })
          .then((res) => res.text())
          .then((data) => {
            // Show the success or failure message in #msg
            document.querySelector("#msg").innerHTML = "Message sent successfully!";
            // Optionally, reset the form after submission
            form.reset();
          })
          .catch((error) => {
            // Handle any errors that occur during the fetch
            document.querySelector("#msg").innerHTML = "Error sending message: " + error.message;
          });
      });