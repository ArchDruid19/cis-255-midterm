function showMobileNavbar() {
    const desktop_nav = document.getElementById("top-navbar");
    const desktop_nav_flex = document.querySelector(".navlinks-container");

    // When the website first loads the top-navbar's style should be none but instead its just an empty string,
    // so we need to check if its either an empty string or actually none
    if (desktop_nav.style.display === "" || desktop_nav.style.display === "none") {
        desktop_nav.style.display = "inline";
        desktop_nav_flex.style.flexDirection = "column";
    } else {
        desktop_nav.style.display = "none";
    }


}