/* Small progressive enhancements for the ZipFlow site. No trackers. */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("primary-nav");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    links.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && links.classList.contains("is-open")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* Mark the current page in the navigation without needing per-page edits. */
  var here = window.location.pathname.replace(/index\.html$/, "");
  document.querySelectorAll(".nav-links a[href]").forEach(function (link) {
    var url = new URL(link.href, window.location.href);
    var path = url.pathname.replace(/index\.html$/, "");
    if (path === here && !link.hasAttribute("data-no-current")) {
      link.setAttribute("aria-current", "page");
    }
  });
})();
