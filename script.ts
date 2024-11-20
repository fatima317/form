function handleSubmit(event: Event): void {
    event.preventDefault();
  
    const successMessage = document.getElementById("success-message") as HTMLDivElement;
    if (successMessage) {
      successMessage.style.display = "block";
      successMessage.scrollIntoView({ behavior: "smooth" });
    }
  
    const form = document.getElementById("survey-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("survey-form") as HTMLFormElement;
    if (form) {
      form.addEventListener("submit", handleSubmit);
    }
  });
  