import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineSetting,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import { BsPostcard, BsPencilSquare } from "react-icons/bs";
import { MdWidgets, MdOutlineBackup } from "react-icons/md";
import { SiReacthookform } from "react-icons/si";
import { SlCalender } from "react-icons/sl";

import { FaChartSimple } from "react-icons/fa6";

export const menu = [
  {
    id: 1,
    title: "Main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: <AiOutlineHome />,
      },
      {
        id: 2,
        title: "Profile",
        url: "/profile",
        icon: <FiUsers />,
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: <HiOutlineUsers />,
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: <AiOutlineShoppingCart />,
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: <CgNotes />,
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: <BsPostcard />,
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/elements",
        icon: <MdWidgets />,
      },
      {
        id: 2,
        title: "Notes",
        url: "/notes",
        icon: <BsPencilSquare />,
      },
      {
        id: 3,
        title: "Forms",
        url: "/forms",
        icon: <SiReacthookform />,
      },
      {
        id: 4,
        title: "Calender",
        url: "/calender",
        icon: <SlCalender />,
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/settings",
        icon: <AiOutlineSetting />,
      },
      {
        id: 2,
        title: "Backups",
        url: "/backups",
        icon: <MdOutlineBackup />,
      },
    ],
  },
  {
    id: 5,
    title: "Analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/charts",
        icon: <FaChartSimple />,
      },
      {
        id: 2,
        title: "Logs",
        url: "/logs",
        icon: <CgNotes />,
      },
    ],
  },
];
