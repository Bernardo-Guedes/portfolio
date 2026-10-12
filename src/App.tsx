import Header from "./components/Header";
import { ScrollHorizontal } from "./components/MotiomScrollHorizontal";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";

function App() {
    return (
        <>
            <div className="min-h-screen bg-bg">
                {/*Cabeçalho */}
                <Header />

                {/*Página About */}
                <About />

                {/*Página Experience */}
                <Experience/>

                {/*Página Projects */}
                <ScrollHorizontal/>

                {/*Página Skills */}
                <Skills/>

                {/*Página Resume */}
                <Resume/>

                {/*Página Contact */}
                <Contact/>

            </div>
        </>
    );
}

export default App;