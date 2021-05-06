//bird animation
window.onload = () => {
  setTimeout(() => {
    document.getElementById('intro-heading').classList.remove('hidden-heading');
    document.getElementById('intro-heading').classList.add('animate__flipInX');
  }, 200);
  setTimeout(() => {
    const origami = document.getElementsByClassName('origami');
    origami[0].classList.add('animate__wobble');
  }, 1000);

  //initiate carousel
  const myCarousel = document.getElementById('myCarousel');
  const carousel = new bootstrap.Carousel(myCarousel, {
    slide: true,
    ride: 'carousel',
    interval: 1,
    pause: false,
    wrap: true,
    keyboard: false,
    touch: false
  });

  //start carousel
  carousel.cycle();
}



//carousel logic

const skills = {
  react() {
    return "React.js is a front-end Javascript library that is made for building user interfaces. It was created and is maintained by Facebook."
  },
  node() {
    return "Node is an open source server environment that allows Javascript to run outside of a web browser. It is built using Chrome's V8 JavaScript Engine."
  },
  mongo() {
    return "MongoDB is a NoSQL database that relies on JavaScript objects in order to store data. This can be very useful when trying to scale applications horizontally."
  },
  docker() {
    return "Docker allows users to package code so that it's able to run on any system regardless of the Operating System that is currently running. This prevents dependency errors that can occur from working on a different system."
  },
  github() {
    return "GitHub is a web platform that allows users to collaborate with others on revising code and provides a repository where the code can be stored."
  },
  git(){
    return "Git allows developers to take control of their applications with version control. Make a mistake? Just roll back to an older version or discard your changes!"
  },
  stripe() {
    return "The Stripe API allows businesses and developers to integrate credit and debit card transactions into their websites or applications."
  },
  digitalOcean() {
    return "Digital Ocean is a web platform that allows hosting and scaling of web applications."
  },
  bootstrap() {
    return "Bootstrap is a web development library that uses prebuilt components to simplify the design process and speed up development."
  }
}

const i = document.querySelectorAll('.tech-icon');
const d = document.getElementById('description');
const x = document.getElementById('close-btn');

//add event listener to close button
x.addEventListener('click', (e) =>{
  hidden(true)
});

//Nodelist has its own forEach
i.forEach(icon => {
  icon.addEventListener('click', (e) => {
    handleClick(e)
  })
});
//hide
function hidden(isHid){
  isHid ? (d.classList.add('hidden'),  x.classList.add('hidden')) : (d.classList.remove('hidden'), x.classList.remove('hidden'));
}

//handle clicks
function handleClick(e){
  try{
    switch(e.target.nextElementSibling.innerText){
      case 'React.js':
        hidden(true);
        d.innerText = skills.react();
        hidden(false);
        break;
      case 'Node.js':
        hidden(true);
        d.innerText = skills.node();
        hidden(false);
        break;
      case 'MongoDB':
        hidden(true);
        d.innerText = skills.mongo();
        hidden(false);
        break;
      case 'Docker':
        hidden(true);
        d.innerText = skills.docker();
        hidden(false);
      break;
      case 'GitHub':
        hidden(true);
        d.innerText = skills.github();
        hidden(false);
      break;
      case 'Git':
        hidden(true);
        d.innerText = skills.git();
        hidden(false);
      break;
      case 'Stripe':
        hidden(true);
        d.innerText = skills.stripe();
        hidden(false);
      break;
      case 'Digital Ocean':
        hidden(true);
        d.innerText = skills.digitalOcean();
        hidden(false);
      break;
      case 'Bootstrap':
        hidden(true);
        d.innerText = skills.bootstrap();
        hidden(false);
      break;
      default:
      console.log("none selected")
    }
  }catch{
    console.log("You might be clicking a little too fast!")
  }
}

console.log("Hey, what're you doing here? Who let you use the dev console?")
