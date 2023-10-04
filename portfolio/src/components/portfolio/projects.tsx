import mobileImage from "../../assets/about.png"
import webImage from "../../assets/profile.png"

// Quiz
import correct from "../../assets/project-images/quiz-app/correct.png"
import home from "../../assets/project-images/quiz-app/home.png"
import incorrect from "../../assets/project-images/quiz-app/incorrect.png"
import result from "../../assets/project-images/quiz-app/result.png"

// Snake
import snake from "../../assets/project-images/snake/snake.png"

// Spotify
import spotify from "../../assets/project-images/spotify-app/spotify.png"
export const projectsSets = {
    web: [
      {
        id: 1,
        name: "Snake",
        image: {
          projectImage: [snake],
        },
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus!",
        link: ""
      },
      {
        id: 2,
        name: "Web 2",
        image: {
          projectImage: [mobileImage, webImage],
        },
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus!",
        link: ""
      },
      {
        id: 3,
        name: "web 3",
        image: {
          projectImage: [mobileImage, webImage],
        },
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus!",
        link: ""
      }
    ],
    mobile: [
        {
          id: 1,
          name: "Quiz App",
          image: {
            projectImage: [home, correct, incorrect, result],
          },
          description: "Quiz app where you can choose difficulty. When the you are done, the score is displayed and you can choose to play again or change the difficulty.",
          link: "https://github.com/jonasanders1/quizz"
        },
        {
          id: 2,
          name: "Playlist generator",
          image: {
            projectImage: [spotify],
          },
          description: "An app that uses AI for generating playlists. Using ChatGPT`s API to generate songs based on the prompt.",
          link: ""
        },
        {
          id: 3,
          name: "Advanced Todo list",
          image: {
            projectImage: [mobileImage, webImage],
          },
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus!",
          link: ""
        },
      ]
  };
  