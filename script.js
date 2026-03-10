// ===== EmailJS Init =====
emailjs.init("dcgaxy4HG48NDdNUg");

// ===== Contact Form Submit =====
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const btn = this.querySelector("button");
  btn.disabled = true;
  btn.textContent = "Sending...";

  emailjs.sendForm("service_sgby7be", "template_2kgfgic", this)
    .then((res) => {
      console.log("SUCCESS!", res.status, res.text);
      alert("Message sent successfully!");
      this.reset();
      btn.disabled = false;
      btn.textContent = "Send";
    })
    .catch((err) => {
      console.error("FAILED...", err);
      alert("Failed to send message. Check console for details.");
      btn.disabled = false;
      btn.textContent = "Send";
    });
});
