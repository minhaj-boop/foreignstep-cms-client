"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import {
  MdDashboard,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { TiContacts } from "react-icons/ti";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "About",
    href: "/about",
    icon: BsPeople,
  },
  {
    name: "Mails",
    href: "/mails",
    icon: FiMail,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: TiContacts,
  },
];

const Sidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setToggleSidebar((prev) => !prev);
  };

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={handleToggleSidebar}>
        {toggleSidebar ? (
          <MdOutlineKeyboardArrowRight />
        ) : (
          <MdOutlineKeyboardArrowLeft />
        )}
      </button>
      {/* <button className="btn">
        <MdOutlineKeyboardArrowRight />
      </button> */}
      <aside className="sidebar" data-collapse={toggleSidebar}>
        <div className="sidebar__top">
          <Image
            src="/logoipsum-317.svg"
            alt=""
            width={80}
            height={80}
            className="sidebar__logo"
          />
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => (
            <li className="sidebar__item" key={name}>
              <Link href={href} className="sidebar__link">
                <span className="sidebar__icon">
                  <Icon />
                </span>
                <span className="sidebar__name">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
