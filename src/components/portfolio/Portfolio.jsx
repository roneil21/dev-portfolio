import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/gpt.png";
import IMG2 from "../../assets/notes.png";
import IMG3 from "../../assets/game.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "ReactJS: Modern UI/UX Design",
    github: "https://github.com/roneil21/react-gpt",
    demo: "https://roneil21.github.io/react-gpt/",
  },
  {
    id: 2,
    image: IMG2,
    title: "ReactJS : StickyNotes App",
    github: "https://github.com/roneil21/stickynotes-app2",
    demo: "https://roneil21.github.io/stickynotes-app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Rock Paper Scissors Game ",
    github: "https://github.com/roneil21/RockPaperScissorsGame",
    demo: "https://roneil21.github.io/RockPaperScissorsGame/",
  
  },
  {
    id: 4,
    image: IMG4,
    title: "Article Summarizer App Using React",
    github: "https://github.com/roneil21/summarizer-app",
    demo: "https://roneil21.github.io/summarizer-app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Slider App Using React and SwiperJS",
    github: "https://github.com/roneil21/slider-app",
    demo: "https://roneil21.github.io/slider-app/",
  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Title",
  //   github: "https://github.com/roneil21",
  //   demo: "https://github.com/roneil21",
  // },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
