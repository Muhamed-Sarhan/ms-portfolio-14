//Import Images

import mainmovieApp from "./img/movie2.jpg";
import secondarymovieApp from "./img/movie6.jpg";
import mainwatchApp from "./img/watch6.jpg";
import secondarywatchApp from "./img/watch5.jpg";
import mainfriendsApp from "./img/friends3.jpg";
import secondaryfriendsApp from "./img/friends4.png";
import mainquizApp from "./img/quiz13.jpg";
import secondaryquizApp from "./img/quiz14.jpg";
import maintodoApp from "./img/to-do.jpg";
import secondarytodoApp from "./img/to-do12.jpg";
import maingalleryApp from "./img/gallery1.jpg";
import secondarygalleryApp from "./img/gallery3.jpg";
import maincovidApp from "./img/covid3.jpg";
import secondarycovidApp from "./img/covid8.jpg";
import mainbreakingbadApp from "./img/breaking-bad1.jpg";
import secondarybreakingbadApp from "./img/breaking-bad2.jpg";
import maintravolicApp from "./img/travolic2.jpg";
import secondarytravolicApp from "./img/travolic3.jpg";
import mainqatarApp from "./img/qatar2.webp";
import secondaryqatarApp from "./img/qatar1.png";
import mainportfolioApp from "./img/portfolio5.jpg";
import secondaryportfolioApp from "./img/portfolio6.png";
import html from "./img/html-1.svg";
import css from "./img/css.svg";
import js from "./img/javascript2.svg";
import jQuery from "./img/jquery-4.svg";
import react from "./img/react-2.svg";
import sass from "./img/sass-1.svg";
import redux from "./img/redux.svg";
import styledComponentIcon from "./img/styled-components-1.svg";
import wordpress from "./img/wordpress-blue.svg";
import bootstrap from "./img/bootstrap-5-1.svg";
import angular from "./img/angular-icon-1.svg";

export const ProjectState = () => {
  return [
    {
      title: "MS14 ENTERTAINMENT",
      mainImg: mainmovieApp,
      secondaryImg: secondarymovieApp,
      url: "/work/ms14-entertainment",
      link: "https://ms14-entertainment.web.app/",
      about:
        "“In this project I worked with a TMDB api. This project is about movies and Tv shows and thier rates.”",
      imgs: [js, react, sass],
      goals: [
        "Work with Apis",
        "Work in a project with sass",
        "Increase my Ui skills",
      ],
    },
    {
      title: "WATCHES STORE",
      mainImg: mainwatchApp,
      secondaryImg: secondarywatchApp,
      url: "/work/watches-store",
      link: "https://ms14-e-commerce.web.app/",
      about:
        "“In this project I wanted to work on an E-commerce app. This project is about watches store.”",
      imgs: [js, react, css],
      goals: [
        "Work on an E-commerce app",
        "Work with a context Api",
        "Work with firebase authentication",
      ],
    },
    {
      title: "FRIENDS STORE",
      mainImg: mainfriendsApp,
      secondaryImg: secondaryfriendsApp,
      url: "/work/friends-store",
      link: "https://friends-store-14.web.app/",
      about:
        "“In this project I wanted to work on an E-commerce app. This project is about friends tv show stuff store.”",
      imgs: [js, react, styledComponentIcon],
      goals: [
        "Work on an E-commerce app",
        "Work with a context Api",
        "Work with firebase authentication",
        "Work with filters on the DB",
      ],
    },
    {
      title: "QUIZ GAME",
      mainImg: mainquizApp,
      secondaryImg: secondaryquizApp,
      url: "/work/quiz-app",
      link: "https://ms14-quiz-app.web.app/",
      about:
        "“In this project I wanted to increase my skills in js and react and work with redux. This project is a funny quiz game.”",
      imgs: [js, react, redux, css],
      goals: [
        "Increase my skills in Redux",
        "Try to create a funny and creative app",
      ],
    },
    {
      title: "TO DO APP",
      mainImg: maintodoApp,
      secondaryImg: secondarytodoApp,
      url: "/work/to-do-app",
      link: "https://ms14-to-do-app.web.app/",
      about:
        "“In this project I wanted to increase my skills in js and react and work with hooks. This project is a to do app.”",
      imgs: [js, react, css],
      goals: [
        "Increase my basic skills in React",
        "Want to work on update , delete and add tasks",
      ],
    },
    {
      title: "GALLERY APP",
      mainImg: maingalleryApp,
      secondaryImg: secondarygalleryApp,
      url: "/work/gallery-app",
      link: "https://ms-14-gallery.web.app/",
      about:
        "“In this project I wanted to increase my skills in js and react and work with hooks. This project is a Gallery app.”",
      imgs: [js, react, css],
      goals: [
        "Increase my basic skills in React",
        "Want to create a grid gallery with a smoothly images",
      ],
    },
    {
      title: "COVID 19 APP",
      mainImg: maincovidApp,
      secondaryImg: secondarycovidApp,
      url: "/work/covid-19-app",
      link: "https://covid-19-e1d6d.web.app/",
      about:
        "“In this project I wanted to increase my skills in js and react and work with hooks. This project is a covid-19 app.”",
      imgs: [js, react, css],
      goals: [
        "Increase my basic skills in React",
        "Want to work on map api",
        "Work on a covid api",
        "Work on a covid api",
        "Work with a a chart.js library",
      ],
    },
    {
      title: "BREAKING BAD APP",
      mainImg: mainbreakingbadApp,
      secondaryImg: secondarybreakingbadApp,
      url: "/work/breaking-bad-app",
      link: "https://breaking-bad-ms14-app.herokuapp.com/",
      about:
        "“In this project I wanted to increase my skills in js and react and work with hooks. This project is a breaking-bad app.”",
      imgs: [js, react, css],
      goals: [
        "Increase my basic skills in React",
        "Want to work with hooks",
        "Want to work with api",
      ],
    },
    {
      title: "TRAVOLIC WORK",
      mainImg: maintravolicApp,
      secondaryImg: secondarytravolicApp,
      url: "/work/travolic-app",
      link: "https://travolic.com/",
      about:
        "“In this project I worked with a team in a company to increase my skills in js and react and work and gain more experience. This project is a book flights app.”",
      imgs: [js, react, redux, css],
      goals: [
        "Increase my basic skills in React",
        "Want to work with a team",
        "Want to gain more experience",
      ],
    },
    {
      title: "QATAR APP",
      mainImg: mainqatarApp,
      secondaryImg: secondaryqatarApp,
      url: "/work/fifa-world-cup-app",
      link: "https://who-will-win-2022.netlify.app/",
      about:
        "“In this project I wanted to increase my skills in js and angular. This project is a fifa world cup app.”",
      imgs: [html, css, js, bootstrap, angular],
      goals: ["Increase my basic skills in Angular"],
    },
    {
      title: "MS14 OLD PORTFOLIO",
      mainImg: mainportfolioApp,
      secondaryImg: secondaryportfolioApp,
      url: "/work/ms14-old-portfolio",
      link: "https://ms14.netlify.app/",
      about:
        "“In this project I wanted to increase my skills in html , css ,js and jquery. This project is a my old portfolio.”",
      imgs: [html, css, js, jQuery],
      goals: [
        "Increase my basic skills in Html , Css , Js and jQuery",
        "Want to work with a jQuery libraries",
        "Want to gain more experience",
      ],
    },
  ];
};
