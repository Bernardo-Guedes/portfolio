import Header from "./components/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";

function App() {
    return (
        <>
            <body className="bg-(--bg)">
                {/*Cabeçalho */}
                <Header />

                {/*Página About */}
                <About />

                {/*Página Experience */}
                <Experience/>

                {/*Página Skills */}
                <Skills/>

            </body>
        </>
    );
}

export default App;