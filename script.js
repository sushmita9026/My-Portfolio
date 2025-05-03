
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
        fetch("https://script.google.com/macros/s/AKfycbwPrBCbmJl3ofllIe3MdVdzEt8WC1OkMV1tr8iSZV-Se7z7JTgri-6dbqTaVAl9yQaI/exec", {
          method: "POST",
          body: data,
        })
          .then((res) => res.text())
          .then((data) => {
            document.querySelector("#msg").innerHTML = "Message sent successfully!";
            
            form.reset();
          })
          .catch((error) => {
            document.querySelector("#msg").innerHTML = "Error sending message: " + error.message;
          });
      });