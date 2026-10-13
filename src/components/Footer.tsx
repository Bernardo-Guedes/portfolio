import logoImg from "../assets/images/logo.png";
import { Mail } from 'lucide-react';
import { useTranslation } from "react-i18next";

function Footer() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.startsWith("en") ? "en" : "pt";
    const fileUrl = `/cv-${lang}.pdf`;
    
    const links = [
        { label: t("menu.sobre"), href: '#about' },
        { label: t("menu.experiencia"), href: '#experience' },
        { label: t("menu.projetos"), href: '#projects' },
        { label: t("menu.ferramentas"), href: '#skills' },
        { label: t("menu.contato"), href: '#contact' },
    ];

    return (
        <footer className="my-5 mx-5 xl:mx-50 rounded-3xl border border-white/10 px-5 py-3 text-text shadow-brand backdrop-blur-md transition-all duration-300">

            {/* Navbar principal */}
            <nav className="pt-3 flex items-center justify-between gap-3">
                <div className="flex gap-2 items-center">
                    <a href="#home">
                        <img src={logoImg} alt="Logo" className="h-6 w-6 shrink-0 object-contain"/>
                    </a>
                    <a  href="#home"
                        className="whitespace-nowrap text-sm font-medium text-text md:me-20 lg:me-70">
                        Bernardo Guedes
                    </a>
                </div>

                {/* Navegação desktop */}
                <div className="hidden items-center gap-5 lg:flex">
                    <ul className="flex items-center gap-5 text-xs">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a  href={link.href}
                                    className="transition-colors hover:text-turquesa">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <div className="my-5 border-t border-white/10" />
            <div className="flex justify-between items-center flex-col xl:flex-row">
                <p className="text-center mb-5 text-xs text-title/80 font-semibold">{t("rodape.texto")}</p>
                <div className="flex flex-col items-center gap-4">
                    <a href={fileUrl} download={t("curriculo.arquivo")} className="cursor-pointer border border-turquesa/30 bg-turquesa/10 text-turquesa/80 text-[12px] font-bold py-2 px-3 hover:bg-turquesa/30 rounded-2xl">{t("rodape.botao")}</a>
                    <div className="flex gap-2 items-center text-text hover:text-turquesa">
                        <a href="mailto:bguedessilveira@gmail.com" target="_blank" rel="noopener noreferrer" className="border border-white/10 hover:border-turquesa hover:bg-turquesa/5 p-2 rounded-full"><Mail size={18}/></a>
                        <a href="https://linkedin.com/in/bernardoguedes" target="_blank" rel="noopener noreferrer"><i className="border border-white/10 hover:border-turquesa hover:bg-turquesa/5 p-2 rounded-full devicon-linkedin-plain"></i></a>
                        <a href="https://github.com/Bernardo-Guedes" target="_blank" rel="noopener noreferrer" ><i className="border border-white/10 hover:border-turquesa hover:bg-turquesa/5 p-2 rounded-full devicon-github-original"></i></a>
                    </div>
                </div>
            </div>
            <p className="text-center xl:text-left mt-5 text-text text-[8px]">{t("rodape.copy")}</p>
        </footer>
    );
}

export default Footer;
