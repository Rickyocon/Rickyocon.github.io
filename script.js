console.log("BOHO+ Loaded");

document.querySelectorAll(".external-link").forEach((link) => {
  link.addEventListener("click", () => {
    alert(
      "Reminder: Some external sites may contain ads or redirects. Close any popups and continue safely.",
    );
  });
});
