// $('html, body').scrollTop(0);

// Select DOM Items
const homeLink = document.getElementById("home_link");
const aboutLink = document.getElementById("about_link");

// Set Initial State Of Menu
let showMenu = false;



homeLink.addEventListener('click', function() {toggleMenu("#home")});
aboutLink.addEventListener('click', function() {toggleMenu("#about")});

function toggleMenu(link) {
  console.log("click");
  console.log(link);
  // Smooth Scrolling
  var checkbox = $("#checkbox");
  checkbox.click();


    $('html, body').animate(
      {
        scrollTop: $(link).offset().top
      },
      800
    )
}
