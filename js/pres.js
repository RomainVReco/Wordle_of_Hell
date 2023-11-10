document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
  
    sections.forEach((section) => {
      section.addEventListener("click", function () {
        const content = section.querySelector(".content");
        console.log (content)
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  });
