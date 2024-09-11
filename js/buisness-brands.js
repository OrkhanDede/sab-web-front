document.addEventListener("DOMContentLoaded", () => {
  const width = document.body.clientWidth;
  if (width <= 991) {
    new fullpage("#fullpage", {});
  }
});
