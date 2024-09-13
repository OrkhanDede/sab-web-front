document.addEventListener("DOMContentLoaded", () => {
  const width = document.body.clientWidth;
  if (width <= 991) {
    new fullpage("#fullpage", {
      navigation: true,
      anchors: ["buisness_directions", "services"],
      afterLoad: function (origin, destination, direction) {
        window.history.replaceState(null, null, `#${destination.anchor}`);
      },
    });
  }
});
