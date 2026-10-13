"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import ProjectCard from "./ProjectCard"
import olympicLogo from "../assets/images/logo_olympic_conscience.webp"
import olympicPrint from "../assets/images/print_olympic_conscience.webp"
import pyArenaLogo from "../assets/images/logo_champions_pyarena.webp"
import pyArenaPrint from "../assets/images/print_champions_pyarena.webp"
import radioPrint from "../assets/images/print_radiobrowser.webp"
import radioLogo from "../assets/images/logo_radiobrowser.png"
import { useTranslation } from "react-i18next";

export function ScrollHorizontal() {
  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      title: t("projetos.titulo_projeto1"),
      image: olympicPrint,
      logoImage: olympicLogo,
      tools: ["HTML 5", "CSS 3", "JavaScript"],
      iconTools: ["devicon-html5-plain", "devicon-css3-plain", "devicon-javascript-plain"],
      gitHubUrl: "https://github.com/Bernardo-Guedes/olympic-conscience",
      description: t("projetos.descricao_projeto1")
    },
    {
      id: 2,
      title: t("projetos.titulo_projeto2"),
      image: pyArenaPrint,
      logoImage: pyArenaLogo,
      tools: ["Python", "Pygame"],
      iconTools: ["devicon-python-plain", "devicon-python-plain"],
      gitHubUrl: "https://github.com/Bernardo-Guedes/ChampionsPyArena",
      description: t("projetos.descricao_projeto2")

    },
    {
      id: 3,
      title: t("projetos.titulo_projeto3"),
      image: radioPrint,
      logoImage: radioLogo,
      tools: ["Spring Boot", "Thymeleaf"],
      iconTools: ["devicon-spring-plain", "devicon-thymeleaf-plain"],
      gitHubUrl: "https://github.com/Bernardo-Guedes/spring-boot/tree/main/RadioBrowserAPI",
      description: t("projetos.descricao_projeto3")
    }
  ]

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
                    {t("projetos.titulo1")} <span className="text-turquesa">{t("projetos.titulo2")}</span>
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
