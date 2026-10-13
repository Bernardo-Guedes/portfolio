import Card from "../components/Card";
import StatCard from "../components/StatCard";
import { FileUser, MapPin, GraduationCap, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/images/logo.png";

function About() {
    const { t } = useTranslation();
    return (
        <div className="xl:flex gap-3 mt-25 lg:mt-40">
            <Card title1={t("sobre.titulo")} title2="Bernardo" tag={t("sobre.tag")} description={t("sobre.texto")} sticky>
                <div className="my-3 border-t border-white/10" />
                    <div id="role" className="flex items-center gap-8">
                        <span className="text-text text-[10px]">{t("sobre.tagCargo")}</span>
                        <div>
                            <p className="text-title font-semibold">{t("sobre.tituloCargo")}</p>
                            <p className="text-text text-xs">{t("sobre.dataLocalCargo")}</p>
                        </div>
                    </div>

                    <div id="based" className="flex items-center gap-6 mt-3">
                        <span className="text-text text-[10px]">{t("sobre.tagLocalizacao")}</span>
                        <p className="text-text flex gap-2 items-center"><MapPin className="h-4 w-4 text-turquesa" />{t("sobre.localizacao")}</p>
                    </div>
                <div className="my-3 border-t border-white/10" />
                <div className="flex items-center justify-between gap-4">
                    <p className="flex items-center gap-2 text-text text-xs">
                        <span className="h-2 w-2 rounded-full bg-turquesa"></span>
                        {t("sobre.novasOportunidades")}
                    </p>
                    <a
                        href="#resume"
                        className="flex items-center gap-2 rounded-2xl text-turquesa bg-turquesa/10 hover:text-text-button hover:bg-bg-button border- border-turquesa px-3 py-1.25 text-xs font-semibold transition-colors"
                    >
                        <FileUser  size={15}/>
                        {t("menu.curriculo")}
                    </a>
                </div>
            </Card>
            <div className="flex flex-col gap-4 lg:mt-3 lg:ms-20 lg:me-38">
                <div className="flex gap-3 mx-5 my-6 xl:my-0 xl:mx-0">
                    <img src={logoImg} alt="Logo" className="mt-2 h-10 w-10 shrink-0 object-contain bg-turquesa/10 p-1 rounded-md border border-turquesa/50"/>
                    <p className="text-text text-sm">{t("sobre.texto2")}</p>
                </div>
                <div className="flex gap-3 items-center rounded-2xl border border-white/10 bg-card-bg/95 p-4 shadow-brand backdrop:blur-xl transition-all duration-300 mx-5 xl:mx-0">
                    <div>
                        <span className="text-turquesa text-[10px]">{t("sobre.tag_educacao")}</span>
                        <div className="flex gap-3 items-center mb-4 mt-2">
                            <div className="text-turquesa border border-turquesa/50 p-2 rounded-md bg-turquesa/10 max-h-max">
                                <BookOpen size={18}/>
                            </div>
                            <div>
                                <h3 className="text-lg text-title font-semibold">{t("sobre.titulo_educacao1")}</h3>
                                <p className="text-text text-[10px]">{t("sobre.texto_educacao1")}</p>
                            </div> 
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="text-turquesa border border-turquesa/50 p-2 rounded-md bg-turquesa/10 max-h-max">
                                <GraduationCap size={18}/>
                            </div>
                            <div>
                                <h3 className="text-lg text-title font-semibold">{t("sobre.titulo_educacao2")}</h3>
                                <p className="text-text text-[10px]">{t("sobre.texto_educacao2")}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="md:flex lg:gap-5">
                    <StatCard stat="6x" title={t("sobre.titulo_stat1")} description={t("sobre.texto_stat1")} />
                    <StatCard stat="2x" title={t("sobre.titulo_stat2")} description={t("sobre.texto_stat2")} />
                </div>
                <div className="md:flex lg:gap-5">
                    <StatCard stat="5+" title={t("sobre.titulo_stat3")} description={t("sobre.texto_stat3")} />
                    <StatCard stat="5+" title={t("sobre.titulo_stat4")} description={t("sobre.texto_stat4")} />
                </div>

            </div>
        </div>

    );
}

export default About;