"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import HomePage from "@/components/Home/HomePage";
import NavBar from "@/components/Navigation/NavBar/NavBar";
import ProjectsPage from "@/components/Projects/ProjectsPage";
import ContactsPage from "../Contacts/ContactsPage";
import AboutPage from "../About/AboutPage";
import clsx from "clsx";

export enum EnumPage {
  Home = "home",
  Projects = "projects",
  Contacts = "contacts",
  About = "about",
}

export default function App() {
  const [activePage, setActivePage] = useState<EnumPage>(EnumPage.Home);
  const [clickProjects, setClickProjects] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (page: EnumPage) => {
    setActivePage(page);
  };

  // для анимации пролистывания псевдостраниц
  useEffect(() => {
    const windowWidth = window.innerWidth;

    switch (activePage) {
      case EnumPage.Home:
        gsap.to(containerRef.current, {
          x: 0,
          duration: 1,
          ease: "power2.inOut",
        });
        setClickProjects(false);
        break;
      case EnumPage.Projects:
        gsap.to(containerRef.current, {
          x: -windowWidth,
          duration: 1,
          ease: "power2.inOut",
        });
        setClickProjects(true);
        break;
      case EnumPage.Contacts:
        gsap.to(containerRef.current, {
          x: -windowWidth * 2,
          duration: 1,
          ease: "power2.inOut",
        });
        setClickProjects(false);

        break;
      case EnumPage.About:
        gsap.to(containerRef.current, {
          x: -windowWidth * 3,
          duration: 1,
          ease: "power2.inOut",
        });
        setClickProjects(false);

        break;
    }
  }, [activePage]);

  // запрет на скролл по x-оси
  useEffect(() => {
    const preventScroll = (e: WheelEvent) => {
      if (e.deltaX !== 0) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventScroll);
    };
  }, []);

  return (
    <>
      <main className={clsx("flex flex-row appMain")} ref={containerRef}>
        <div className="min-w-full max-w-full">
          <HomePage />
        </div>
        <div className="min-w-full max-w-full">
          <ProjectsPage />
        </div>
        <div className="min-w-full max-w-full">
          <ContactsPage />
        </div>
        <div className="className=min-w-full max-w-full">
          <AboutPage />
        </div>
      </main>
      <NavBar
        handlePageChange={handlePageChange}
        clickProjects={clickProjects}
      />
    </>
  );
}
