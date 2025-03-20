document.addEventListener("DOMContentLoaded", function () {
    let topButton = document.createElement("button");
    topButton.innerText = "↑ Top";
    topButton.id = "backToTop";
    document.body.appendChild(topButton);

    // Style the button
    topButton.style.position = "fixed";
    topButton.style.bottom = "20px";
    topButton.style.right = "20px";
    topButton.style.padding = "10px 15px";
    topButton.style.backgroundColor = "#333";
    topButton.style.color = "white";
    topButton.style.border = "none";
    topButton.style.borderRadius = "5px";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";
    topButton.style.fontSize = "16px";
    topButton.style.zIndex = "1000";

    // Show/hide button on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    // Scroll to top on click
    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
