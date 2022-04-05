navToggle = document.getElementsByClassName("menu-toggle")[0];
navBar = document.getElementsByClassName("primary-navigation")[0];

navToggle.addEventListener("click", () => {
    navState = navBar.getAttribute("data-mobile-nav-state");

    if (navState == "closed") {
        navToggle.setAttribute("aria-label", "close menu");
        navBar.setAttribute("data-mobile-nav-state", "open");
    }
    else if (navState == "open") {
        navToggle.setAttribute("aria-label", "menu");
        navBar.setAttribute("data-mobile-nav-state", "closed");
    }
})