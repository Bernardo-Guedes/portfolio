import Card from "../components/Card";
import StatCard from "../components/StatCard";
import { FileUser, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();
    return (
        <div className="xl:flex gap-3 mt-25 lg:mt-40">
            <Card title1={t("sobre.titulo")} title2="Bernardo" tag={t("sobre.tag")} description={t("sobre.texto")}>
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
            <div className="flex flex-col gap-3 lg:mt-3 lg:ms-20 lg:me-38">
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