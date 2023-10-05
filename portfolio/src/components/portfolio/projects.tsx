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

// Portfolio
import portfolio from "../../assets/project-images/portfolio/portfolio.png"


const customColor = {
    typescript: "#387cc8",
    javascript: "#f0db4c",
    swift: "#f25740"
}

export const projectsSets = {
    web: [
      {
        id: 1,
        name: "Snake",
        image: {
          projectImage: [snake],
        },
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus!",
        link: "",
        icon: "javascript",
        language: "JavaScript",
        color: customColor.javascript
      },
      {
        id: 2,
        name: "Portfolio",
        image: {
          projectImage: [portfolio],
        },
        description: "Fully responsive personal website that showcases my projects and experience.",
        link: "https://github.com/jonasanders1/Portfolio-app",
        icon: "typescript",
        language: "TypeScript",
        color : customColor.typescript
      },
    ],
    mobile: [
        {
          id: 1,
          name: "Quiz App",
          image: {
            projectImage: [home, correct, incorrect, result],
          },
          description: "Quiz app where you can choose difficulty. When the you are done, the score is displayed and you can choose to play again or change the difficulty.",
          link: "https://github.com/jonasanders1/quizz",
          icon: "typescript",
          language: "TypeScript",
          color: customColor.typescript
        },
        {
          id: 2,
          name: "Playlist generator",
          image: {
            projectImage: [spotify],
          },
          description: "An app that uses AI for generating playlists. Using ChatGPT`s API to generate songs based on the prompt.",
          link: "",
          icon: "apple",
          language: "Swift",
          color: customColor.swift
        },
        {
          id: 3,
          name: "Todo list",
          image: {
            projectImage: [mobileImage, webImage],
          },
          description: "Advanced todo list with user authentication, login and register using firebase!",
          link: "",
          icon: "apple",
          language: "Swift",
          color: customColor.swift
        },
      ]
  };
  