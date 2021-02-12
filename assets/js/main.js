window.onload = function() {

  const get = (selector) => document.querySelector(selector);

  // const exploreBtn = get("#explore");
  const menu = get(".dropdown-menu");
  const menuBtn = get(".dropdown-toggle");
  const closeBtn = get(".close");

  const explore = () => {
    menu.className += " show";
    closeBtn.setAttribute('style', 'display:block !important');
  }

  closeBtn.addEventListener("click", function () {
    closeBtn.setAttribute('style', 'display:none !important');
    menu.classList.remove("show");
  });

  // exploreBtn.addEventListener("click", explore);

  setInterval(() => {
    if (menuBtn.classList.contains('show')) {
      closeBtn.setAttribute('style', 'display:block !important');
    }
  }, 1000);

}
