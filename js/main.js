const p = [
  {
      name:"PolyRave VR",
      img: "polyrave.png",
      text:"Immerive VR experience on the web where you can enjoy a music festival in the forest. Made in a project course at Linköpings University.",
      tech: ["Typescript", "Node.js", "WebVR", "WebGL", "Three.js", "Webpack", "Web Audio API", "Google Poly API"],
      link: "https://davjo664.github.io/polyrave-vr"
  },
  {
    name: "Parkspot",
    img: "parkspot.png",
    text: "Parkspot is an application for finidg park spots in your city. The app works for both IOS and Andorid. In the app you can search for destinations and navigate to it and filters can be used to specify the park spot.",
    tech: ["React Native", "Redux", "TypeORM", "PostgreSQL", "Docker", "Google maps API", "Google places API"],
    link: "https://github.com/davjo664/parkspot"
  },
  {
    name: "Webther",
    img: "webther.png",
    text: "Visualization of weather data fetched from SMHI's API. Shows 10 days forecast for all cities in Sweden. The visualization includes: Temperature, Cloudyness, Rainfall, Wind and Humidity",
    tech: ["WebGL", "Three.js", "jQuery", "SMHI'S API", "Parse cloud database"],
    link: ""
  },
  {
    name: "Marshmallow (Mobile)",
    img: "marshmallow_mobile.png",
    text: "Addictive jumper game where the goal is to climb as high as possible to beat the highscore and unlock new abilities. Released on Apple Store and Google Play.",
    tech: ["libGDX", "Java"],
    link: ""
  },
  {
    name: "Marshmallow (Web)",
    img: "marshmallow_web.png",
    text: "Web version of my game Marshmallow, an addictive jumper game where the goal is to climb as high as possible to beat the highscore and unlock new abilities.",
    tech: ["Phaser3", "Typescript", "Webpack"],
    link: "https://davjo664.github.io/marshmallow/"
  },
  {
    name: "Exploring Lava Planet",
    img: "exploring_lava_planet.png",
    text: "Infinite lava planet generated with procedural methods.",
    tech: ["WebGL", "Three.js", "Typescript", "Webpack"],
    link: "https://davjo664.github.io/exploring-lava-planet/"
  },
  {
    name: "QR-Menyn",
    img: "qrmenyn.png",
    text: "An application made in 'Software Engineering Entrepreneurship' course at Linköping University. The app simplifies the process of ordering and paying for food in restaurants by offering the customer a way to order their food independently by scaning a QR-code on the restaurant table. Payment is done in the app through the Swish App2App solution directly to the restaurant." ,
    tech: ["React Native", "Swish API", "Google Firebase"],
    link: "https://github.com/davjo664/splitta"
  },
  {
    name: "MovieDB",
    img: "moviedb.png",
    text: "Responsive web app for managing movie watch lists. The user can create an account, search movies, read about them and add them to their watch list. Information about the movies are fetched from the themoviedb (TMDb) API." ,
    tech: ["React", "Redux", "Node.js", "Express", "Docker"],
    link: "https://github.com/davjo664/moviedb"
  },
  {
    name: "The Book Lounge",
    img: "thebooklounge.png",
    text: "The Book Lounge is an event held in Norrköping where some of Sweden's best writers, designers, illustrators meet. The arranger was in need of a good looking web site and logotype for this event. ",
    tech: ["HTML", "CSS", "Javascript", "Three.js", "Adobe Photoshop"],
    link: "https://thebooklounge-esoucprytc.now.sh/"
  },
  {
    name: "AR Experiment",
    img: "arexperiment.png",
    text: "Experiment using Apple's ARKit to place different type of furniture in a room with realistic lighting. The user can interact with the objects and move them along with the floor and rotate them.",
    tech: ["React Native", "Expo SDK", "Three.js", "Google Poly API", "Apple ARKit"],
    link: "https://github.com/davjo664/expo-ar"
  },
  {
    name: "Garageportexperten 20th Anniversary",
    img: "garageportexperten.png",
    text: "Garageportexperten is established in nearly 60 locations in Sweden and in 2015 they celebrated their 20th anniversary. To this anniversary they were in need of a film that would summarize their years in the industry containing pictures, films, brochures, audio files and more." ,
    tech: ["Adobe Photoshop", "Adobe After Effects"],
    link: ""
  },
  {
    name: "Listig",
    img: "listig.png",
    text: "In a project course in Usability and Interface Design this user-friendly application for Android was created to keep track of recepies and ingredients.",
    tech: ["Java", "Android Studio", "Google Firebase"],
    link: ""
  },
  {
    name: "Ballpit",
    img: "ballpit.png",
    text: "Ballpit is an multiplayer AR game where the goal is to knock out your oponents from the game area. This game was part of my Bachelor Thesis." ,
    tech: ["libGDX", "Java", "Vuforia"],
    link: "https://github.com/davjo664/kandidat"
  },
  {
    name: "Winterwise",
    img: "winterwise.png",
    text: "Winterwise gives the citizens the opportunity to easily see the status of the roads and bicycle paths/walkways if they are plowed or sanded/gravel/salted in the winter time. For example, you can see which way you should drive, which path to choose to run or the best bike path to your work. Data is gathered from an mobile app inside the plow machine and then visualized in the web app. The project won the category 'Civil environment and transportation' in the East Sweden Hack competition held in Linköping 2016.",
    tech: ["React", "Redux", "Socket.IO", "Google Maps API"],
    link: "https://github.com/davjo664/react-snowplow"
  },
  {
    name: "Elva - Linköping Virtual Assistant",
    img: "elva.png",
    text: "Elva is a Facebook Messenger bot that was built in a compition held by Linköping Kommun. Elva is connected to an API provided by Linköpings Kommun containing information about events in the city and can answer relevant questions about events in the city. Elva is using Google Dialogflow to understand the context of the questions.",
    tech: ["Facebook Messenger Web Hook", "Google Dialog Flow", "Heroku", "Express", "Node.js"],
    link: "https://github.com/davjo664/chat-bot"
  },
  {
    name:"Mattboden",
    img: "mattboden.png",
    text:"Mattboden sells carpets and furnishings and was in need of a more modern website. This website was developed during the summer of 2015 as a part-time job.",
    tech: ["HTML","CSS","Javascript"],
    link: ""
  },
  {
    name: "Walléns Måleri",
    img: "wallensmaleri.png",
    text: "Walléns Måleri is a small painting company that was in need of a modern and stylish website to attract new customers.",
    tech: ["HTML", "CSS", "Javascript"],
    link: ""
  },
  {
    name: "Aegiir",
    img: "aegiir.png",
    text: "Aegiir is making electronic music and was in need of a new clean website for marketing.",
    tech: ["HTML", "CSS", "Javascript"],
    link: ""
  }

]

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
}

// When the user clicks the button, open the modal 
onclickk = function(id) {
  modal.getElementsByTagName("h1")[0].innerHTML = p[id].name;
  modal.getElementsByTagName("h2")[0].innerHTML = p[id].text;
  modal.getElementsByClassName("modal-img")[0].style = "background: #333 url(img/projects/"+p[id].img+") no-repeat center center/cover; height: 50vh;";
  // modal.getElementsByTagName("h3")[0].innerHTML = "Technologies used: " + p[id].tech;
  var tech = "";
  for (var i = 0; i < p[id].tech.length; i++) {
    tech += '<span id="badge">'+ p[id].tech[i] +'</span>'
  }
  modal.getElementsByTagName("h3")[1].innerHTML = "Technologies: " + tech;
  var h3 = modal.getElementsByTagName("h3")[0];
  h3.getElementsByTagName("a")[0].innerHTML = p[id].link;
  h3.getElementsByTagName("a")[0].href = p[id].link;
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
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
const projectLink = document.getElementById("project_link");

// Set Initial State Of Menu
let showMenu = false;



homeLink.addEventListener('click', function() {toggleMenu("#home")});
projectLink.addEventListener('click', function() {toggleMenu("#projects")});

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
