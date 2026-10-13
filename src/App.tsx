import { ScrollProgress } from "./components/ScrollProgress"
import SplashCursor from "./components/SplashCursor";
import Header from "./components/Header";
import { ScrollHorizontal } from "./components/MotiomScrollHorizontal";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import SafeBoundary from "./components/SafeBoundary";
import { lazy, Suspense } from "react";
const Resume = lazy(() => import("./pages/Resume"));

function App() {
    const canHover = typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    return (
        <>
            <div className="relative isolate min-h-screen bg-bg">

                {/* SplashCursor: somente em dispositivos com mouse */}

                {canHover && (
                    <SafeBoundary fallback={null}>
                        <SplashCursor
                            DENSITY_DISSIPATION={3}
                            VELOCITY_DISSIPATION={2.5}
                            PRESSURE={0.15}
                            CURL={0}
                            SPLAT_RADIUS={0.15}
                            SPLAT_FORCE={5000}
                            COLOR_UPDATE_SPEED={5}
                            SHADING
                            RAINBOW_MODE={false}
                            COLOR="#1fb89c"
                        />
                    </SafeBoundary>
                )}
                

                {/*Cabeçalho */}
                <ScrollProgress />
                <Header />

                {/*Página Home */}
                <section id="home" className="scroll-mt-30">
                    <Home />
                </section>

                {/*Página About */}
                <section id="about" className="scroll-mt-30">
                    <About />
                </section>

                {/*Página Experience */}
                <section id="experience" className="scroll-mt-30">
                    <Experience/>
                </section>

                {/*Página Projects */}
                <section id="projects">
                    <ScrollHorizontal/>
                </section>

                {/*Página Skills */}
                <section id="skills" className="scroll-mt-15">
                    <Skills/>
                </section>

                {/*Página Resume */}
                <section id="resume"className="scroll-mt-20" >
                    <SafeBoundary fallback={<p className="text-center text-text">Currículo disponível no botão de download.</p>}>
                        <Suspense fallback={null}><Resume /></Suspense>
                    </SafeBoundary>    
                </section>

                {/*Página Contact */}
                <section id="contact" className="scroll-mt-30">
                    <Contact/>
                </section>

                {/*Rodapé */}
                <Footer/>

            </div>
        </>
    );
}

export default App;