document.addEventListener("DOMContentLoaded", () => {
  new fullpage("#fullpage", {
    navigation: true,
    anchors: ["banner", "statistics"],
    afterLoad: function (origin, destination, direction) {
      window.history.replaceState(null, null, `#${destination.anchor}`);
    },
  });
});
