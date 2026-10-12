import { ScrollProgress } from "./components/ScrollProgress"
import SplashCursor from "./components/SplashCursor";
import Header from "./components/Header";
import { ScrollHorizontal } from "./components/MotiomScrollHorizontal";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";

function App() {
    return (
        <>
            <div className="relative isolate min-h-screen bg-bg">

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
                <section id="resume">
                    <Resume/>
                </section>

                {/*Página Contact */}
                <section id="contact" className="scroll-mt-30">
                    <Contact/>
                </section>

            </div>
        </>
    );
}

export default App;