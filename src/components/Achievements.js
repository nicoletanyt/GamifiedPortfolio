import React from "react";

//Icon Imports
import { FaRobot, FaMusic } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";

// Image Imports
import IDEImg from "../assets/01-ROBOTICS.png";
import p6ExcoImg from "../assets/01-SCHOOL.png";
import syfImg from "../assets/01-MUSIC.png";
import wroImg from "../assets/02-ROBOTICS.png";
import fllImg from "../assets/03-ROBOTICS.png";
import swiftAsso from "../assets/01-PROGRAMMING.png";
import planemail from "../assets/02-PROGRAMMING.png";
import susCity from "../assets/03-PROGRAMMING.png";

export const ACHIEVEMENTS = [
  {
    name: "Leadership",
    icon: <BsPeopleFill className="achievementIcon" />,
    sections: [
      {
        title: "Served as a Prefect EXCO Member in Primary School (2020)",
        details:
          "Being part of the 2020 Prefect EXCO allowed me to plan school events as a team, such as a teacher's day celebration, which helped me hone my leadership and collaboration skills. ",
        image: p6ExcoImg,
        credits: "",
      },
    ],
  },
  {
    name: "Robotics",
    icon: <FaRobot className="achievementIcon" />,
    sections: [
      {
        title: "IDE Competition (2021)",
        details:
          "In Secondary 1, I participated in the annual IDE Series, a team Robotics Competition. Through this competition, I was able to apply my software and lego building robot skills. Moreover, I also improved my collaboration skills and figured out some future improvement areas.",
        image: IDEImg,
        credits: "@roboapex on instagram",
      },
      {
        title: "WRO Regular Category - Secondary: Judges Award (2021)",
        details: "",
        image: wroImg,
        credits: "",
      },
      {
        title: "FLL Competition 2021-2022",
        details:
          "FLL (First Lego League) is an annual Robotics competition with an overarching theme every year. Through FLL, I improved my programming, building, and presentation skills, as this competition had a presentation component. In addition, I also cultivated my critical thinking skills as we had to brainstorm a possible solution to an issue about the overarching theme. ",
        image: fllImg,
        credits: "FLL Youtube",
      },
    ],
  },
  {
    name: "Music",
    icon: <FaMusic className="achievementIcon" />,
    sections: [
      {
        title:
          "Participated SYF as part of my Primary School Chinese Orchestra. (2018)",
        details:
          "Other than programming and my school life, another hobby of mine is playing music. An example is the cello, which I played as part of my school's Chinese Orchestra.",
        image: syfImg,
        credits: "",
      },
    ],
  },
  {
    name: "Programming Experience",
    icon: <BiCodeAlt className="achievementIcon" />,
    sections: [
      {
        title: "App Development with Swift - Associate (2023)",
        details: "",
        image: swiftAsso,
        credits: "",
      },
      {
        title: "PlaneMail",
        details:
          "Planemail is an app that helps you to organise your thoughts so you can structure your emails better. It is only available for IOS apps.",
        image: planemail,
        credits: "",
        link: "app.swiftinsg.org/planemail",
        linkText: "Download Planemail here",
      },
      {
        title: "SusCity",
        details:
          "SusCity (SustainableCity) is an educational geography game made using pure Javascript, CSS and HTML to help students visualise the geography concept taught in class. It is targeted at SST Students specifically because the geography content in the game is derived from SST's unique geography curriculum. Sneak peak of SusCity →",
        image: susCity,
        credits: "",
        link: "https://sus-city.github.io/SIGNUP-PAGE/signup.html",
        linkText: "Click here to start playing!",
      },
    ],
  },
];
