
import { useState } from 'react';
import { Languages, Menu, X, FileUser } from 'lucide-react';
import ThemeToggle from "../components/ThemeToggle";
import logoImg from "../assets/images/logo.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    
    const links = [
        { label: 'Sobre', href: '#about' },
        { label: 'Experiência', href: '#experience' },
        { label: 'Projetos', href: '#projects' },
        { label: 'Ferramentas', href: '#skills' },
        { label: 'Contato', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-2rem)] md:max-w-max ">

            {/* Navbar principal */}
            <nav className="relative mt-5 flex items-center justify-between gap-3 rounded-3xl border border-white/10 bg-card/70 px-5 py-3 text-(--text) shadow-brand backdrop-blur-md transition-all duration-300 md:px-10">
                <img src={logoImg} alt="Logo" className="h-6 w-6 shrink-0"/>
                <a  href="#home"
                    className="hidden whitespace-nowrap text-sm font-semibold text-title md:block md:me-20 lg:me-90">
                    Bernardo Guedes
                </a>

                {/* Navegação desktop */}
                <div className="hidden items-center gap-5 md:flex">
                    <ul className="flex items-center gap-5 text-xs">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a  href={link.href}
                                    className="transition-colors hover:text-title">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-5">
                        <Languages size={20} />
                        <ThemeToggle />
                        <a
                        href="#resume"
                        className="flex items-center gap-2 rounded-2xl text-[#29d6b9] bg-[#29d6b9]/10 hover:text-text-button hover:bg-bg-button border-1 border-[#29d6b9] px-3 py-[5px] text-xs font-semibold transition-colors hover:bg-teal-300"
                    >
                        <FileUser  size={15}/>
                        Resume
                    </a>
                    </div>
                </div>

                {/* Botão mobile */}
                <button
                    type="button"
                    onClick={toggleMenu}
                    className="rounded-lg p-1 text-title transition-colors hover:bg-white/5 md:hidden"
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isOpen}>
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Painel do menu mobile */}
            <div
                className={`absolute right-0 top-full mt-3 w-full overflow-hidden rounded-2xl border border-white/10 bg-card/95 p-4 text-(--text) shadow-brand backdrop-blur-xl transition-all duration-300 md:hidden 
                ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0 pointer-events-none'}`}>
                
                <nav>
                    <ul className="flex flex-col">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="block rounded-lg px-3 py-3 text-sm font-medium text-(--text) transition-colors hover:bg-white/5 hover:text-title">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="my-3 border-t border-white/10" />

                {/* Ações inferiores */}
                <div className="flex items-center justify-between px-1 py-1">
                    <div className="flex items-center gap-4">
                        <Languages size={20} />
                        <ThemeToggle />
                    </div>

                    <a
                        href="#resume"
                        className="flex items-center gap-2 rounded-xl text-text-button bg-bg-button px-4 py-2 text-sm font-semibold transition-colors hover:bg-teal-300"
                    >
                        <FileUser  size={15}/>
                        Resume
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
