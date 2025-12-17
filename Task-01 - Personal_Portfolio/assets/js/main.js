emailjs.init("4LYJzhnyEsZ0CYZNi");

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactMessage = document.getElementById("contact-message"),
  message = document.getElementById("message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactMessage.value === ""
  ) {
    message.classList.remove("color-first");
    message.classList.add("color-red");
    message.textContent = "Enter all the input fields";

    setTimeout(() => {
      message.textContent = "";
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_no0gp2c",
        "template_tytxwor",
        "#contact-form"
      )
      .then(
        () => {
          message.classList.remove("color-red");
          message.classList.add("color-first");
          message.textContent = "Thanks, your message was sent successfully.";

          setTimeout(() => {
            message.textContent = "";
          }, 5000);
        },
        () => {
          message.classList.add("color-red");
          message.textContent = "Oops! Something went wrong.";
        }
      );

    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
