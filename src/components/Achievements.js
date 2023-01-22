//Icon Imports
import { MdSchool } from "react-icons/md";
import { FaRobot, FaMusic } from "react-icons/fa";

export const ACHIEVEMENTS = [
  {
    name: "School",
    icon: <MdSchool className="achievementIcon" />,
    revealed: false,
  },
  {
    name: "Robotics",
    icon: <FaRobot className="achievementIcon" />,
    revealed: false,
  },
  {
    name: "Music",
    icon: <FaMusic className="achievementIcon" />,
    revealed: false,
  },
];
