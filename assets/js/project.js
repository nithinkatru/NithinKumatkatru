AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Quiz App",
    cardImage: "assets/images/project-page/quiz.jpg",
    description: "A quiz app built using basic React.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Chess Engine",
    cardImage: "assets/images/project-page/chess.jpg",
    description: "A chess engine for a popular game dev engine.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Flappy Bird",
    cardImage: "assets/images/project-page/flappybird.png",
    description: "Flappy bird game built using React.js.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Exercise Tracker",
    cardImage: "assets/images/project-page/exercise.jpg",
    description: "Exercise tracker built using basic Redux.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Recipe Ingredient Parser",
    cardImage: "assets/images/project-page/recipe.jpg",
    description: "Recipe Ingredient Parser built using JavaScript.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Poker Game",
    cardImage: "assets/images/project-page/poker.jpg",
    description: "Poker game built using TypeScript.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Tic Tac Toe Game",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description: "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Personal Book Library",
    cardImage: "assets/images/project-page/book.png",
    description: "Personal book library app built using JavaScript.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Minesweeper Game",
    cardImage: "assets/images/project-page/minesweeper.jpg",
    description: "Minesweeper Game built using Python Object-Oriented Programming.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Battery Life Calculator",
    cardImage: "assets/images/project-page/battery.png",
    description: "Built battery life calculator using Python.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Movie Recommendation System",
    cardImage: "assets/images/project-page/movie-recommendation.jpeg",
    description: "Built using Tensorflow.",
    tagimg: "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Music Recommendation Engine",
    cardImage: "assets/images/project-page/music.jpg",
    description: "Built using Python.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Tesla Clone",
    cardImage: "assets/images/project-page/quiz.jpg",
    description: "Developed a Tesla website clone using React, Vite, and Tailwind CSS to showcase Tesla's vehicle lineup and its dynamic features. This website application replicates Tesla's sleek design and user interface, enhancing user experience with smooth navigation and engaging visuals. Leveraged Vite for fast development and optimized builds, while utilizing Tailwind CSS for streamlined styling. Integrated interactive elements like model car images, informational sections, and feature highlights, simulating Tesla's online experience.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Orebi E-commerce",
    cardImage: "assets/images/project-page/chess.jpg",
    description: "Developed an innovative e-commerce platform, 'Orebi,' enabling seamless online shopping experiences for users. The project involved full-stack development, implementing a scalable architecture, and integrating secure payment gateways, resulting in a user-friendly and efficient online marketplace. Key Responsibilities: Front-End Development: Designed and developed a responsive and intuitive user interface using React.js, enhancing user experience and engagement. Back-End Development: Built a robust backend using Node.js and Express, managing user data securely and efficiently. Database Management: Implemented a scalable database using MongoDB, optimizing data retrieval and storage for fast and reliable performance. Payment Gateway Integration: Integrated secure payment gateways, including PayPal and Stripe, ensuring seamless and secure transactions. Testing and Deployment: Conducted thorough testing using Jest and Cypress, ensuring the platform's stability before deploying it on AWS for global access.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "NextSkill-An E-learning app",
    cardImage: "assets/images/project-page/flappybird.png",
    description: "Our E-learning Platform revolutionizes online education by providing a dynamic, user-friendly environment for learners and educators. Developed with React, this platform features interactive courses, personalized learning paths, and real-time collaboration tools, designed to enhance the educational experience. Key functionalities include multimedia course content, progress tracking, and accessible learning for all users. Technologies: React.js, Redux, Node.js, Express.js, MongoDB, JWT for authentication, WebSocket for real-time communication. This project showcases my expertise in React and full-stack development, emphasizing scalable solutions, real-time data handling, and a commitment to inclusive education. Through this initiative, we're setting a new standard for online learning platforms.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/nithinkatru/E-learning-Platform---Empowering-Education-in-the-Digital-Age",
  },
  {
    title: "Weather App",
    cardImage: "assets/images/project-page/exercise.jpg",
    description: "A weather forecasting app built using JavaScript, HTML, and CSS. The app fetches data from an external API and displays the current weather conditions, as well as a 5-day forecast.",
    tagimg: "https://image.flaticon.com/icons/png/512/888/888870.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Budget Tracker",
    cardImage: "assets/images/project-page/recipe.jpg",
    description: "A budget tracking app developed using Angular and Firebase. This app helps users to track their income and expenses, set budget limits, and view detailed financial reports.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/angular-3-226070.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Fitness App",
    cardImage: "assets/images/project-page/poker.jpg",
    description: "A fitness tracking app built with React Native. The app allows users to log their workouts, track their progress, and set fitness goals. It also includes features like workout reminders and integration with wearable devices.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Food Delivery App",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description: "Developed a food delivery app using Flutter. The app allows users to browse restaurant menus, place orders, and track deliveries in real-time. It also supports multiple payment options and user reviews.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/flutter-2038877-1720090.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Chat Application",
    cardImage: "assets/images/project-page/book.png",
    description: "A real-time chat application built using Node.js, Express, and Socket.io. The app supports private and group messaging, user authentication, and message notifications.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, tagimg, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h1 class="title"><a href="#">${title}</a></h1>
                </div>
                <p>${description}</p>
                <img src="${tagimg}" class="tag-image" alt="${title}">
                <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
