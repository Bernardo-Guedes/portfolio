"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import ProjectCard from "./ProjectCard"
import olympicLogo from "../assets/images/logo_olympic_conscience.png"
import olympicPrint from "../assets/images/print_olympic_conscience.png"
import pyArenaLogo from "../assets/images/logo_champions_pyarena.png"
import pyArenaPrint from "../assets/images/print_champions_pyarena.png"
import radioPrint from "../assets/images/print_radiobrowser.png"
import radioLogo from "../assets/images/logo_radiobrowser.png"

const items = [
  {
    id: 1,
    title: "Olympic Conscience",
    image: olympicPrint,
    logoImage: olympicLogo,
    tools: ["HTML 5", "CSS 3", "JavaScript"],
    iconTools: ["devicon-html5-plain", "devicon-css3-plain", "devicon-javascript-plain"],
    gitHubUrl: "https://github.com/Bernardo-Guedes/olympic-conscience",
    description: "Olympic Conscience gathers important information about scientific Olympiads in a news hub, while also providing access to study-oriented content and enabling user interaction. The platform also fosters the sharing of experiences and healthy competition through a ranking system based on active community participation."
  },
  {
    id: 2,
    title: "Champions Of The PyArena",
    image: pyArenaPrint,
    logoImage: pyArenaLogo,
    tools: ["Python", "Pygame"],
    iconTools: ["devicon-python-plain", "devicon-python-plain"],
    gitHubUrl: "https://github.com/Bernardo-Guedes/ChampionsPyArena",
    description: "Champions of the Py Arena is a local two-player fighting game in which each participant controls a character within an arena. The goal is to defeat the opponent by reducing their health bar to zero through attacks and strategic movement."

  },
  {
    id: 3,
    title: "Radio/Clima Browser",
    image: radioPrint,
    logoImage: radioLogo,
    tools: ["Spring Boot", "Thymeleaf"],
    iconTools: ["devicon-spring-plain", "devicon-thymeleaf-plain"],
    gitHubUrl: "https://github.com/Bernardo-Guedes/spring-boot/tree/main/RadioBrowserAPI",
    description: "RadioBrowserAPI is a web application built with Spring Boot that allows users to explore radio stations across Brazilian state capitals, check local weather conditions for each city, and discover new stations. The platform integrates external APIs, features secure user authentication and registration, and allows users to save their favorite radio stations for quick access. With an intuitive interface and personalized features, it provides a convenient way to discover radio stations and stay informed about local weather."
  }
]

export function ScrollHorizontal() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const maxX = useRef(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, (p) => -p * maxX.current)

  useEffect(() => {
    const measure = () => {
      const section = sectionRef.current
      const track = trackRef.current
      if (!section || !track) return

      if (!window.matchMedia("(min-width: 1280px)").matches) {
        maxX.current = 0
        section.style.height = ""
        return
      }
      maxX.current = Math.max(0, track.scrollWidth - window.innerWidth)
      section.style.height = `${window.innerHeight + maxX.current}px`
    }

    measure()
    window.addEventListener("resize", measure)
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)

    return () => {
      window.removeEventListener("resize", measure)
      ro.disconnect()
    }
  }, [])

  return (
    <>
        <div ref={sectionRef} className="relative">
            <div className="flex flex-col gap-10 xl:sticky xl:top-0 xl:h-screen xl:items-start xl:justify-center xl:overflow-hidden">
                <h1 className="w-full text-center text-4xl font-bold text-title mt-15">
                    Featured <span className="text-turquesa">Projects</span>
                </h1>
                <motion.div
                    ref={trackRef}
                    style={{ x }}
                    className="flex flex-col gap-8 items-center px-5 max-xl:transform-none! xl:w-max xl:flex-row lg:px-20"
                >
                    {items.map((item) => (
                    <div key={item.id} className="w-full md:w-160 shrink-0 h-full">
                        <ProjectCard
                        title={item.title}
                        urlLogoImg={item.logoImage}
                        urlImg={item.image}
                        tools={item.tools}
                        iconTools={item.iconTools}
                        urlGitHub={item.gitHubUrl}
                        description={item.description}
                        />
                    </div>
                    ))}
                </motion.div>
            </div>
        </div>
    </>
  )
}

export default ScrollHorizontal
