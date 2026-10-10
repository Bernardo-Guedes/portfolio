import Header from "./components/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";

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

            </body>
        </>
    );
}

export default App;