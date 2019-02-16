const p = [
  {
      name:"Mattboden",
      img: "mattboden.png",
      text:"Mattboden sells carpets and furnishings and was in need of a more modern website. This website I developed during the summer of 2015 as a part-time job.",
      tech: "HTML, CSS and Javascript",
      link: ""
  },
  {
      name:"PolyRave VR",
      img: "polyrave.png",
      text:"Immerive VR experience on the web where you can enjoy a music festival in the forest. Made in a project course at Linköpings University.",
      tech: "Typescript, Node.js, WebVR, WebGL, Three.js, Webpack, Web Audio API",
      link: "https://davjo664.github.io/polyrave-vr"
  },
  {
    name: "Walléns Måleri",
    img: "wallensmaleri.png",
    text: "Walléns Måleri is a small painting company that was in need of a modern and stylish website to attract new customers.",
    tech: "HTML, CSS and Javascript",
    link: ""
  },
  {
    name: "Aegiir",
    img: "aegiir.png",
    text: "Aegiir is making electronic music and was in need of a new clean website for publicity.",
    tech: "HTML, CSS and Javascript",
    link: ""
  },
  {
    name: "Parkspot",
    img: "parkspot.png",
    text: "Parkspot is an application for finidg park spots in your city. The app works for both IOS and Andorid. In the app you can search for destinations and navigate to it and filters can be used to specify the park spot.",
    tech: "React Native, Redux, TypeORM, PostgreSQL, Docker, Google maps API, Google places API",
    link: ""
  },
  {
    name: "Listig",
    img: "listig.png",
    text: "In a project course in  Usability and Interface design our project group created a user friendly application for Android to keep track of recepies and ingredients.",
    tech: "Java, Android Studio, Google Firebase",
    link: ""
  },
  {
    name: "Webther",
    img: "webther.png",
    text: "Visualization of weather data from SMHI's API. Shows 10 days forecast for all cities in Sweden.",
    tech: "WebGL, Three.js, jQuery, SMHI'S API, Parse cloud database",
    link: ""
  },
  {
    name: "Marshmallow (Mobile)",
    img: "marshmallow_mobile.png",
    text: "Addictive jumper game where the goal is to climb as high as possible to beat the highscore and unlock new abilities. Released on Apple Store and Google Play.",
    tech: "libGDX, Java",
    link: ""
  },
  {
    name: "Marshmallow (Web)",
    img: "marshmallow_web.png",
    text: "Web version of my game Marshmallow, an addictive jumper game where the goal is to climb as high as possible to beat the highscore and unlock new abilities.",
    tech: "Phaser3, Typescript, Webpack",
    link: "https://davjo664.github.io/marshmallow/"
  },
  {
    name: "Exploring Lava Planet",
    img: "exploring_lava_planet.png",
    text: "Infinite lava planet generated with procedural methods.",
    tech: "WebGL, Three.js, Typescript, Webpack",
    link: "https://davjo664.github.io/exploring-lava-planet/"
  },
  {
    name: "QR-Menyn",
    img: "qrmenyn.png",
    text: "An application I made in a course in 'Software Engineering Entrepreneurship' that simplifies the ordering of food in restaurants by offering the customer a way to order their food independently using the app and a QR-code on the restaurant table. Payment is done through swish directly to the restaurant." ,
    tech: "React Native, Swish API, Google Firebase",
    link: "https://github.com/davjo664/splitta"
  },
  {
    name: "MovieDB",
    img: "moviedb.png",
    text: "Responsive web app for managing movie watch lists. The user can create an account, search movies, read about them and add them to their watch list. Information about the movies are fetched from the themoviedb (TMDb) API." ,
    tech: "React, Redux, Node.js, Express, Docker",
    link: "https://github.com/davjo664/moviedb"
  },

]

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks the button, open the modal 
onclickk = function(id) {
  modal.getElementsByTagName("h2")[0].innerHTML = p[id].name;
  modal.getElementsByTagName("p")[0].innerHTML = p[id].text;
  modal.getElementsByClassName("modal-img")[0].style = "background: #333 url(../img/projects/"+p[id].img+") no-repeat center center/cover; height: 50vh;";
  modal.getElementsByTagName("h3")[0].innerHTML = "Technologies used: " + p[id].tech;
  modal.getElementsByTagName("a")[0].innerHTML = p[id].link;
  modal.getElementsByTagName("a")[0].href = p[id].link;
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

for (var i = 0; i < p.length; i++) {
  $( ".projects" ).append( `

<div class="item">
					<a href="javascript:onclickk(${i});">
						<img src="img/projects/${p[i].img}">
					</a>
				</div>
` );
}



			
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");



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
