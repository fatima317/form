function handleSubmit(event) {
    event.preventDefault();
    var successMessage = document.getElementById("success-message");
    if (successMessage) {
        successMessage.style.display = "block";
        successMessage.scrollIntoView({ behavior: "smooth" });
    }
    var form = document.getElementById("survey-form");
    if (form) {
        form.reset();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("survey-form");
    if (form) {
        form.addEventListener("submit", handleSubmit);
    }
});
